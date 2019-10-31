// import required libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = {
    origin: '*',
    credentials: true
};

// Setup server port
const port = process.env.PORT || 5000;

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

const app = express();


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const routes = require("./routes/routes");
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Hi I am SalLy')
});

app.listen(port, function() {
    console.log(`SalLy running on port: ${port}`);
});