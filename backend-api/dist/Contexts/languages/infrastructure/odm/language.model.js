"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = (0, tslib_1.__importStar)(require("mongoose"));
const languageSchema = new mongoose_1.Schema({
    country_name: {
        type: String,
        required: true
    },
    country_code: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.default.model('Language', languageSchema);
//# sourceMappingURL=language.model.js.map