import * as express from "express";
import { inject } from "inversify";
import ISigninTeacherUseCase from "../interfaces/ISigninTeacherUseCase";
import AuthTeacherService from "../services/AuthTeacherService";
import { TYPES_TEACHER } from "../../domain/types/types";
import {controller, httpGet, httpPost, interfaces, request, response } from "inversify-express-utils";
import "../../infrastructure/passport/local-teacher-auth";
import IRegisterTeacherUseCase from "../interfaces/IRegisterTeacherUseCase";



@controller("/teacher/auth")
export default class AuthTeacherController implements interfaces.Controller {
    
    private readonly signInTeacherUseCase: ISigninTeacherUseCase;
    private registerTeacherUseCase: IRegisterTeacherUseCase;

    constructor( @inject(TYPES_TEACHER.AuthTeacherService) authTeacherService: AuthTeacherService) {
        this.signInTeacherUseCase = authTeacherService.GetSignInUseCase();
        this.registerTeacherUseCase = authTeacherService.GetRegisterUseCase();
    }

   @httpGet("/")
    public home(@request() req: express.Request, @response() res: express.Response ) {

        return res.json({
            "home" : "ok"
        })
    }

  
    @httpPost("/signin", TYPES_TEACHER.ILoginTeacherMiddleware)
    public async signin(@request() req: express.Request, @response() res: express.Response): Promise<express.Response<any, Record<string, any>>> {
    
        if( req.isAuthenticated()){
            return res.json({ 'user' : req.user, 'ok': true })
        }
    }

    @httpPost("/register")
    public async register(@request() req: express.Request, @response() res: express.Response) : Promise<express.Response<any, Record<string, any>>> {

        // call to a service register
        try {
            const success = await this.registerTeacherUseCase.register(req.body);
            if(success) {
                return res.status(200).json({"ok": true, "msg": "User Created successfully"});
            }
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({"ok": false, "msg": error.message   });    
        }
        
    }

}