import { Response, Request } from "express"
import { CustomRequest } from "../../middleware/authMiddleware"
import { tokenToString } from "typescript/unstable/ast"



export class CLPController{

    constructor(){

    }

    async functionA (req: Request, res: Response){

        try{
            const tokenAcess = (req as CustomRequest).token?.access

            if(!tokenAcess) throw new Error("Realize login!")

            if(tokenAcess > 1) {
                res.send("Funcionalidade disponível!")
            }else{
                throw new Error("Você não tem autorização para acessar essa funcionalidade!")
            }


        }catch(error: any){
            res.status(401).json({error: error.message})
        }      

    }


}