import IUserRepository from "../../domain/repositories/IUserRepository";
import SigninUseCase from "../usecases/SignInUseCase";
import { TYPES } from "../../../shared/domain/types/types";
import { inject, injectable } from "inversify";
import RegisterUseCase from "../usecases/RegisterUseCase";

@injectable()
export default class AuthService {

    constructor(
                @inject(TYPES.IUserRepository) private userRepository: IUserRepository
                ) { }

    public GetSignInUseCase() {
        return new SigninUseCase(this.userRepository);
    }
    public GetRegisterUseCase() {
        return new RegisterUseCase(this.userRepository);
    }
}