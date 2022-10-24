"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("@config/types");
const inversify_1 = require("inversify");
const GetAllLanguagesUseCase_1 = (0, tslib_1.__importDefault)(require("../usecases/GetAllLanguagesUseCase"));
const GetLanguageUseCase_1 = (0, tslib_1.__importDefault)(require("../usecases/GetLanguageUseCase"));
const CreateLanguageUseCase_1 = (0, tslib_1.__importDefault)(require("../usecases/CreateLanguageUseCase"));
let LanguageService = class LanguageService {
    constructor(languageRepository) {
        this.languageRepository = languageRepository;
    }
    getLanguageById() {
        return new GetLanguageUseCase_1.default(this.languageRepository);
    }
    GetAllLanguages() {
        return new GetAllLanguagesUseCase_1.default(this.languageRepository);
    }
    CreateLanguage() {
        return new CreateLanguageUseCase_1.default(this.languageRepository);
    }
};
LanguageService = (0, tslib_1.__decorate)([
    (0, inversify_1.injectable)(),
    (0, tslib_1.__param)(0, (0, inversify_1.inject)(types_1.TYPES.ILanguageRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], LanguageService);
exports.default = LanguageService;
//# sourceMappingURL=LanguageService.js.map