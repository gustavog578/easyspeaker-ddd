"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const passport_1 = (0, tslib_1.__importDefault)(require("passport"));
const passportLocal = (0, tslib_1.__importStar)(require("passport-local"));
const LocalStrategy = passportLocal.Strategy;
const teacher_model_1 = (0, tslib_1.__importDefault)(require("../odm/teacher.model"));
passport_1.default.serializeUser((teacher, done) => {
    done(null, teacher.id);
});
passport_1.default.deserializeUser((id, done) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const user = yield teacher_model_1.default.findById(id);
    done(null, user);
}));
passport_1.default.use('local-teacher-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    // teacherRepositoryInterface
    const teacher = yield teacher_model_1.default.findOne({ email: email });
    if (!teacher) {
        return done({ "ok": false, "msg": "Teacher not found" }, false);
    }
    if (!teacher.comparePassword(password)) {
        return done({ "ok": false, "msg": "Incorrect password" }, false);
    }
    return done(null, teacher);
})));
//# sourceMappingURL=local-teacher-auth.js.map