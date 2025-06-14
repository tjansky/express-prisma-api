import { Request, Response } from 'express'
import * as userService from '../services/userService'

// GET /users
export const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
  const users = await userService.getAllUsers()
  res.json(users)
}

// GET /users/:id
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id)
  const user = await userService.getUserById(id)
  if (!user) {
    res.status(404).json({ error: 'User not found' })
    return
  }
  res.json(user)
}

// POST /users
export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email } = req.body
  try {
    const user = await userService.createUser(name, email)
    res.status(201).json(user)
  } catch (err) {
    res.status(400).json({ error: 'Could not create user' })
  }
}

// PUT /users/:id
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id)
  const { name, email } = req.body
  try {
    const user = await userService.updateUser(id, name, email)
    res.json(user)
  } catch {
    res.status(404).json({ error: 'User not found' })
  }
}

// DELETE /users/:id
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id)
  try {
    await userService.deleteUser(id)
    res.status(204).send()
  } catch {
    res.status(404).json({ error: 'User not found' })
  }
}