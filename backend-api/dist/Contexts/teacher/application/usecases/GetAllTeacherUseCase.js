"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class GetAllTeacherUseCase {
    constructor(teacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    getAllTeacherDetail() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const teachers = yield this.teacherRepository.findAll();
            if (!teachers)
                throw Error('Teacher not found');
            return teachers;
        });
    }
}
exports.default = GetAllTeacherUseCase;
//# sourceMappingURL=GetAllTeacherUseCase.js.map