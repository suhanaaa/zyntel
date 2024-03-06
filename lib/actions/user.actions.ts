"use server";

import { PrismaClient } from "@prisma/client";
import { handleError } from "../utils";
import { error } from "console";

const prisma = new PrismaClient();

//create
export async function createUser(user: CreateUserParams) {
  try {
    const newUser = await prisma.user.create({
      data: user,
    });
    return newUser;
  } catch (error) {
    handleError(error);
  }
}

//read
export async function getUserById(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!user) throw new Error("User not found");

    return user;
  } catch (error) {
    handleError(error);
  }
}

//update
export async function updatedUser(clerkId: string, user: UpdateUserParams) {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        clerkId: clerkId,
      },
      data: user,
    });

    if (!updatedUser) throw new Error("User update failed");
    return updatedUser;
  } catch (error) {
    handleError(error);
  }
}

//delete
export async function deleteUser(clerkId: string) {
  try {
    const userToDelete = await prisma.user.findUnique({
      where: {
        clerkId: clerkId,
      },
    });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    const deletedUser = await prisma.user.delete({
      where: {
        clerkId: clerkId,
      },
    });

    return deletedUser;
  } catch (error) {
    handleError(error);
  }
}
