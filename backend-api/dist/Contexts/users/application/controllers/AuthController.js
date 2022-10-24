"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = (0, tslib_1.__importStar)(require("express"));
const inversify_1 = require("inversify");
const AuthService_1 = (0, tslib_1.__importDefault)(require("../services/AuthService"));
const types_1 = require("../../../shared/domain/types/types");
const inversify_express_utils_1 = require("inversify-express-utils");
require("../../infrastructure/passport/local-auth");
let AuthController = class AuthController {
    constructor(authService) {
        this.signInUseCase = authService.GetSignInUseCase();
        this.registerUseCase = authService.GetRegisterUseCase();
    }
    home(req, res) {
        return res.json({
            "home": "ok"
        });
    }
    signin(req, res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (req.isAuthenticated()) {
                return res.json({ 'user': req.user, 'ok': true });
            }
        });
    }
    register(req, res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            // call to a service register
            try {
                const success = yield this.registerUseCase.register(req.body);
                if (success) {
                    return res.status(200).json({ "ok": true, "msg": "User Created successfully" });
                }
            }
            catch (error) {
                console.log(error.message);
                return res.status(500).json({ "ok": false, "msg": error.message });
            }
        });
    }
};
(0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.httpGet)("/"),
    (0, tslib_1.__param)(0, (0, inversify_express_utils_1.request)()),
    (0, tslib_1.__param)(1, (0, inversify_express_utils_1.response)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AuthController.prototype, "home", null);
(0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.httpPost)("/signin", types_1.TYPES.ILoginMiddleware),
    (0, tslib_1.__param)(0, (0, inversify_express_utils_1.request)()),
    (0, tslib_1.__param)(1, (0, inversify_express_utils_1.response)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AuthController.prototype, "signin", null);
(0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.httpPost)("/register"),
    (0, tslib_1.__param)(0, (0, inversify_express_utils_1.request)()),
    (0, tslib_1.__param)(1, (0, inversify_express_utils_1.response)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AuthController.prototype, "register", null);
AuthController = (0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.controller)("/auth"),
    (0, tslib_1.__param)(0, (0, inversify_1.inject)(types_1.TYPES.AuthService)),
    (0, tslib_1.__metadata)("design:paramtypes", [AuthService_1.default])
], AuthController);
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map