"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateLanguageUseCase {
    constructor(languageRepository) {
        this.languageRepository = languageRepository;
    }
    createLanguage(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.languageRepository.save(data);
            if (!res)
                throw Error("Error creating a new language");
            return res;
        });
    }
}
exports.default = CreateLanguageUseCase;
//# sourceMappingURL=CreateLanguageUseCase.js.map