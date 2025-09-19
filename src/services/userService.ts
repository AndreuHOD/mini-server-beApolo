import { PrismaClient, user } from "@prisma/client";
const prismaClient = new PrismaClient();
import { UserDto } from "../dto/userDto";

export const getUsers = (): Promise<user[]> => {
  return prismaClient.user.findMany();
};

export const getUser = (id: number): Promise<user | null> => {
  return prismaClient.user.findUnique({
    where: { id },
  });
};

export const createUser = (userObj: user): Promise<user> => {
  console.log("Creating user:", userObj);
  return prismaClient.user.create({
    data: userObj,
  });
};

