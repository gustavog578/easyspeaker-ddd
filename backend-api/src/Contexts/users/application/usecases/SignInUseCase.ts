import IUserRepository from "../../domain/repositories/IUserRepository";
import ISigninUseCase from "../interfaces/ISigninUseCase";
import IUserDto from "../interfaces/IUserDto";
import { IUserLogin } from "../interfaces/IUserLogin";

export default class SigninUseCase implements ISigninUseCase {

    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }


    // implement Passport signin
    public async signin(userLogin: IUserLogin): Promise<IUserDto> {

        const user = await this.userRepository.findByEmail(userLogin.email);
        if (!user)
           throw Error('User not found');

        return user;
    
    }

}