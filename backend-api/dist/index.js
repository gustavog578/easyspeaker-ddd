"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
require("source-map-support/register");
require("module-alias/register");
const App_1 = (0, tslib_1.__importDefault)(require("./server/infrastructure/express/App"));
require("./Contexts/users/infrastructure/database/db");
void (() => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const app = new App_1.default();
        app.initConfig();
        app.build();
        app.listen();
    }
    catch (error) {
        console.log(error);
        return error;
    }
}))();
//# sourceMappingURL=index.js.map