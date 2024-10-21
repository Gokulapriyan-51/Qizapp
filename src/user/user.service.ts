import express, { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import { ResponseHandler } from '../event-handlers/respone.handlers';
import { ErrorMessage, UnknownErrorMessage } from '../event-handlers/error.handlers'

const prisma = new PrismaClient();

interface CreateUserParams {
    id: any;
    username: string;
    email: string;
    password: string;
    role: 'teacher' | 'student';
  }


const createUser = async (params: CreateUserParams): Promise<any> => {
  try {
    const resultID: [{ next_userid: number }] = 
    await prisma.$queryRaw`SELECT AUTO_INCREMENT FROM information_schema.tables WHERE table_name = 'users' AND table_schema = 'quiz_app'`;
const nextUserID = resultID[0].next_userid;
console.log(nextUserID,'user id');
    const user = await prisma.users.create({
        data: {
          id: nextUserID,
          username: params.username,
          email: params.email,
          password: params.password,
          role: params.role,
        },
      });
      return user;
  } catch (err) {
    if (err instanceof Error) {
      return ErrorMessage(`${err}`, 'Create failed', `${err.message}`);
    } else {
      return UnknownErrorMessage();
    }
  }
};

const getUsers = async (): Promise<any> => {
  try {
    const users = await prisma.users.findMany();
    return users;
  } catch (err) {
    if (err instanceof Error) {
      return ErrorMessage(`${err}`, 'Read failed', `${err.message}`);
    } else {
      return UnknownErrorMessage();
    }
  }
};

export { createUser, getUsers };