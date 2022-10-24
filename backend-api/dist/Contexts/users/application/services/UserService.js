"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("@users/domain/types/types");
const inversify_1 = require("inversify");
const GetAllUsersUseCase_1 = (0, tslib_1.__importDefault)(require("../usecases/GetAllUsersUseCase"));
const GetUserUseCase_1 = (0, tslib_1.__importDefault)(require("../usecases/GetUserUseCase"));
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    GetUserDetail() {
        return new GetUserUseCase_1.default(this.userRepository);
    }
    GetAllUsers() {
        return new GetAllUsersUseCase_1.default(this.userRepository);
    }
};
UserService = (0, tslib_1.__decorate)([
    (0, inversify_1.injectable)(),
    (0, tslib_1.__param)(0, (0, inversify_1.inject)(types_1.TYPES.IUserRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], UserService);
exports.default = UserService;
//# sourceMappingURL=UserService.js.map