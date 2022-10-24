"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = (0, tslib_1.__importDefault)(require("mongoose"));
const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4 // Use IPv4, skip trying IPv6
};
const uri = "mongodb+srv://develop:Passw0rd123@clusterdb.u0zio.mongodb.net/easyspeaker?retryWrites=true&w=majority";
mongoose_1.default.connect(uri, options)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));
//# sourceMappingURL=db.js.map