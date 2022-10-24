"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateLanguageUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    createLanguage(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.userRepository.save(data);
            if (!res)
                throw Error("Error creating a new user");
            return res;
        });
    }
}
exports.default = CreateLanguageUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map