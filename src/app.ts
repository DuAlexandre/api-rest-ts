import express from "express"
import config from "config"

const app = express()

app.use(express.json())

const port = config.get<number>("port")

app.listen(port, async () => {
    console.log(`Aplicação rodando na porta: ${port}`)
})