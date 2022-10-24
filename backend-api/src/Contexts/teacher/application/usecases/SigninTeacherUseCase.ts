import ITeacherRepository from "../../domain/repositories/ITeacherRepository";
import ISigninTeacherUseCase from "../interfaces/ISigninTeacherUseCase";
import ITeacherDto from "../interfaces/ITeacherDto";

export default class SigninTeacherUseCase implements ISigninTeacherUseCase {

    private userRepository: ITeacherRepository;

    constructor(userRepository: ITeacherRepository) {
        this.userRepository = userRepository;
    }


    // implement Passport signin
    public async signin(teacherLogin: ITeacherLogin): Promise<ITeacherDto> {

        const user = await this.userRepository.findByEmail(teacherLogin.email);
        if (!user)
           throw Error('Teacher not found');

        return user;
    
    }

}

interface ITeacherLogin {
    email: string,
    password:string
}