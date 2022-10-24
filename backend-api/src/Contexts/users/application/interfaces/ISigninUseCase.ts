import IUserDto from "./IUserDto";
import { IUserLogin } from "./IUserLogin";

export default interface ISigninUseCase {
    signin(userLogin: IUserLogin): Promise<IUserDto>;
}
