import IUserDto from '../../application/interfaces/IUserDto';

export default interface IUserRepository {
    findByEmail(email: string): Promise<IUserDto>;
    findById(userId: string): Promise<IUserDto>
    findAll():Promise<IUserDto[]>;
    fetch(user: IUserDto): Promise<IUserDto>;
    save(user: IUserDto): Promise<boolean>;
}