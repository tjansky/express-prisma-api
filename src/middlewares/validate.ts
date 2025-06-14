import { z } from 'zod'
import { Request, Response, NextFunction } from 'express'

export const validate = (schema: z.ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      return res.status(400).json(result.error.format())
    }

    res.locals.validatedData = result.data
    next()
  }
}