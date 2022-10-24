import ILanguageDto from "@languages/application/interfaces/ILanguageDto";
import { injectable } from "inversify";
import languageModel from "./odm/language.model";

@injectable()
export default class LanguageRepository {    // implements IUserRepository {


    public async findById(languageId: string)  {
        const languageDb = await languageModel.findById(languageId);
        
        if(languageDb){
            return languageDb;
        }
        return false

    }
    public async findAll(): Promise<ILanguageDto[]> {
        const languages = await languageModel.find();
        return languages;
    }

    public async save(language: ILanguageDto): Promise<boolean> {

        const newLanguage = new languageModel();
        newLanguage.country_name = language.country_name;
        newLanguage.country_code = language.country_code;
        
        try {
            await newLanguage.save();
            return true;
        } 
        catch (error) {
            console.log(error);
        }
        
    }

    

}