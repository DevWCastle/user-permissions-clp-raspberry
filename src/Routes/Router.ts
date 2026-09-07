import { Router } from "express";
import { userRouter } from "./UserRoute";

export const router = Router()

router.use('/users', userRouter)
