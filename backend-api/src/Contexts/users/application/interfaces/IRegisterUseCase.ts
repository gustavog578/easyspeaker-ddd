import IUserDto from "./IUserDto";


export default interface IRegisterUseCase {
    register(teacherDto: IUserDto): Promise<boolean>;
}