import User from '../Models/User/User';
import { CreateUserDTO, UpdateUserDTO } from '../Models/User/UserDTOS';

export class UserRepository {
  async findAll() {
    return await User.findAll({ attributes: { exclude: ['password'] } });
  }

  async findById(id: number) {
    return await User.findByPk(id, { attributes: { exclude: ['password'] } });
  }

  async findByEmail(email: string) {
    return await User.findOne({ where: { email } });
  }

  async create(userData: CreateUserDTO) {
    return await User.create(userData as any);
  }

  // O repositório assume a responsabilidade de atualizar no banco
  async update(id: number, userData: UpdateUserDTO) {
    const user = await User.findByPk(id);
    if (!user) return null;

    return await user.update(userData);
  }

  // O repositório assume a responsabilidade de deletar no banco
  async delete(id: number): Promise<boolean> {
    const user = await User.findByPk(id);
    if (!user) return false;

    await user.destroy();
    return true;
  }
}