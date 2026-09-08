import { UserRepository } from '../Repository/UserRepository';
import { CreateUserDTO, UpdateUserDTO } from '../Models/User/UserDTOS';

export class UserService {
  // Construtor usando o atalho do TS (private userRepository)
  constructor(private userRepository: UserRepository) {}

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findById(id: number) {
    const user = await this.userRepository.findById(id);
    if (!user) throw new Error('Usuário não encontrado.');
    return user;
  }

  async create(userData: CreateUserDTO) {
    // Regra de negócio: Valida duplicidade antes de chamar o repositório
    const userExists = await this.userRepository.findByEmail(userData.email);
    if (userExists) {
      throw new Error('E-mail já está em uso.');
    }

    // Regra de negócio futura: Criptografar senha aqui com Bcrypt

    const newUser = await this.userRepository.create(userData);

    const userJson = newUser.toJSON() as Record<string, any>;
    delete userJson.password;
    return userJson;
  }

  async update(id: number, userData: UpdateUserDTO) {
    const updatedUser = await this.userRepository.update(id, userData);
    if (!updatedUser) throw new Error('Usuário não encontrado para atualização.');

    const userJson = updatedUser.toJSON() as Record<string, any>;
    delete userJson.password;
    return userJson;
  }

  async delete(id: number) {
    const success = await this.userRepository.delete(id);
    if (!success) throw new Error('Usuário não encontrado para deleção.');

    return true;
  }
}