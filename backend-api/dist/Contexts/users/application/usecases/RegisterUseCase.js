"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class RegisterUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    register(userRegister) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByEmail(userRegister.email);
            if (user)
                throw Error("User already exists");
            const saved = this.userRepository.save(userRegister);
            if (saved)
                return true;
        });
    }
}
exports.default = RegisterUseCase;
//# sourceMappingURL=RegisterUseCase.js.map