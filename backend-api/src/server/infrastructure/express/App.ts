// tslint:disable-next-line:ordered-imports

import express from "express";
import * as bodyParser from "body-parser";
import passport from "passport";
import cors from "cors";

import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import "@users/application/controllers/AuthController";
import "@teacher/application/controllers/AuthTeacherController";
import "@users/application/controllers/UserController";
import "@teacher/application/controllers/TeacherController";
import "@languages/application/controllers/LanguageController";
import { Inversifycontainer } from "@config/inversify.config";

class App {

    public app : express.Application;
    public port?: number;
    private server: InversifyExpressServer;
    public container: Container;
   
    constructor() {
        this.port = 3030;
        this.container = Inversifycontainer;
        this.server = new InversifyExpressServer(this.container);
        this.middlewares()
    }

    private middlewares(): void {
        console.log("middlewares");
       

    }
    public initConfig()
    {
        this.server.setConfig((app: express.Application) =>
        {
            
            app.use(express.json({
                limit: '5mb'
            }));
            app.use(bodyParser.urlencoded({extended: true}));
            app.use(bodyParser.json());
            app.use(passport.initialize());
            app.use(passport.session());
            app.use(cors());
        });
    }

    public build()
    {
        this.app = this.server.build();
    }

    public listen()
    {
        this.app.listen(this.port, () =>
        {
            console.log(`listening on port ${this.port}`);
        });
    }

   public routes() : void {
    
    }

}

export default App;
