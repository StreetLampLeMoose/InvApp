const mongoose = require ('mongoose')
const { stringify } = require('querystring')
//have to fix all these strings and export it TODO
const uri = "mongodb+srv://testUser2:2R1f1r8QuBbJcYqO@cluster0.ehflqbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const invoiceSchema = new mongoose.Schema({
    invoiceTitle: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    invoiceRequestor: {
        type: String,
        required: true
    },
    invoiceOwner: {
        type: String,
        required: true
    },
    status: {
        type: String,

    }
});

async function run() {
    await mongoose.connect(uri);
    mongoose.model('Invoice', invoice);

    await mongoose.model('Invoice').findOne();
}

const Invoice = mongoose.model('Invoice', invoiceSchema );
module.exports = Invoice;
