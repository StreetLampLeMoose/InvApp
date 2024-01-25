const express = require ('express');
//const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.redirect('/views/index')
})

app.listen(port, () => {
    console.log("app is listening on port 3000")
})
console.log("app listening on port 3000");