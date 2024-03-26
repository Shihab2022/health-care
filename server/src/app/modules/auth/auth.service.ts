import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { generateJwtToken, jwtVerify } from "../../utils/jwtHelper";
import prisma from "../../utils/prisma"
import bcrypt from 'bcrypt';
import { UserStatus } from "@prisma/client";
import emailSender from "../../utils/emailSender";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";


const loginUser = async (payload: {
    email: string,
    password: string
}) => {
    const isUserExit = await prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email
        }
    })
    const isPasswordCorrect = await bcrypt.compare(payload.password, isUserExit.password)

    if (!isPasswordCorrect) {
        throw new Error("Password is not correct!")
    }
    const tokenData = {
        email: isUserExit.email,
        role: isUserExit.role
    }
    const accessToken = generateJwtToken(tokenData, config.jwt_access_secret as Secret, config.jwt_access_expire_in as string)
    const refreshToken = generateJwtToken(tokenData, config.jwt_refresh_secret as Secret, config.jwt_refresh_expire_in as string);
    return { accessToken, refreshToken, needPasswordChange: isUserExit.needPasswordChange }
}


const GenerateRefreshToken = async (token: string) => {
    let decoded
    try {
        decoded = jwtVerify(token, config.jwt_refresh_secret as Secret)
    } catch (error) {
        throw new Error("You are not authorization")
    }
    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            email: decoded.email
        }
    })
    const accessToken = generateJwtToken({
        email: userData.email,
        role: userData.role
    }, config.jwt_access_secret as Secret, config.jwt_access_expire_in as string)
    return {
        accessToken, needPasswordChange: userData.needPasswordChange
    }
}


