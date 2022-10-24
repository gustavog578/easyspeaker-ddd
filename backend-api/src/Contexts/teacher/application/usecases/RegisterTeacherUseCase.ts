import ITeacherRepository from "../../domain/repositories/ITeacherRepository";
import ITeacherDto from "../interfaces/ITeacherDto";
import IRegisterTeacherUseCase from "../interfaces/IRegisterTeacherUseCase";

export default class RegisterTeacherUseCase implements IRegisterTeacherUseCase {

    private teacherRepository: ITeacherRepository;

    constructor(teacherRepository: ITeacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public async register(userRegister: ITeacherDto): Promise<boolean > {
 
        const user = await this.teacherRepository.findByEmail(userRegister.email);
        
        if( user )
            throw Error ("Teacher already exists");
        
        const saved = this.teacherRepository.save(userRegister)
        
        if( saved )
            return true;
        
    }

}
