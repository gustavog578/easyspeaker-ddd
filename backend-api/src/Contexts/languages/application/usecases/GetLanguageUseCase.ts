import ILanguageRepository from "@languages/domain/repositories/ILanguageRepository";
import {IGetLanguageUseCase} from "../interfaces/ILanguageUseCases";
import ILanguageDto from "../interfaces/ILanguageDto";



export default class GetLanguageUseCase implements IGetLanguageUseCase {

    private languageRepository: ILanguageRepository;
    
    constructor(languageRepository: ILanguageRepository) {
        this.languageRepository = languageRepository;
    }
    
    public async getLanguageById(languageId: string): Promise<ILanguageDto> {
        
        const language: ILanguageDto = await this.languageRepository.findById(languageId);
    
        if (!language)
           throw Error('Language not found');

        return language;
    }

  /*  public async GetAllLanguagesUseCase(): Promise<ITeacherDto> {
        
        const teachers : ITeacherDto[] = await this.teacherRepository.findAll();
        
        if (!teachers)
           throw Error('Teacher not found');

        return teachers;
    }*/
}