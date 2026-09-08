import { time } from "node:console";
import { UserRepository } from "../Repository/UserRepository";

export class AuthService{
    private userRepository: UserRepository

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository
    }

     cripto = () =>{

    }

     login = async (email: string, password: string) => {
    
        const user = await this.userRepository.findByEmail(email)

        if(!user) throw new Error('Usuário não encontrado.')

        const userPassword = user.getDataValue('password') 
        
        if(userPassword != password) throw new Error('Senha incorreta.')

            
        

    }

}