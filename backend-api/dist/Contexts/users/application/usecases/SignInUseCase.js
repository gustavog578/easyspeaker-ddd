"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class SigninUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    // implement Passport signin
    signin(userLogin) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByEmail(userLogin.email);
            if (!user)
                throw Error('User not found');
            return user;
        });
    }
}
exports.default = SigninUseCase;
//# sourceMappingURL=SignInUseCase.js.map