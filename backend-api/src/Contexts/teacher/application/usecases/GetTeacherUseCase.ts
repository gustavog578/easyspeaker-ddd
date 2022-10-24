import ITeacherRepository from "@teacher/domain/repositories/ITeacherRepository";
import IGetTeacherUseCase from "../interfaces/IGetTeacherUseCase";
import ITeacherDto from "../interfaces/ITeacherDto";


export default class GetTeacherUseCase implements IGetTeacherUseCase {

    private teacherRepository: ITeacherRepository;
    
    constructor(teacherRepository: ITeacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    
    public async getTeacherDetail(teacherId: string): Promise<ITeacherDto> {
        
        const teacher: ITeacherDto = await this.teacherRepository.findById(teacherId);
        
        if (!teacher)
           throw Error('Teacher not found');

        return teacher;
    }

  /*  public async getTeachersDetails(): Promise<ITeacherDto> {
        
        const teachers : ITeacherDto[] = await this.teacherRepository.findAll();
        
        if (!teachers)
           throw Error('Teacher not found');

        return teachers;
    }*/
}