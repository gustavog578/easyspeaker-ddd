"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class GetAllLanguageUseCase {
    constructor(languageRepository) {
        this.languageRepository = languageRepository;
    }
    getAllLanguages() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const languages = yield this.languageRepository.findAll();
            if (!languages)
                throw Error('Language not found');
            return languages;
        });
    }
}
exports.default = GetAllLanguageUseCase;
//# sourceMappingURL=GetAllLanguagesUseCase.js.map