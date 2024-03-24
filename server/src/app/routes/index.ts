
import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { AdminRoutes } from '../modules/admin/admin.routes';
import { AuthRouter } from '../modules/auth/auth.routes';

const router = express.Router()

const moduleRoutes = [
    {
        path: '/auth',
        endPoint: AuthRouter
    },
    {
        path: '/user',
        endPoint: userRoutes
    },
    {
        path: '/admin',
        endPoint: AdminRoutes
    },

]


moduleRoutes.forEach(route => router.use(route.path, route.endPoint))
export const rootRouter = router