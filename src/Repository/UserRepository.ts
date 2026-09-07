import User from "../Models/User";

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserDTO {
  name?: string;
  email?: string;
  password?: string;
}

export class UserRepository {
  // Lista todos os usuários sem expor a senha
  async findAll() {
    return await User.findAll({
      attributes: { exclude: ['password'] },
    });
  }

  // Busca um único usuário pelo ID
  async findById(id: number) {
    return await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
  }

  // Busca por e-mail (útil para verificar duplicidade ou fazer login)
  async findByEmail(email: string) {
    return await User.findOne({ where: { email } });
  }

  // Insere um novo usuário
  async create(userData: CreateUserDTO) {
    const newUser = await User.create(userData as any);
    
    // Retorna os dados cadastrados sem a senha na resposta
    const userJson = newUser.toJSON() as Record<string, any>;
    delete userJson.password;
    return userJson;
  }

  // Atualiza um usuário existente
  async update(id: number, userData: UpdateUserDTO) {
    const user = await User.findByPk(id);
    if (!user) return null;

    await user.update(userData);
    
    const userJson = user.toJSON() as Record<string, any>;
    delete userJson.password;
    return userJson;
  }

  // Remove um usuário
  async delete(id: number) {
    const user = await User.findByPk(id);
    if (!user) return false;

    await user.destroy();
    return true;
  }
}