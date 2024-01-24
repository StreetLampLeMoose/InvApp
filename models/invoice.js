const mongoose = require ('mongoose')
const { stringify } = require('querystring')

const invoiceSchema = new mongoose.schema({
    invoiceTitle :{
        type:string ,
        required: true
    },
    price: {
        type : number,
        required: true
    },
    description: {
        type: string,
        required: true
    },
    invoiceRequestor: {
        type:string,
        required: true
    },
    invoiceOwner :{
        type:string,
        required:true
    },
    status:{
        type:string,
        required:true
    }
})
const userSchema = new mongoose.schema({
    name:{
        type:string,
        required: true
    },
    company:{
        type:string
    },
    role: {
        type:string,
        required:true
    }

})