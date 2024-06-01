const express = require('express')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const searchInvoicesRoute = express.Router();
const mongoose = require("mongoose");
const Invoice = require("../models/invoice");
const uri = "mongodb+srv://testUser2:2R1f1r8QuBbJcYqO@cluster0.ehflqbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

searchInvoicesRoute.post('/searchInvoices', async function (req, res) {
    try {
        await mongoose.connect(uri);
        var data = { invoiceId, invoiceTitle, invoiceOwner, invoiceRequestor } = req.body;
        let searchFields = {};

        if (data.invoiceId != "") {
            searchFields.invoiceId = data.invoiceId;
        }
        if (data.invoiceTitle != "") {
            searchFields.invoiceTitle = data.invoiceTitle;
        }
        if (data.invoiceOwner != "") {
            searchFields.invoiceOwner = data.invoiceOwner;
        }
        if (data.invoiceRequestor != "") {
            searchFields.invoiceRequestor = data.invoiceRequestor
        }

        const invoices = await Invoice.find(searchFields);

        res.json(invoices);
    } catch (err) {
        console.log(err);
    }
})

module.exports = searchInvoicesRoute; 