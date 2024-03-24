import prisma from "../../utils/prisma"
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
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
    const accessToken = jwt.sign({
        email: isUserExit.email,
        role: isUserExit.role
    },
        "3idfmdksk"
    );
    return { accessToken }
}

export const AuthServices = {
    loginUser
}