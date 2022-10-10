import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"

export const validate = (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request)

    if(errors.isEmpty()) {
        return next()
    }

    const extratectErrors: object[] = []

    errors.array().map((err) => extratectErrors.push({[err.param]: err.msg}))

    return response.status(422).json({
        errors: extratectErrors
    })
}