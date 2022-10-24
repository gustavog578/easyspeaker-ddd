import ITeacherDto from "./ITeacherDto";

export default interface IGetTeacherUseCase {
    getTeacherDetail(teacherId: string): Promise<ITeacherDto>;
}
