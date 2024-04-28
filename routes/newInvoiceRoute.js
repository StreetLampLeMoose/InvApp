const express = require('express')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const newInvoiceRoute = express.Router();
const User = require("../models/invoice");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const uri = "mongodb+srv://testUser2:2R1f1r8QuBbJcYqO@cluster0.ehflqbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

newInvoiceRoute.post('/newInvoice', function (req, res) {
    res.send({ "message": "sending to client" });
    console.log(res)
    data = res;
    console.log(res.body);
    console.log("after send");
})

module.exports = newInvoiceRoute;