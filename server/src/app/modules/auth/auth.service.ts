import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { generateJwtToken, jwtVerify } from "../../utils/jwtHelper";
import prisma from "../../utils/prisma"
import bcrypt from 'bcrypt';
import { UserStatus } from "@prisma/client";
import emailSender from "../../utils/emailSender";


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
        `
        <div>
        <p>Dear user </p>
            <p>Your password link 
                <a href=${resetUrl}>
                    <button>Reset Password</button>
                </a>
            </p>
        </div>
         
         `)
    return generateToken
}
export const AuthServices = {
    loginUser,
    GenerateRefreshToken,
    changePassword,
    forgotPassword
}