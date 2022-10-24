import IUserRepository from "../../domain/repositories/IUserRepository";
import IUserDto from "../interfaces/IUserDto";
import IRegisterUseCase from "../interfaces/IRegisterUseCase";

export default class RegisterUseCase implements IRegisterUseCase {

    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async register(userRegister: IUserDto): Promise<boolean > {
 
        const user = await this.userRepository.findByEmail(userRegister.email);
        
        if( user )
            throw Error ("User already exists");
        
        const saved = this.userRepository.save(userRegister)
        
        if( saved )
            return true;
        
    }

}
