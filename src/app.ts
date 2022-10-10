require("dotenv").config()
import express from "express"
import config from "config"
import db from "../config/db"
import router from "./router"
import Logger from "../config/logger"

const app = express()

app.use(express.json())

const port = config.get<number>("port")

app.listen(port, async () => {
    await db()

    Logger.info(`Aplicação rodando na porta: ${port}`)
})