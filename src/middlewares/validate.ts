import { z } from 'zod'
import { Request, Response, NextFunction } from 'express'

export const validate = (schema: z.ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      res.status(400).json(result.error.format())
      return
    }

    res.locals.validatedData = result.data
    next()
  }
}