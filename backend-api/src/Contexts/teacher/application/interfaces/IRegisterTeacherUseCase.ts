import ITeacherDto from "./ITeacherDto";

export default interface IRegisterTeacherUseCase {
    register(teacherDto: ITeacherDto): Promise<boolean>;
}