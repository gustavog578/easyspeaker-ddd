import IUserRepository from "@users/domain/repositories/IUserRepository";
import { TYPES } from "@users/domain/types/types";
import { inject, injectable } from "inversify";
import GetAllUsersUseCase from "../usecases/GetAllUsersUseCase";
import GetUserUseCase from "../usecases/GetUserUseCase";

@injectable()
export default class UserService {

    constructor(
        @inject(TYPES.IUserRepository) private userRepository: IUserRepository
        ) { }

    public GetUserDetail() {
        return new GetUserUseCase(this.userRepository);
    }

    public GetAllUsers() {
        return new GetAllUsersUseCase(this.userRepository);
    }
 

}