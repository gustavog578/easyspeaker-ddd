"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const passport_1 = (0, tslib_1.__importDefault)(require("passport"));
const jwt = (0, tslib_1.__importStar)(require("jsonwebtoken"));
let LoginTeacherMiddleware = class LoginTeacherMiddleware extends inversify_express_utils_1.BaseMiddleware {
    handler(req, res, next) {
        if (req.isAuthenticated())
            return next();
        passport_1.default.authenticate('local-teacher-signin', (err, teacher, info) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (err || !teacher) {
                return res.status(400).json({
                    message: info ? info.message : 'Login failed',
                    teacher: teacher
                });
            }
            req.login(teacher, { session: false }, (err) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                if (err) {
                    res.send(err);
                }
                const access_token = jwt.sign({ _id: teacher.id }, 'SECRET1234', {
                    expiresIn: '2m'
                });
                console.log({ teacher, access_token });
                next();
                //return res.json({ user, access_token });
            }));
        }))(req, res, next);
    }
};
LoginTeacherMiddleware = (0, tslib_1.__decorate)([
    (0, inversify_1.injectable)()
], LoginTeacherMiddleware);
exports.default = LoginTeacherMiddleware;
//# sourceMappingURL=LoginTeacherMiddleware.js.map