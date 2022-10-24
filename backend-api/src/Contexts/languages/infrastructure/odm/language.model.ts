import mongoose, { Schema } from 'mongoose';

const languageSchema = new Schema({
    country_name: { 
        type: String,
        required: true
    },
    country_code: {
        type: String,
        required: true
    }
})

export default mongoose.model('Language', languageSchema);