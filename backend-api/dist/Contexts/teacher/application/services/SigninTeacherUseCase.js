"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class SigninTeacherUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    // implement Passport signin
    signin(teacherLogin) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByEmail(teacherLogin.email);
            if (!user)
                throw Error('Teacher not found');
            return user;
        });
    }
}
exports.default = SigninTeacherUseCase;
//# sourceMappingURL=SigninTeacherUseCase.js.map