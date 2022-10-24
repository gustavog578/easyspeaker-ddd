"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = (0, tslib_1.__importStar)(require("mongoose"));
const bcrypt_1 = (0, tslib_1.__importDefault)(require("bcrypt"));
const jwt = (0, tslib_1.__importStar)(require("jsonwebtoken"));
const teacherSchema = new mongoose_1.Schema({
    id: String,
    username: String,
    lastname: String,
    genre: String,
    email: String,
    password: String,
    skills: Array,
    lat: Number,
    lng: Number,
    other_languages: Array,
    native_language: String,
    currency: String,
    price: Number
});
teacherSchema.methods.encryptPassword = (password) => {
    return bcrypt_1.default.hash(password, bcrypt_1.default.genSaltSync(10));
};
teacherSchema.methods.comparePassword = function (password) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        password = password.toString();
        return bcrypt_1.default.compareSync(password, this.password);
    });
};
// Custom validation for email
teacherSchema.path('email').validate((val) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
// Events
teacherSchema.pre('save', function (next) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        bcrypt_1.default.genSalt(10, (err, salt) => {
            bcrypt_1.default.hash(this.password, salt, (err, hash) => {
                this.password = hash;
                this.saltSecret = salt;
            });
        });
    });
});
// Methods
teacherSchema.methods.verifyPassword = function (password) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const teacher = this;
        const compare = yield bcrypt_1.default.compare(password, teacher.password);
        return compare;
    });
};
teacherSchema.methods.generateJwt = function () {
    return jwt.sign({ id: this.id }, "SECRET123", { expiresIn: "2m" });
};
exports.default = mongoose_1.default.model('Teacher', teacherSchema);
//# sourceMappingURL=teacher.model.js.map