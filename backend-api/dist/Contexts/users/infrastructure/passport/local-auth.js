"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const passport_1 = (0, tslib_1.__importDefault)(require("passport"));
const passportLocal = (0, tslib_1.__importStar)(require("passport-local"));
const LocalStrategy = passportLocal.Strategy;
const user_model_1 = (0, tslib_1.__importDefault)(require("../odm/user.model"));
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser((id, done) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findById(id);
    done(null, user);
}));
passport_1.default.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    console.log("llega STRATEGY");
    // userRepositoryInterface
    const user = yield user_model_1.default.findOne({ email: email });
    if (!user) {
        return done({ "ok": false, "msg": "User not found" }, false);
    }
    if (!user.comparePassword(password)) {
        return done({ "ok": false, "msg": "Incorrect password" }, false);
    }
    return done(null, user);
})));
//# sourceMappingURL=local-auth.js.map