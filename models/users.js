const mongoose = require('mongoose');
const uri = "mongodb+srv://testUser2:2R1f1r8QuBbJcYqO@cluster0.ehflqbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    company: {
        type: String
    }
});

async function run(){
    await mongoose.connect(uri);
    mongoose.model('User', userSchema);

    await mongoose.model('User').findOne();
}

const User = mongoose.model('User', userSchema);
module.exports = User;