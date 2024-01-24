const express = require ('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect();  //connection stuff in here;
    .then( ()=>{console.log("connected to mongoose")}
    );
    .catch((err) => console.error('error connecting', err));
