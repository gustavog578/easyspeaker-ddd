"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const user_model_1 = (0, tslib_1.__importDefault)(require("./odm/user.model"));
let UserRepository = class UserRepository {
    fetch(user) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (user) {
                return user;
            }
            throw new Error("Method not implemented.");
        });
    }
    findAll() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const users = yield user_model_1.default.find();
            if (users) {
                return users;
            }
            throw new Error("Error");
        });
    }
    findByEmail(email) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const userDb = yield user_model_1.default.findOne({ email: email });
            if (userDb) {
                return userDb;
            }
            return false;
        });
    }
    findById(userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const userDb = yield user_model_1.default.findById(userId);
            if (userDb) {
                return userDb;
            }
            return false;
        });
    }
    save(user) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newUser = new user_model_1.default();
            newUser.email = user.email;
            newUser.password = yield newUser.encryptPassword(user.password);
            newUser.username = user.username;
            newUser.lastname = user.lastname;
            newUser.genre = user.genre;
            try {
                yield newUser.save();
                return true;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
UserRepository = (0, tslib_1.__decorate)([
    (0, inversify_1.injectable)()
], UserRepository);
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map