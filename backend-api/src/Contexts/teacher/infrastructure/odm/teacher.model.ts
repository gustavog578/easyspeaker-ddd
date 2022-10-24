import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import * as jwt  from 'jsonwebtoken';


const teacherSchema = new Schema({
    id: String,
    username: String,
    lastname : String,
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

    return bcrypt.hash(password, bcrypt.genSaltSync(10));
};

teacherSchema.methods.comparePassword = async function (password) {
        
    password = password.toString();
    return bcrypt.compareSync(password, this.password);
};

// Custom validation for email
teacherSchema.path('email').validate((val:any) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
teacherSchema.pre(
    'save', 
    async function (next) {
      
        bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
          
        });
     });
});


// Methods
teacherSchema.methods.verifyPassword = async function (password) {
    const teacher = this;
    const compare = await bcrypt.compare(password, teacher.password);
  
    return compare;
};

teacherSchema.methods.generateJwt = function () {

    return jwt.sign({ id: this.id }, "SECRET123", {expiresIn: "2m" });
}



export default mongoose.model('Teacher', teacherSchema);