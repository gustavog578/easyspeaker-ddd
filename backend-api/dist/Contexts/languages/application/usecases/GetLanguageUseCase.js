"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class GetLanguageUseCase {
    constructor(languageRepository) {
        this.languageRepository = languageRepository;
    }
    getLanguageById(languageId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const language = yield this.languageRepository.findById(languageId);
            if (!language)
                throw Error('Language not found');
            return language;
        });
    }
}
exports.default = GetLanguageUseCase;
//# sourceMappingURL=GetLanguageUseCase.js.map