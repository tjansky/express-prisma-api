import prisma from '../prisma/client'
import { User } from '@prisma/client'

export const getAllUsers = async (): Promise<User[]> => {
  return prisma.user.findMany()
}

export const getUserById = async (id: number): Promise<User | null> => {
  return prisma.user.findUnique({ where: { id } })
}

export const createUser = async (name: string, email: string): Promise<User> => {
  return prisma.user.create({ data: { name, email } })
}

export const updateUser = async (
  id: number,
  name: string,
  email: string
): Promise<User> => {
  return prisma.user.update({
    where: { id },
    data: { name, email },
  })
}

export const deleteUser = async (id: number): Promise<void> => {
  await prisma.user.delete({ where: { id } })
}