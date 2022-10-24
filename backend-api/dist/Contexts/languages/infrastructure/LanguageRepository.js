"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const language_model_1 = (0, tslib_1.__importDefault)(require("./odm/language.model"));
let LanguageRepository = class LanguageRepository {
    findById(languageId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const languageDb = yield language_model_1.default.findById(languageId);
            if (languageDb) {
                return languageDb;
            }
            return false;
        });
    }
    findAll() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const languages = yield language_model_1.default.find();
            return languages;
        });
    }
    save(language) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newLanguage = new language_model_1.default();
            newLanguage.country_name = language.country_name;
            newLanguage.country_code = language.country_code;
            try {
                yield newLanguage.save();
                return true;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
LanguageRepository = (0, tslib_1.__decorate)([
    (0, inversify_1.injectable)()
], LanguageRepository);
exports.default = LanguageRepository;
//# sourceMappingURL=LanguageRepository.js.map