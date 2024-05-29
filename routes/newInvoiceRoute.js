const express = require('express')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const newInvoiceRoute = express.Router();
const Invoice = require("../models/invoice");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const uri = "mongodb+srv://testUser2:2R1f1r8QuBbJcYqO@cluster0.ehflqbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

newInvoiceRoute.post('/newInvoice', async function (req, res) {
    try {
        await mongoose.connect(uri);
        const { invoiceTitle, price, invoiceOwner, invoiceRequestor, invoiceDescription } = req.body;
        const _id = new mongoose.mongo.ObjectId();
        const newInvoice = new Invoice({
            _id : _id,
            invoiceTitle: invoiceTitle,
            price: price,
            invoiceOwner: invoiceOwner,
            invoiceRequestor: invoiceRequestor,
            description: invoiceDescription
        })
        await newInvoice.save();
        res.json({ invoiceId: _id });
    } catch(err) {
        res.status(500).json("unable to create invoice");
    }
})

module.exports = newInvoiceRoute;