import { Request, Response } from 'express';
import { UserService } from '../../Services/UserSevice';
import { UserRepository } from '../../Repository/UserRepository';
import { AuthService } from '../../Services/AuthService';



export class UserController {
  private userService: UserService;
  private authService: AuthService;
  private userRespository: UserRepository = new UserRepository()

  constructor() {

    this.userService = new UserService(this.userRespository);
    this.authService = new AuthService(this.userRespository);

  }

  public getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await this.userService.findAll();
      res.json(users);
      
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password } = req.body;

      const newUser = await this.userService.create({ name, email, password });
      res.status(201).json(newUser);

    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  public login = async (req: Request, res: Response) => {
    try{

      const {email, password} = req.body

      const token = await this.authService.login(email, password)

      res.status(200).json({ token: token})


    }catch(error: any){
      res.status(401).json({error: error.message})
    }
  }
}