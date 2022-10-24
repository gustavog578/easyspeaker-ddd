"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const RegisterTeacherUseCase_1 = (0, tslib_1.__importDefault)(require("../usecases/RegisterTeacherUseCase"));
const SigninTeacherUseCase_1 = (0, tslib_1.__importDefault)(require("../usecases/SigninTeacherUseCase"));
const types_1 = require("../../domain/types/types");
const inversify_1 = require("inversify");
let AuthTeacherService = class AuthTeacherService {
    constructor(teacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    GetSignInUseCase() {
        return new SigninTeacherUseCase_1.default(this.teacherRepository);
    }
    GetRegisterUseCase() {
        return new RegisterTeacherUseCase_1.default(this.teacherRepository);
    }
};
AuthTeacherService = (0, tslib_1.__decorate)([
    (0, inversify_1.injectable)(),
    (0, tslib_1.__param)(0, (0, inversify_1.inject)(types_1.TYPES_TEACHER.ITeacherRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AuthTeacherService);
exports.default = AuthTeacherService;
//# sourceMappingURL=AuthTeacherService.js.map