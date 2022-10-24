import express from "express";
import { injectable } from "inversify";
import { BaseMiddleware } from "inversify-express-utils";
import passport from "passport";
import * as jwt from "jsonwebtoken";

import  ILoginTeacherMiddleware from "../../domain/repositories/IAuthTeacherMiddleware";
import ITeacherDto from "../../application/interfaces/ITeacherDto";


@injectable()

export default class LoginTeacherMiddleware extends BaseMiddleware implements ILoginTeacherMiddleware{
    
    public handler(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {

        if( req.isAuthenticated())
            return next();
        
        
        passport.authenticate('local-teacher-signin', async (err: any, teacher: ITeacherDto, info:any) => {        
    
            if (err || !teacher) {
                return res.status(400).json({
                    message: info ? info.message : 'Login failed',
                    teacher: teacher
                });
    
            }
    
            req.login(teacher, { session: false }, async (err) => {
                
                if (err) { res.send(err); }
    
                const access_token = jwt.sign({ _id: teacher.id },
                    'SECRET1234',
                    {
                        expiresIn: '2m'
                    });
                console.log({ teacher, access_token });   
                next() 
                //return res.json({ user, access_token });
            });
        })
        (req, res, next);
      
    }
}