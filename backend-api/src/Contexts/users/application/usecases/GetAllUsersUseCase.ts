
import IUserRepository from "@users/domain/repositories/IUserRepository";
import {IGetAllUsersUseCase} from "../interfaces/IUserUseCases";
import IUserDto from "../interfaces/IUserDto";

export default class GetAllUsersUseCase implements IGetAllUsersUseCase {

    private userRepository: IUserRepository;
    
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }
    
    public async getAllUsers(): Promise<IUserDto[]> {
        
        const users: IUserDto[] = await this.userRepository.findAll();
        
        if (!users)
           throw Error('Users not found');

        return users;
    }
}