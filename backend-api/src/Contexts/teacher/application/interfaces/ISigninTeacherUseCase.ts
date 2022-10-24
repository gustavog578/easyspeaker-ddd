import ITeacherDto from "./ITeacherDto";

export default interface ISigninTeacherUseCase {
    signin(teacherDto: ITeacherDto): Promise<ITeacherDto>;
}