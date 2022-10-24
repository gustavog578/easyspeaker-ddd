"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const teacher_model_1 = (0, tslib_1.__importDefault)(require("./odm/teacher.model"));
let TeacherRepository = class TeacherRepository {
    fetch(teacher) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (teacher) {
                return teacher;
            }
            throw new Error("Method not implemented.");
        });
    }
    findById(teacherId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const teacherDb = yield teacher_model_1.default.findById(teacherId);
            return teacherDb;
        });
    }
    findAll() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const teacherDb = yield teacher_model_1.default.find();
            console.log(teacherDb);
            return teacherDb;
        });
    }
    findByEmail(email) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const teacherDb = yield teacher_model_1.default.findOne({ email: email });
            if (teacherDb) {
                return teacherDb;
            }
            return false;
        });
    }
    save(teacher) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newTeacher = new teacher_model_1.default();
            newTeacher.email = teacher.email;
            newTeacher.password = yield newTeacher.encryptPassword(teacher.password);
            newTeacher.username = teacher.username;
            newTeacher.lastname = teacher.lastname;
            newTeacher.genre = teacher.genre;
            try {
                yield newTeacher.save();
                return true;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
TeacherRepository = (0, tslib_1.__decorate)([
    (0, inversify_1.injectable)()
], TeacherRepository);
exports.default = TeacherRepository;
//# sourceMappingURL=TeacherRepository.js.map