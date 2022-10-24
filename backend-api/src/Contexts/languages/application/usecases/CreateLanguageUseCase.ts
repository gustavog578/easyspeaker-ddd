import ILanguageRepository from "@languages/domain/repositories/ILanguageRepository";
import { ICreateLanguageUseCase } from "../interfaces/ILanguageUseCases";
import ILanguageDto from "../interfaces/ILanguageDto";

export default class CreateLanguageUseCase implements ICreateLanguageUseCase {
    private languageRepository: ILanguageRepository;

    constructor(languageRepository: ILanguageRepository) {
        this.languageRepository = languageRepository;
    }

    public async createLanguage(data: ILanguageDto): Promise<boolean> {
        
        const res = await this.languageRepository.save(data);
        if (!res) throw Error("Error creating a new language");
        
        return res;
    }
}
