"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const SignInUseCase_1 = (0, tslib_1.__importDefault)(require("../usecases/SignInUseCase"));
const types_1 = require("../../../shared/domain/types/types");
const inversify_1 = require("inversify");
const RegisterUseCase_1 = (0, tslib_1.__importDefault)(require("../usecases/RegisterUseCase"));
let AuthService = class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    GetSignInUseCase() {
        return new SignInUseCase_1.default(this.userRepository);
    }
    GetRegisterUseCase() {
        return new RegisterUseCase_1.default(this.userRepository);
    }
};
AuthService = (0, tslib_1.__decorate)([
    (0, inversify_1.injectable)(),
    (0, tslib_1.__param)(0, (0, inversify_1.inject)(types_1.TYPES.IUserRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AuthService);
exports.default = AuthService;
//# sourceMappingURL=AuthService.js.map