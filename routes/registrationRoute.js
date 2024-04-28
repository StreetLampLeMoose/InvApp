const express = require('express')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const registrationRoute = express.Router();
const User = require("../models/users");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const uri = "mongodb+srv://testUser2:2R1f1r8QuBbJcYqO@cluster0.ehflqbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const generateToken = (userName) => {
    return jwt.sign({ userName }, 'secret', { expiresIn: '1h' });
}
registrationRoute.post('/register', async function (req, res) { 
    try {
        
        await mongoose.connect(uri);
        const { username, password, company } = req.body;
        const existingUser = await User.findOne({ userName : username  });
        if (existingUser) {
            console.log("username already exists")
            return res.send({ error: "User Name already Taken" });
        }
        //const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            userName : username,
            password: password,
            company: company
        })
        await newUser.save();
        console.log("user successfully registered")
        token = generateToken(newUser.userName)
        return res.status(200).json({token})
    } catch (err) {
        console.error(err)
        return res.status(500).json("unable to register user")
    }
})

module.exports = registrationRoute;