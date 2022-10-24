import ITeacherDto from "./ITeacherDto";

export default interface IGetAllTeacherUseCase {
    getAllTeacherDetail(): Promise<ITeacherDto[]>;
}

