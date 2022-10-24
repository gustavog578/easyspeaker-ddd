"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class GetUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getUserDetail(userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findById(userId);
            if (!user)
                throw Error('User not found');
            return user;
        });
    }
}
exports.default = GetUserUseCase;
//# sourceMappingURL=GetUserUseCase.js.map