import "reflect-metadata";

import "source-map-support/register";

import "module-alias/register";

import App from "./server/infrastructure/express/App";
import "./Contexts/users/infrastructure/database/db";
void (async () => {
    try {
        const app = new App();
        app.initConfig();
        app.build();
        app.listen();
    } catch (error) {
        console.log(error);
        return error;
    }
})();
