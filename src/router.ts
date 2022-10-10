import { Router } from "express"
import MovieController from "./controllers/movieController"
import { validate } from "./middleware/handleValidation"
import { movieCreateValidation } from "./middleware/movieValidation"

const router = Router()

router.post("/movie", movieCreateValidation(), validate, MovieController.createMovie)

export default router