"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class RegisterTeacherUseCase {
    constructor(teacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    register(userRegister) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.teacherRepository.findByEmail(userRegister.email);
            if (user)
                throw Error("Teacher already exists");
            const saved = this.teacherRepository.save(userRegister);
            if (saved)
                return true;
        });
    }
}
exports.default = RegisterTeacherUseCase;
//# sourceMappingURL=RegisterTeacherUseCase.js.map