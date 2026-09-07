import { Request, Response } from "express"

export class UserController{

    getAllUsers = (req: Request, res: Response ): Response =>{
       return res.send("todos os neguinhos")
       
    }



}