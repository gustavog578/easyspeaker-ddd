import passport from 'passport';
import * as passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;
import Teacher from "../../domain/entities/Teacher";
import TeacherModel from "../odm/teacher.model";

passport.serializeUser((teacher: Teacher, done) => {
    done(null, teacher.id);
});


passport.deserializeUser(async (id, done) => {
    const user = await TeacherModel.findById(id);
    done(null, user);
});

passport.use('local-teacher-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req: Express.Request, email:string, password:string, done) => {
  
    // teacherRepositoryInterface
    const teacher = await TeacherModel.findOne({ email: email });

    if (!teacher) {
        return done({"ok": false, "msg" : "Teacher not found"}, false);
    }   

    if (!teacher.comparePassword(password)) {        
        return done({"ok": false, "msg" : "Incorrect password"}, false);
    }
    
    return done(null, teacher);
    
})); 