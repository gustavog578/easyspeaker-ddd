import ITeacherRepository from "@teacher/domain/repositories/ITeacherRepository";
import IGetAllTeacherUseCase from "../interfaces/IGetAllTeachersUseCase";

import ITeacherDto from "../interfaces/ITeacherDto";


export default class GetAllTeacherUseCase implements IGetAllTeacherUseCase {

    private teacherRepository: ITeacherRepository;
    
    constructor(teacherRepository: ITeacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    public async getAllTeacherDetail(): Promise<ITeacherDto[]> {
        
        const teachers : ITeacherDto[] = await this.teacherRepository.findAll();
        
        if (!teachers)
           throw Error('Teacher not found');

        return teachers;
    }
}