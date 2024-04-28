const express = require ('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const signInRoute = require('./routes/signInRoute');
const registrationRoute = require('./routes/registrationRoute');
const newInvoiceRoute = require("./routes/newInvoiceRoute");
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://testUser2:2R1f1r8QuBbJcYqO@cluster0.ehflqbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
        
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
app.use(cors({
    origin: "localhost:3000",
    methods: "GET, POST, PUT",
    credentials: true
}));
exports.app = app;
const port = 3000;
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json());
//app.use(cors);
app.use((req, res, next) => {
    if (path.extname(req.url) === '.js') {
        res.setHeader('Content-Type', 'text/javascript');
    }
    next();
});

app.get('/', (req, res) => {
    res.redirect('/views/index')
});

app.get('/views/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/views/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signin.html'));
});

app.get('/views/signIn.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signIn.js'));
});

app.get('/views/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.js'));
});

app.get('/views/register.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.js'));
});

app.get('/views/newInvoice', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'newInvoice.html'));
});

app.get('/views/newInvoice.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'newInvoice.js'));
});

app.use(signInRoute);
app.use(registrationRoute);
app.use(newInvoiceRoute);


app.listen(port, () => {
    console.log("app is listening on port 3000");
});

