"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = (0, tslib_1.__importStar)(require("express"));
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const types_1 = require("@config/types");
const TeacherService_1 = (0, tslib_1.__importDefault)(require("../services/TeacherService"));
let TeacherController = class TeacherController {
    constructor(teacherService) {
        this.getTeacherUseCase = teacherService.GetTeacherDetail();
        this.getAllTeachersUseCase = teacherService.GetAllTeachers();
    }
    getAll(res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield this.getAllTeachersUseCase.getAllTeacherDetail();
                if (user)
                    return res.status(200).json({ ok: true, user: user });
            }
            catch (error) {
                return res.status(500).json({ ok: false, msg: error.message });
            }
        });
    }
    home(id, res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield this.getTeacherUseCase.getTeacherDetail(id);
                if (user)
                    return res.status(200).json({ ok: true, user: user });
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
], TeacherController.prototype, "getAll", null);
(0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.httpGet)("/:id"),
    (0, tslib_1.__param)(0, (0, inversify_express_utils_1.requestParam)("id")),
    (0, tslib_1.__param)(1, (0, inversify_express_utils_1.response)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TeacherController.prototype, "home", null);
TeacherController = (0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.controller)("/teacher"),
    (0, tslib_1.__param)(0, (0, inversify_1.inject)(types_1.TYPES.TeacherService)),
    (0, tslib_1.__metadata)("design:paramtypes", [TeacherService_1.default])
], TeacherController);
exports.default = TeacherController;
//# sourceMappingURL=TeacherController.js.map