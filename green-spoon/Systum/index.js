const express = require('express')
var cors = require('cors')
const  mongoose = require("mongoose");
const mongoURI="mongodb://127.0.0.1:27017/GreenSpoon"
var db = mongoose.connection; 

db.on('error', function(err){
    console.log('No connection found', err);

});
const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
    console.log("connected to mongo");
}

connectToMongo();

const app = express()
const port = 4000

app.use(cors())
app.use(express.json());

//Available routes
app.use('/api/server',require('./server'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})