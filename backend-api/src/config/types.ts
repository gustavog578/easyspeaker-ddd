export const TYPES = {

    AuthService : Symbol.for("AuthService"),
    IUserRepository: Symbol.for("IUserRepository"),
    ILoginMiddleware: Symbol.for("LoginMiddleware"),
    IRegisterMiddleware: Symbol.for("RegisterMiddleware"),

    UserService: Symbol.for("UserService"),

    ILanguageRepository : Symbol.for("ILanguageRepository"),
    LanguageService : Symbol.for("LanguageService"),

        
    AuthTeacherService : Symbol.for("AuthTeacherService"),
    ITeacherRepository: Symbol.for("ITeacherRepository"),
    ILoginTeacherMiddleware: Symbol.for("LoginTeacherMiddleware"),
    TeacherService : Symbol.for("TeacherService")
}