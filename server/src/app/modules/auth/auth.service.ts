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
    const accessToken = generateJwtToken(tokenData, "3idfdddsdsmdksk", "5min")
    const refreshToken = generateJwtToken(tokenData, "3iderff34343mdksk", "10d");
    return { accessToken, refreshToken, needPasswordChange: isUserExit.needPasswordChange }
}


const GenerateRefreshToken = async (token: string) => {
    let decoded
    try {
        decoded = jwtVerify(token, "3iderff34343mdksk")
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
    }, "3idfdddsdsmdksk", "5min")
    return {
        accessToken, needPasswordChange: userData.needPasswordChange
    }
}

export const AuthServices = {
    loginUser,
    GenerateRefreshToken
}