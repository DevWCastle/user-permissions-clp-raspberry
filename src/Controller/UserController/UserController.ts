import { Request, Response } from 'express';
import { UserService } from '../../Services/UserSevice';
import { UserRepository } from '../../Repository/UserRepository';


export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService( new UserRepository() );
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
}