import passport from 'passport';
import * as passportLocal from 'passport-local';
import User from '../../domain/entities/User';
const LocalStrategy = passportLocal.Strategy;
import userModel from '../odm/user.model';

passport.serializeUser((user: User, done) => {
    done(null, user.id);
});


passport.deserializeUser(async (id, done) => {
    const user = await userModel.findById(id);
    done(null, user);
});

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req: Express.Request, email:string, password:string, done) => {
    

    console.log("llega STRATEGY");
    // userRepositoryInterface
    const user = await userModel.findOne({ email: email });

    if (!user) {
        return done({"ok": false, "msg" : "User not found"}, false);
    }   

    if (!user.comparePassword(password)) {        
        return done({"ok": false, "msg" : "Incorrect password"}, false);
    }
    
    return done(null, user);
    
})); 