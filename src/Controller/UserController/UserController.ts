import { Request, Response } from 'express';
import { UserRepository } from '../../Repository/UserRepository';


export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await this.userRepository.findAll();
      res.json(users);
      
    } catch (error: any) {
      res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
  };

  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password } = req.body;

      // Validação rápida de duplicidade
      const userExists = await this.userRepository.findByEmail(email);
      if (userExists) {
        res.status(400).json({ error: 'E-mail já está em uso.' });
        return;
      }

      const newUser = await this.userRepository.create({ name, email, password });
      res.status(201).json(newUser);
    } catch (error: any) {
      res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
  };
}