require("dotenv").config()
import express from "express"
import config from "config"
import db from "../config/db"
import router from "./router"
import Logger from "../config/logger"
import morganMiddleware from "./middleware/morganMiddleware"

const app = express()

app.use(express.json())

app.use(morganMiddleware);

app.use(router)

const port = config.get<number>("port")

app.listen(port, async () => {
    await db()

    Logger.info(`Aplicação rodando na porta: ${port}`)
})