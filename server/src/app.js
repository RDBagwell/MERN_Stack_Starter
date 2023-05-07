require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));

app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname,"..", "index.html"));
});

module.exports = app;