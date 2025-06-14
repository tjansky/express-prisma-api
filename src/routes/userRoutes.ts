// src/routes/userRoutes.ts
import { Router } from 'express'
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController'
import { validate } from '../middlewares/validate'
import { userCreateSchema, userUpdateSchema } from '../schemas/userSchema'

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', validate(userCreateSchema), createUser)
router.put('/:id', validate(userUpdateSchema), updateUser)
router.delete('/:id', deleteUser)

export default router