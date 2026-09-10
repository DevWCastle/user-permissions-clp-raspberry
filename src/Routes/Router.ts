import { Router } from "express";
import { userRouter } from "./UserRoute";
import { clpRouter } from "./clpRoutes";

export const router = Router()

router.use('/users', userRouter)
router.use('/clp', clpRouter)
