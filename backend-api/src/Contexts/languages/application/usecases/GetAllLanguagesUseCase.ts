import ILanguageRepository from "@languages/domain/repositories/ILanguageRepository";
import {IGetAllLanguageUseCase} from "../interfaces/ILanguageUseCases";
import ILanguageDto from "../interfaces/ILanguageDto";



export default class GetAllLanguageUseCase implements IGetAllLanguageUseCase {

    private languageRepository: ILanguageRepository;
    
    constructor(languageRepository: ILanguageRepository) {
        this.languageRepository = languageRepository;
    }
    
      public async getAllLanguages(): Promise<ILanguageDto[]> {
        
        const languages : ILanguageDto[] = await this.languageRepository.findAll();
        
        if (!languages)
           throw Error('Language not found');

        return languages;
    }
}