
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 4000;
const mongoURI = 'mongodb+srv://gdscgcect:greenspoon@greenspoon.ovdll57.mongodb.net/GreenSpoon?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI

app.listen(port, ()=>{
     console.log("Connected")}
)