import express from "express";
import { injectable } from "inversify";
import { BaseMiddleware } from "inversify-express-utils";
import passport from "passport";
import * as jwt from "jsonwebtoken";
import  ILoginMiddleware from "../../domain/repositories/IAuthMiddleware";
import IUserDto from "../../application/interfaces/IUserDto";


@injectable()

export default class LoginMiddleware extends BaseMiddleware implements ILoginMiddleware{
    
    public handler(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {

        if( req.isAuthenticated())
            return next();
        
        
        passport.authenticate('local-signin', async (err: any, user: IUserDto, info:any) => {        
    
            if (err || !user) {
                return res.status(400).json({
                    message: info ? info.message : 'Login failed',
                    user: user
                });
    
            }
    
            req.login(user, { session: false }, async (err) => {
                
                if (err) { res.send(err); }
    
                const access_token = jwt.sign({ _id: user.id },
                    'SECRET1234',
                    {
                        expiresIn: '2m'
                    });
          
                return res.json({ user, access_token });
            });
        })
        (req, res, next);
      
    }
}