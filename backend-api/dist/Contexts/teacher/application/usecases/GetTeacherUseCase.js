"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class GetTeacherUseCase {
    constructor(teacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    getTeacherDetail(teacherId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const teacher = yield this.teacherRepository.findById(teacherId);
            if (!teacher)
                throw Error('Teacher not found');
            return teacher;
        });
    }
}
exports.default = GetTeacherUseCase;
//# sourceMappingURL=GetTeacherUseCase.js.map