"use strict";
// tslint:disable-next-line:ordered-imports
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const bodyParser = (0, tslib_1.__importStar)(require("body-parser"));
const passport_1 = (0, tslib_1.__importDefault)(require("passport"));
const cors_1 = (0, tslib_1.__importDefault)(require("cors"));
const inversify_express_utils_1 = require("inversify-express-utils");
require("@users/application/controllers/AuthController");
require("@teacher/application/controllers/AuthTeacherController");
require("@users/application/controllers/UserController");
require("@teacher/application/controllers/TeacherController");
require("@languages/application/controllers/LanguageController");
const inversify_config_1 = require("@config/inversify.config");
class App {
    constructor() {
        this.port = 3030;
        this.container = inversify_config_1.Inversifycontainer;
        this.server = new inversify_express_utils_1.InversifyExpressServer(this.container);
        this.middlewares();
    }
    middlewares() {
        console.log("middlewares");
    }
    initConfig() {
        this.server.setConfig((app) => {
            app.use(express_1.default.json({
                limit: '5mb'
            }));
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use(bodyParser.json());
            app.use(passport_1.default.initialize());
            app.use(passport_1.default.session());
            app.use((0, cors_1.default)());
        });
    }
    build() {
        this.app = this.server.build();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`listening on port ${this.port}`);
        });
    }
    routes() {
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map