import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { generateJwtToken, jwtVerify } from "../../utils/jwtHelper";
import prisma from "../../utils/prisma"
import bcrypt from 'bcrypt';


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

export const AuthServices = {
    loginUser,
    GenerateRefreshToken
}