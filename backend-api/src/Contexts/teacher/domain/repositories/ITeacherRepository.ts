import ITeacherDto from '../../application/interfaces/ITeacherDto';

export default interface ITeacherRepository {
    findByEmail(email: string): Promise<ITeacherDto>;
    findById(teacherId: string): Promise<ITeacherDto>;
    findAll():Promise<ITeacherDto[]>;
    save(teacher: ITeacherDto): Promise<boolean>;

    
}