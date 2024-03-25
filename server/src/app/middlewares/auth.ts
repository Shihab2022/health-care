
import { NextFunction, Request, Response } from 'express';
import { Secret } from 'jsonwebtoken';
import { jwtVerify } from '../utils/jwtHelper';
import config from '../../config';
import ApiError from '../errors/ApiError';
import httpStatus from 'http-status';

const auth = (...roles: string[]) => {
    const errorMessage = "You are not authorized"
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req?.headers?.authorization
            if (!token) {
                throw new ApiError(httpStatus.UNAUTHORIZED, errorMessage)
            }
            const verifyUser = jwtVerify(token, config.jwt_access_secret as Secret)
            if (roles.length && !roles.includes(verifyUser.role)) {
                throw new ApiError(httpStatus.FORBIDDEN, errorMessage)
            }
            next()
        } catch (error) {
            next(error)
        }
    }
}


export default auth