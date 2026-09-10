import { Router, Request, Response } from "express";
import { CLPController } from "../Controller/CLPController/ClpController";
import { authMiddleware } from "../middleware/authMiddleware";


const clpController = new CLPController()

export const clpRouter = Router()

clpRouter.get('/a', authMiddleware, clpController.functionA)

