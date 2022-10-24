import IUserDto from "./IUserDto";

export interface IGetUserUseCase {
    getUserDetail(userId: string): Promise<IUserDto>;
}

export interface IGetAllUsersUseCase {
    getAllUsers(): Promise<IUserDto[]>;
}

export interface ICreateUserUseCase {
    createLanguage(data: IUserDto): Promise<boolean>;
}

export default interface IRegisterUseCase {
    register(userDto: IUserDto): Promise<boolean>;
}

export default interface ISigninUseCase {
    signin(userDto: IUserDto): Promise<IUserDto>;
}
