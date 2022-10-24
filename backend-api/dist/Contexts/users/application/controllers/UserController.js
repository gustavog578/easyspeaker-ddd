"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = (0, tslib_1.__importStar)(require("express"));
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const types_1 = require("@users/domain/types/types");
const UserService_1 = (0, tslib_1.__importDefault)(require("../services/UserService"));
let UserController = class UserController {
    constructor(userService) {
        this.getUserUseCase = userService.GetUserDetail();
        this.getAllUserUseCase = userService.GetAllUsers();
    }
    getAllUsers(res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const users = yield this.getAllUserUseCase.getAllUsers();
                return res.status(200).json({ ok: true, data: users });
            }
            catch (error) {
                return res.status(500).json({ ok: false, msg: error.message });
            }
        });
    }
    home(id, res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield this.getUserUseCase.getUserDetail(id);
                if (user)
                    return res.status(200).json({ ok: true, user: user });
            }
            catch (error) {
                return res.status(500).json({ ok: false, msg: error.message });
            }
        });
    }
    createLanguage(req, res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const newUser = req.body;
                const response = yield this.createUserUseCase.createLanguage(newUser);
                if (!response) {
                    return res
                        .status(401)
                        .json({ ok: false, msg: "Error creating a new user" });
                }
                return res
                    .status(200)
                    .json({ ok: true, msg: "User created successfully" });
            }
            catch (error) {
                return res.status(500).json({ ok: false, msg: error.message });
            }
        });
    }
};
(0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.httpGet)("/all"),
    (0, tslib_1.__param)(0, (0, inversify_express_utils_1.response)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
(0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.httpGet)("/:id"),
    (0, tslib_1.__param)(0, (0, inversify_express_utils_1.requestParam)("id")),
    (0, tslib_1.__param)(1, (0, inversify_express_utils_1.response)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserController.prototype, "home", null);
(0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.httpPut)("/create"),
    (0, tslib_1.__param)(0, (0, inversify_express_utils_1.request)()),
    (0, tslib_1.__param)(1, (0, inversify_express_utils_1.response)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserController.prototype, "createLanguage", null);
UserController = (0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.controller)("/user"),
    (0, tslib_1.__param)(0, (0, inversify_1.inject)(types_1.TYPES.UserService)),
    (0, tslib_1.__metadata)("design:paramtypes", [UserService_1.default])
], UserController);
exports.default = UserController;
//# sourceMappingURL=UserController.js.map