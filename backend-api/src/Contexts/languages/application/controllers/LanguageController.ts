import { TYPES } from "@config/types";
import * as express from "express";
import { inject } from "inversify";
import { controller, httpGet, httpPut, interfaces, request, requestParam, response } from "inversify-express-utils";
import {IGetAllLanguageUseCase, IGetLanguageUseCase, ICreateLanguageUseCase} from "../interfaces/ILanguageUseCases";
import ILanguageDto from "../interfaces/ILanguageDto";
import LanguageService from "../services/LanguageService";

@controller("/languages")
export default class LanguagesController implements interfaces.Controller 
{

    private readonly languageUseCase: IGetLanguageUseCase;
    private readonly allLanguageUseCase: IGetAllLanguageUseCase;
    private readonly createLanguageUseCase: ICreateLanguageUseCase;
    //private registerUseCase: IRegisterUseCase;

    constructor( @inject(TYPES.LanguageService) languageService: LanguageService) {
        this.languageUseCase = languageService.getLanguageById()
        this.allLanguageUseCase = languageService.GetAllLanguages()
        this.createLanguageUseCase = languageService.CreateLanguage()
    }
    @httpGet("/")
    public async getAllLanguages(@response() res: express.Response  ) {
        try {
            const languages = await this.allLanguageUseCase.getAllLanguages();
            return res.status(200).json({"ok": true, "data": languages});
            
        } catch (error) {
            return res.status(500).json({"ok": false, "msg": error.message   });    
        }
    }

    @httpGet("/:id")
    public async getLanguageById(@requestParam("id") id: string, @response() res: express.Response  ) {
        try {
            const lang = await this.languageUseCase.getLanguageById(id);
            return res.status(200).json({"ok": true, "data": lang});
            
        } catch (error) {
            return res.status(500).json({"ok": false, "msg": error.message   });    
        }
    }

    @httpPut("/create")
    public async createLanguage( @request() req: express.Request, @response() res: express.Response) {
        
        try {
            const newLanguage:ILanguageDto = req.body; 
            const response = await this.createLanguageUseCase.createLanguage(newLanguage);

            if(!response){
                return res.status(401).json({'ok': false, 'msg': 'Error creating a new language'})
            }
            return res.status(200).json({'ok': true, 'msg': 'Language created successfully'})

        } catch (error) {
            return res.status(500).json({"ok": false, "msg": error.message   });    
        }

    }
       
   

}