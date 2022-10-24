"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("@teacher/domain/types/types");
const inversify_1 = require("inversify");
const GetAllTeacherUseCase_1 = (0, tslib_1.__importDefault)(require("../usecases/GetAllTeacherUseCase"));
const GetTeacherUseCase_1 = (0, tslib_1.__importDefault)(require("../usecases/GetTeacherUseCase"));
let TeacherService = class TeacherService {
    constructor(teacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    GetTeacherDetail() {
        return new GetTeacherUseCase_1.default(this.teacherRepository);
    }
    GetAllTeachers() {
        return new GetAllTeacherUseCase_1.default(this.teacherRepository);
    }
};
TeacherService = (0, tslib_1.__decorate)([
    (0, inversify_1.injectable)(),
    (0, tslib_1.__param)(0, (0, inversify_1.inject)(types_1.TYPES_TEACHER.ITeacherRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], TeacherService);
exports.default = TeacherService;
//# sourceMappingURL=TeacherService.js.map