import IUserRepository from "@users/domain/repositories/IUserRepository";
import { ICreateUserUseCase } from "../interfaces/IUserUseCases";
import IUserDto from "../interfaces/IUserDto";

export default class CreateLanguageUseCase implements ICreateUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async createLanguage(data: IUserDto): Promise<boolean> {
        const res = await this.userRepository.save(data);
        if (!res) throw Error("Error creating a new user");

        return res;
    }
}
