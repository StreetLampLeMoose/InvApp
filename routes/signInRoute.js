const express = require('express')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const signInRoute = express.Router();
const mongoose = require("mongoose");
const User = require("../models/users")
const uri = "mongodb+srv://testUser2:2R1f1r8QuBbJcYqO@cluster0.ehflqbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

signInRoute.post('/signIn', async function (req, res) {
    console.log("in sign in handler");
    try {
        const { username, password } = req.body;
        const generateToken = (username) => {
            return jwt.sign({ username }, 'secret', { expiresIn: '1h' })
        };
        await mongoose.connect(uri);
        const user = await User.findOne({userName: username });
        if (user && password == user.password) {
            const token = generateToken(user._id);
            res.header('Authorization', 'Bearer ${token}');
            res.status(200).json(message, "user signed in");
        } else {
            console.log("in else")
            res.status(401).json( "User failed to sign in")
        }
    } catch (err) {
        console.log("in catch")
        console.log(err);
        res.status(500).json("some other error has occurred")
    }
    })
module.exports = signInRoute;