import ILanguageDto from "@languages/application/interfaces/ILanguageDto";

export default interface ILanguageRepository {
    findById(languageId: string): Promise<ILanguageDto>;
    findAll(): Promise<ILanguageDto[]>;
    save(language: ILanguageDto): Promise<boolean>;
}
