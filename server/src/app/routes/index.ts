
import express from 'express';
import { userRoutes } from '../modules/user/user.route';

const router = express.Router()

const moduleRoutes = [
    // {
    //     path: '/auth',
    //     endPoint: AuthRoute
    // },
    {
        path: '/user',
        endPoint: userRoutes
    },

]


moduleRoutes.forEach(route => router.use(route.path, route.endPoint))
export const rootRouter = router