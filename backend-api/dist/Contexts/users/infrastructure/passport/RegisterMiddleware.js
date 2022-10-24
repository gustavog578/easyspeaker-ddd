"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const passport_1 = (0, tslib_1.__importDefault)(require("passport"));
let RegisterMiddleware = class RegisterMiddleware extends inversify_express_utils_1.BaseMiddleware {
    handler(req, res, next) {
        passport_1.default.authenticate('local-signup', (err, user, info) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (err || !user) {
                return res.status(400).json({
                    'ok': false,
                    'msg': info ? info.message : 'Login failed',
                    'user': user
                });
            }
        }))(req, res, next);
    }
};
RegisterMiddleware = (0, tslib_1.__decorate)([
    (0, inversify_1.injectable)()
], RegisterMiddleware);
exports.default = RegisterMiddleware;
//# sourceMappingURL=RegisterMiddleware.js.map