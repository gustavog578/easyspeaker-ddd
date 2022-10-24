import Teacher from "../domain/entities/Teacher";
import { injectable } from "inversify";
import ITeacherRepository from "../domain/repositories/ITeacherRepository";
import TeacherModel from "./odm/teacher.model";
import ITeacherDto from "../application/interfaces/ITeacherDto";

@injectable()
export default class TeacherRepository implements ITeacherRepository {

    public async fetch(teacher: Teacher): Promise<Teacher> {

        if(teacher){
            return teacher;
        }

        throw new Error("Method not implemented.");
    }

    public async findById(teacherId: string): Promise<ITeacherDto> {
        const teacherDb = await TeacherModel.findById(teacherId);
        return teacherDb;
    }
    
    public async findAll(): Promise<ITeacherDto[]> {
        const teacherDb = await TeacherModel.find();
        console.log(teacherDb);
        return teacherDb;
    }
    public async findByEmail(email: string)  {
        
        const teacherDb = await TeacherModel.findOne({ email: email });
        if(teacherDb){
            return teacherDb;
        }
        return false

    }

    public async save(teacher: ITeacherDto): Promise<boolean> {

        const newTeacher    = new TeacherModel();
        newTeacher.email    = teacher.email;
        newTeacher.password = await newTeacher.encryptPassword(teacher.password);
        newTeacher.username = teacher.username;
        newTeacher.lastname = teacher.lastname;
        newTeacher.genre    = teacher.genre;
        
        try {
            await newTeacher.save();
            return true;
        } 
        catch (error) {
            console.log(error);
        }
        
    }

}