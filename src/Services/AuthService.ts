import { UserRepository } from "../Repository/UserRepository";
import jwt from "jsonwebtoken";
import "dotenv/config";



export class AuthService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async cripto() {}

  async login(email: string, password: string) {
    const secretKey = process.env.SECRET_KEY;

    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new Error("E-mail ou senha inválidos.");

    const userPassword = user.getDataValue("password");

    if (userPassword != password) throw new Error("E-mail ou senha inválidos.");

    const token = jwt.sign({ id: user.id, access: user.access }, secretKey!, {
      expiresIn: "7 days",
    });

    return token;
  }

}
