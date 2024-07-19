import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'
import notFound from "./app/utils/notFound"
import { rootRouter } from "./app/routes"
import globalErrorHandler from "./app/middlewares/globalErrorHandler"
import cron from 'node-cron'
import { corsAllowOrigin } from "./constant"
import { cancelAppointments, testingRoute } from "./app/modules/others"
const app = express()

app.use(cors(corsAllowOrigin))
app.use(express.json())
app.use(cookieParser())

cron.schedule('* * * * *', cancelAppointments);
app.get('/', testingRoute)
app.use("/api/v1", rootRouter)
app.use(globalErrorHandler)

app.use(notFound)
export default app