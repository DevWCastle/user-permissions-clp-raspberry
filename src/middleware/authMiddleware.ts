import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';


export const secretKey= process.env.SECRET_KEY;

export interface TokenPayload {
  id: string;
  access: number;
}

export interface CustomRequest extends Request {
 token?: TokenPayload;
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
 try {
   const token = req.header('Authorization')?.replace('Bearer ', '');

   if (!token) {
     throw new Error("Realize o loginaaa!");
   }

   const decoded = jwt.verify(token, secretKey!) as TokenPayload;
   (req as CustomRequest).token = decoded;

   next();
 } catch (err) {
   res.status(401).send('Realize o login');
 }
};