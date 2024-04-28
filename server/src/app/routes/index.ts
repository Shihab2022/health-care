
import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { AdminRoutes } from '../modules/admin/admin.routes';
import { AuthRouter } from '../modules/auth/auth.routes';
import { SpecialtiesRoute } from '../modules/Specialties/specialties.route';
import { DoctorRoutes } from '../modules/Doctor/doctor.routes';
import { PatientRoutes } from '../modules/Patient/patient.routes';
import { ScheduleRoutes } from '../modules/Schedule/schedule.routes';
import { DoctorScheduleRoutes } from '../modules/DoctorSchedule/doctorSchedule.routes';
import { AppointmentRoutes } from '../modules/Appointment/appointment.routes';
import { PaymentRoutes } from '../modules/Payment/payment.routes';
import { PrescriptionRoutes } from '../modules/Prescription/prescription.routes';
import { ReviewRoutes } from '../modules/Review/review.routes';
import { MetaRoutes } from '../modules/Meta/meta.routes';

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
    {
        path: '/doctor',
        endPoint: DoctorRoutes
    },
    {
        path: '/specialties',
        endPoint: SpecialtiesRoute
    },
    {
        path: '/patient',
        endPoint: PatientRoutes
    },
    {
        path: '/schedule',
        endPoint: ScheduleRoutes
    },
    {
        path: '/doctor-schedule',
        endPoint: DoctorScheduleRoutes
    },
    {
        path: '/appointment',
        endPoint: AppointmentRoutes
    },
    {
        path: '/payment',
        endPoint: PaymentRoutes
    },
    {
        path: '/prescription',
        endPoint: PrescriptionRoutes
    }
    ,
    {
        path: '/review',
        endPoint: ReviewRoutes
    },
    {
        path: '/meta',
        endPoint: MetaRoutes
    }
]


moduleRoutes.forEach(route => router.use(route.path, route.endPoint))
export const rootRouter = router