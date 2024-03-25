import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'
import notFound from "./app/utils/notFound"
import { rootRouter } from "./app/routes"
import globalErrorHandler from "./app/middlewares/globalErrorHandler"

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.get('/', (req, res) => {
    res.send({
        message: "this is test route"
    })
})
app.use("/api/v1", rootRouter)
app.use(globalErrorHandler)

app.use(notFound)
export default app