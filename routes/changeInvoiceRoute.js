const express = require('express');
const changeInvoiceRoute = express.Router();
const mongoose = require("mongoose");
const Invoice = require("../models/invoice");
//const { findByIdAndUpdate } = require('../models/users');

changeInvoiceRoute.post('changeInvoice', async function (req, res) {
    try{
        const { invoiceId, invoiceTitle, price, invoiceOwner, invoiceRequestor, invoiceDescription } = req.body; 
        if (!invoice) {
            return res.status(404).json({ message: "Invoice not found" });
        }
        const update = {};
        if (invoiceTitle != "")  {
            update.invoiceTitle = invoiceTitle;
        }
        if (price != "") {
            update.price = price;
        }
        if (invoiceOwner != "") {
            update.invoiceOwner = invoiceOwner;
        } 
        if (invoiceDescription != "") {
            update.description = invoiceDescription;
        }
        await Invoice.findByIdAndUpdate(invoiceId, update);
    }catch(err) {
        console.log(err);
        res.status(500).json("unable to change invoice");
    }
})

module.exports = changeInvoiceRoute;