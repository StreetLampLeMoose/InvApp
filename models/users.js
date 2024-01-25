const mongoose = require('mongoose')
const { stringify } = require('querystring')

const User = new mongoose.schema({
    userName : {
    type: String,
    required: true
    },
    password: {
        type: string,
        required: true
    },
    company: {
        type:string
    }
    })
