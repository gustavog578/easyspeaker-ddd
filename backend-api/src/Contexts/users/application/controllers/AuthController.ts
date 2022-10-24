import * as express from "express";
import { inject } from "inversify";
import ISigninUseCase from "../interfaces/ISigninUseCase";
import AuthService from "../services/AuthService";
import { TYPES } from "../../../shared/domain/types/types";
import {controller, httpGet, httpPost, interfaces, request, response } from "inversify-express-utils";
import "../../infrastructure/passport/local-auth";
import IRegisterUseCase from "../interfaces/IRegisterUseCase";


@controller("/auth")
export default class AuthController implements interfaces.Controller {
    
    private readonly signInUseCase: ISigninUseCase;
    private registerUseCase: IRegisterUseCase;

    constructor( @inject(TYPES.AuthService) authService: AuthService) {
        this.signInUseCase = authService.GetSignInUseCase();
        this.registerUseCase = authService.GetRegisterUseCase();
    }

   @httpGet("/")
    public home(@request() req: express.Request, @response() res: express.Response ) {

        return res.json({
            "home" : "ok"
        })
    }

  
    @httpPost("/signin", TYPES.ILoginMiddleware)
    public async signin(@request() req: express.Request, @response() res: express.Response): Promise<express.Response<any, Record<string, any>>> {
    
        if( req.isAuthenticated()){
            return res.json({ 'user' : req.user, 'ok': true })
        }
    }

    @httpPost("/register")
    public async register(@request() req: express.Request, @response() res: express.Response) : Promise<express.Response<any, Record<string, any>>> {

        // call to a service register
        try {
            const success = await this.registerUseCase.register(req.body);
            if(success) {
                return res.status(200).json({"ok": true, "msg": "User Created successfully"});
            }
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({"ok": false, "msg": error.message   });    
        }
    }

}