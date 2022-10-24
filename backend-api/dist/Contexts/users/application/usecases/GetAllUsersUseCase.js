"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class GetAllUsersUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getAllUsers() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const users = yield this.userRepository.findAll();
            if (!users)
                throw Error('Users not found');
            return users;
        });
    }
}
exports.default = GetAllUsersUseCase;
//# sourceMappingURL=GetAllUsersUseCase.js.map