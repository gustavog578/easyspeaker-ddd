"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("@config/types");
const express = (0, tslib_1.__importStar)(require("express"));
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const LanguageService_1 = (0, tslib_1.__importDefault)(require("../services/LanguageService"));
let LanguagesController = class LanguagesController {
    //private registerUseCase: IRegisterUseCase;
    constructor(languageService) {
        this.languageUseCase = languageService.getLanguageById();
        this.allLanguageUseCase = languageService.GetAllLanguages();
        this.createLanguageUseCase = languageService.CreateLanguage();
    }
    getAllLanguages(res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const languages = yield this.allLanguageUseCase.getAllLanguages();
                return res.status(200).json({ "ok": true, "data": languages });
            }
            catch (error) {
                return res.status(500).json({ "ok": false, "msg": error.message });
            }
        });
    }
    getLanguageById(id, res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const lang = yield this.languageUseCase.getLanguageById(id);
                return res.status(200).json({ "ok": true, "data": lang });
            }
            catch (error) {
                return res.status(500).json({ "ok": false, "msg": error.message });
            }
        });
    }
    createLanguage(req, res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const newLanguage = req.body;
                const response = yield this.createLanguageUseCase.createLanguage(newLanguage);
                if (!response) {
                    return res.status(401).json({ 'ok': false, 'msg': 'Error creating a new language' });
                }
                return res.status(200).json({ 'ok': true, 'msg': 'Language created successfully' });
            }
            catch (error) {
                return res.status(500).json({ "ok": false, "msg": error.message });
            }
        });
    }
};
(0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.httpGet)("/"),
    (0, tslib_1.__param)(0, (0, inversify_express_utils_1.response)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LanguagesController.prototype, "getAllLanguages", null);
(0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.httpGet)("/:id"),
    (0, tslib_1.__param)(0, (0, inversify_express_utils_1.requestParam)("id")),
    (0, tslib_1.__param)(1, (0, inversify_express_utils_1.response)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LanguagesController.prototype, "getLanguageById", null);
(0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.httpPut)("/create"),
    (0, tslib_1.__param)(0, (0, inversify_express_utils_1.request)()),
    (0, tslib_1.__param)(1, (0, inversify_express_utils_1.response)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LanguagesController.prototype, "createLanguage", null);
LanguagesController = (0, tslib_1.__decorate)([
    (0, inversify_express_utils_1.controller)("/languages"),
    (0, tslib_1.__param)(0, (0, inversify_1.inject)(types_1.TYPES.LanguageService)),
    (0, tslib_1.__metadata)("design:paramtypes", [LanguageService_1.default])
], LanguagesController);
exports.default = LanguagesController;
//# sourceMappingURL=LanguageController.js.map