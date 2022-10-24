import express from "express";
import { injectable } from "inversify";
import { BaseMiddleware } from "inversify-express-utils";
import passport from "passport";
import * as jwt from "jsonwebtoken";
//import User from "../../domain/entities/User";
import IRegisterMiddleware  from "../../domain/repositories/IAuthMiddleware";
import IUserDto from "../../application/interfaces/IUserDto";
import User from "../../domain/entities/User";



@injectable()

export default class RegisterMiddleware extends BaseMiddleware implements IRegisterMiddleware {

    public handler(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {

            passport.authenticate('local-signup', async (err: any, user: any, info:any) => {     

                if (err || !user) {
                    return res.status(400).json({
                        'ok': false,
                        'msg': info ? info.message : 'Login failed',
                        'user': user
                    });
        
                }

             
                
            })(req, res, next)

    }

}