import ILanguageDto from "./ILanguageDto";

export interface IGetLanguageUseCase {
    getLanguageById(languageId: string): Promise<ILanguageDto>;
}

export interface IGetAllLanguageUseCase {
    getAllLanguages(): Promise<ILanguageDto[]>;
}

export interface ICreateLanguageUseCase {
    createLanguage(data: ILanguageDto): Promise<boolean>;
}
