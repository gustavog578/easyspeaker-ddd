import { Container } from "inversify";
import { TYPES } from "@config/types";

import AuthTeacherService from "@teacher/application/services/AuthTeacherService";
import TeacherService from "@teacher/application/services/TeacherService";
import AuthService from "@users/application/services/AuthService";
import UserService from "@users/application/services/UserService";
import IUserRepository from "@users/domain/repositories/IUserRepository";

import LoginMiddleware from "@users/infrastructure/passport/loginMiddleware";
import UserRepository from "@users/infrastructure/UserRepository";
import ITeacherRepository from "@teacher/domain/repositories/ITeacherRepository";
import LoginTeacherMiddleware from "@teacher/infrastructure/passport/LoginTeacherMiddleware";
import TeacherRepository from "@teacher/infrastructure/TeacherRepository";
import LanguageService from "@languages/application/services/LanguageService";
import ILanguageRepository from "@languages/domain/repositories/ILanguageRepository";
import LanguageRepository from "@languages/infrastructure/LanguageRepository";

const Inversifycontainer = new Container();
new Container();
Inversifycontainer.bind<AuthService>(TYPES.AuthService).to(AuthService);
Inversifycontainer.bind<AuthTeacherService>(TYPES.AuthTeacherService).to(AuthTeacherService);

Inversifycontainer.bind<UserService>(TYPES.UserService).to(UserService);
Inversifycontainer.bind<TeacherService>(TYPES.TeacherService).to(TeacherService);
Inversifycontainer.bind<LanguageService>(TYPES.LanguageService).to(LanguageService);
        
Inversifycontainer.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
Inversifycontainer.bind<ITeacherRepository>(TYPES.ITeacherRepository).to(TeacherRepository);
Inversifycontainer.bind<ILanguageRepository>(TYPES.ILanguageRepository).to(LanguageRepository);
Inversifycontainer.bind<LoginMiddleware>(TYPES.ILoginMiddleware).to(LoginMiddleware);
Inversifycontainer.bind<LoginTeacherMiddleware>(TYPES.ILoginTeacherMiddleware).to(LoginTeacherMiddleware);

export { Inversifycontainer };