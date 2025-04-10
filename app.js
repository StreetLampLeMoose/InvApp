const express = require ('express');
const mongoose = require('mongoose');
mongoose.set('debug',true);
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const signInRoute = require('./routes/signInRoute');
const registrationRoute = require('./routes/registrationRoute');
const newInvoiceRoute = require("./routes/newInvoiceRoute");
const changeInvoiceRoute = require("./routes/changeInvoiceRoute");
//const searchInvoicesRoute = require("./routes/searchInvoicesRoute");
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://testUser2:ZgEw4nOnrYvsRwg0@cluster0.ehflqbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&tls=true";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
        
    },
    tls:true,
    tlsAllowInvalidCertificates:false,
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");}
    catch(err) {
        console.error("Error connecting to MongoDB:", err);
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
console.log("app is about to start listening on port 3000");
const port = 3000;
app.use('/views', express.static(path.join(__dirname, 'views')));
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

app.get('/views/searchInvoices', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'searchInvoices.html'));
});

/*app.get('/views/searchInvoices.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'searchInvoices.js'));
});*/                  

app.get('/views/changeInvoice',(req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'changeInvoice.html'));
});

app.get('/views/changeInvoice',(req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'changeInvoice.js'));
});

//app.use(searchInvoicesRoute);
app.use(signInRoute);
app.use(registrationRoute);
app.use(newInvoiceRoute);
app.use(changeInvoiceRoute);


app.listen(port, () => {
    console.log("app is listening on port 3000");
});

