import ITeacherRepository from "@teacher/domain/repositories/ITeacherRepository";
import { TYPES_TEACHER } from "@teacher/domain/types/types";
import { inject, injectable } from "inversify";
import GetAllTeacherUseCase from "../usecases/GetAllTeacherUseCase";
import GetTeacherUseCase from "../usecases/GetTeacherUseCase";

@injectable()
export default class TeacherService {

    constructor(
        @inject(TYPES_TEACHER.ITeacherRepository) private teacherRepository: ITeacherRepository
        ) { }

    public GetTeacherDetail() {
        return new GetTeacherUseCase(this.teacherRepository);
    }

    public GetAllTeachers() {
        return new GetAllTeacherUseCase(this.teacherRepository);
    }
 

}