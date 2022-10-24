import ITeacherRepository from "../../domain/repositories/ITeacherRepository";
import RegisterTeacherUseCase from "../usecases/RegisterTeacherUseCase";
import SigninTeacherUseCase from "../usecases/SigninTeacherUseCase";
import { TYPES_TEACHER } from "../../domain/types/types";
import { inject, injectable } from "inversify";


@injectable()
export default class AuthTeacherService {

    constructor(
                @inject(TYPES_TEACHER.ITeacherRepository) private teacherRepository: ITeacherRepository
                ) { }

    public GetSignInUseCase() {
        return new SigninTeacherUseCase(this.teacherRepository);
    }
    public GetRegisterUseCase() {
        return new RegisterTeacherUseCase(this.teacherRepository);
    }
}