import { Router, Request, Response } from "express";
import { UserController } from "../Controller/UserController/UserController";

const userController = new UserController()

export const userRouter = Router()

userRouter.get('/', userController.getAllUsers)


