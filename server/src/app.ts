import express from "express"
import cors from "cors"
import { rootRouter } from "./app/routes"
const app = express()

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send({
        message: "this is test route"
    })
})
app.use("/api/v1", rootRouter)
export default app