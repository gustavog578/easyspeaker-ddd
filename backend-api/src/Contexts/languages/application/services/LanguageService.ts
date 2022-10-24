import { TYPES } from "@config/types";
import ILanguageRepository from "@languages/domain/repositories/ILanguageRepository";
import { inject, injectable } from "inversify";
import GetAllLanguageUseCase from "../usecases/GetAllLanguagesUseCase";
import GetLanguageUseCase from "../usecases/GetLanguageUseCase";
import CreateLanguageUseCase from "../usecases/CreateLanguageUseCase";

@injectable()
export default class LanguageService {

    constructor(
        @inject(TYPES.ILanguageRepository) private languageRepository: ILanguageRepository
        ) { }

    public getLanguageById() {
        return new GetLanguageUseCase(this.languageRepository);
    }

    public GetAllLanguages() {
        return new GetAllLanguageUseCase(this.languageRepository);
    }
    
    public CreateLanguage() {
        return new CreateLanguageUseCase(this.languageRepository);
    }

  /*  public SaveLanguage(data:ILanguageDto) {
        return new SaveLanguageUseCase(this.languageRepository);
    }*/
 

}