const changePassword = async (user: any, payload: any) => {
    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            email: user.email,
            status: UserStatus.ACTIVE
        }
    });

    const isCorrectPassword: boolean = await bcrypt.compare(payload.oldPassword, userData.password);

    if (!isCorrectPassword) {
        throw new Error("Password incorrect!")
    }

    const hashedPassword: string = await bcrypt.hash(payload.newPassword, 12);

    await prisma.user.update({
        where: {
            email: userData.email
        },
        data: {
            password: hashedPassword,
            needPasswordChange: false
        }
    })

    return {
        message: "Password changed successfully!"
    }

}
const forgotPassword = async (payload: { email: string }) => {
    const isUserExit = await prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email,
            status: UserStatus.ACTIVE
        }
    })
    const generateToken = generateJwtToken({ email: isUserExit.email, role: isUserExit.role }, config.reset_access_secret as Secret, config.reset_pass_access_expire_in as string)
    const resetUrl = config.reset_pass_base_link + `?userId=${isUserExit.id}&token=${generateToken}`
    //http://localhost:3000/reset-password?userId="33rhjdjmksmi"&token="fkkkkkkkkkkkkk"
    await emailSender(isUserExit.email,
        // `
        // <div>
        // <p>Dear user </p>
        //     <p>Your password link 
        //         <a href=${resetUrl}>
        //             <button>Reset Password</button>
        //         </a>
        //     </p>
        // </div>

        //  `

        `
        <!DOCTYPE html>
<html lang="pl">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>Activation</title>

		<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

		<style>
			.proton-body {
				display: block;
				padding: 0px;
				margin: 0px;
			}

			.proton-wrapper {
				width: 100%;
				display: block;
				overflow: hidden;
				box-sizing: border-box;
				color: #222;
				background: #f2f2fd;
				font-size: 18px;
				font-weight: normal;
				font-family: 'Baloo 2', 'Open Sans', 'Roboto', 'Segoe UI', 'Helvetica Neue', Helvetica, Tahoma, Arial, monospace, sans-serif;
			}

			.proton-table {
				border-collapse: collapse;
				border-spacing: 0;
				border: 0px;
				width: 640px;
				max-width: 90%;
				margin: 100px auto;
				box-shadow: 0px 20px 48px rgba(0, 0, 0, 0.2);
				border-radius: 10px;
				overflow: hidden;
			}

			.proton-table tr {
				background: #ffffff;
			}

			.proton-table td,
			.proton-table th {
				border: 0px;
				border-spacing: 0;
				border-collapse: collapse;
			}

			.proton-table tr td {
				padding: 0px 40px;
				box-sizing: border-box;
			}

			.proton-margin {
				float: left;
				width: 100%;
				overflow: hidden;
				height: 40px;
				padding-bottom: 0px;
				box-sizing: border-box;
			}

			.proton-div {
				float: left;
				width: 100%;
				overflow: hidden;
				box-sizing: border-box;
			}

			.proton-table h1,
			.proton-table h2,
			.proton-table h3,
			.proton-table h4 {
				float: left;
				width: 100%;
				margin: 0px 0px 20px 0px !important;
				padding: 0px;
			}

			.proton-table h1 {
				font-size: 33px;
			}

			.proton-table h2 {
				font-size: 26px;
			}

			.proton-table h3 {
				font-size: 23px;
			}

			.proton-table p {
				float: left;
				width: 100%;
				font-size: 18px;
				margin: 0px 0px 20px 0px !important;
			}

			.proton-table h4 {
				font-size: 20px;
			}

			.proton-table a {
				color: #6d49fc;
				font-weight: bold;
			}

			.proton-table a:hover {
				color: #55cc55;
			}

			.proton-table a:active {
				color: #ff6600;
			}

			.proton-table a:visited {
				color: #ff00ff;
			}

			.proton-table a.proton-link {
				display: inline-block;
				width: auto !important;
				outline: none !important;
				text-decoration: none !important;
			}

			.proton-table img,
			.proton-table a img {
				display: block;
				max-width: 100%;
				margin-bottom: 20px;
				border: 0px;
				border-radius: 10px;
				overflow: hidden;
			}

			.proton-table a.proton-button {
				display: inline-block;
				font-weight: bold;
				font-size: 17px;
				padding: 15px 40px;
				margin: 20px 0px;
				color: #ffffff !important;
				background: #6d49fc !important;
				border-radius: 10px;
				text-decoration: none;
				outline: none;
			}

			.proton-table a.proton-button:hover {
				color: #ffffff !important;
				background: #55cc55 !important;
			}

			.proton-code {
				float: left;
				width: 100%;
				overflow: hidden;
				box-sizing: border-box;
				padding: 15px 40px;
				margin: 20px 0px;
				border: 1px dashed #6d49fcaa;
				background: #6d49fc11;
				color: #6d49fc;
				font-weight: 700;
				font-size: 23px;
			}

			.proton-flex {
				float: left;
				width: 100%;
				text-align: center;
			}

			.proton-divider {
				float: left;
				width: 100%;
				overflow: hidden;
				margin: 20px 0px;
				border-top: 2px solid #f2f2fd;
			}
		</style>

		<style>
			.proton-flex img {
				margin: 10px;
				max-width: 15%;
				width: 40px;
			}
		</style>
	</head>

	<body class="proton-body">
		<div class="proton-wrapper">
			<table class="proton-table">
				<tbody>
					<tr class="proton-tr">
						<td class="proton-td" colspan="10" style="">
							<div class="proton-margin"></div>
							<center>
								<h1>Welcome !</h1>
								<img src="https://proton.me/images/social/proton-mail-og.png" alt="Image" />
							</center>
							<h2>Confirm email address</h2>
							<p>Activate youe email addres now.</p>
						</td>
					</tr>

					<tr class="proton-tr">
						<td class="proton-td" colspan="10" style="">
							<center>
								<a href=${resetUrl} class="proton-button" target="_blank">Reset Password</a>
							</center>
						</td>
					</tr>

					<tr class="proton-tr">
						<td class="proton-td" colspan="10" style="">
							<h3>Regards</h3>
							<p>Have a nice day!</p>
						</td>
					</tr>

					<tr class="proton-tr">
						<td class="proton-td" colspan="10" style="">
							<div class="proton-divider"></div>
							<center>
								<span style="color: #706d6b"> © 2023 Proton Switzerland </span>
							</center>
							<div class="proton-flex">
								<a href="https://proton.me" class="proton-link">
									<img src="https://img.icons8.com/?size=64&id=LPcVDft9Isqt&format=png" alt="Image" />
								</a>
								<a href="https://proton.me" class="proton-link">
									<img src="https://img.icons8.com/?size=64&id=LPcVDft9Isqt&format=png" alt="Image" />
								</a>
								<a href="https://proton.me" class="proton-link">
									<img src="https://img.icons8.com/?size=64&id=LPcVDft9Isqt&format=png" alt="Image" />
								</a>
								<a href="https://proton.me" class="proton-link">
									<img src="https://img.icons8.com/?size=64&id=LPcVDft9Isqt&format=png" alt="Image" />
								</a>
							</div>
							<div class="proton-margin"></div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</body>
</html>`
    )
    return generateToken
}
const resetPassword = async (token: string, payload: { id: string, password: string }) => {
    console.log({ token, payload })

    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            id: payload.id,
            status: UserStatus.ACTIVE
        }
    });

    const isValidToken = jwtVerify(token, config.reset_access_secret as Secret)

    if (!isValidToken) {
        throw new ApiError(httpStatus.FORBIDDEN, "Forbidden!")
    }

    // hash password
    const password = await bcrypt.hash(payload.password, 12);

    // update into database
    await prisma.user.update({
        where: {
            id: payload.id
        },
        data: {
            password
        }
    })
};

export const AuthServices = {
    loginUser,
    GenerateRefreshToken,
    changePassword,
    forgotPassword,
    resetPassword
}