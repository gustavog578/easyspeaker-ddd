import IUserRepository from "@users/domain/repositories/IUserRepository";
import {IGetUserUseCase} from "../interfaces/IUserUseCases";
import IUserDto from "../interfaces/IUserDto";

export default class GetUserUseCase implements IGetUserUseCase {

    private userRepository: IUserRepository;
    
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }
    
    public async getUserDetail(userId: string): Promise<IUserDto> {
        
        const user: IUserDto = await this.userRepository.findById(userId);
        
        if (!user)
           throw Error('User not found');

        return user;
    }
}