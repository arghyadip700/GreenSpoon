const express = require('express');
const mongoose = require('mongoose');
const app = express();
const createJSONObjectsFromCSV = require('./ready');

const uri  = 'mongodb+srv://gdscgcect:greenspoon@greenspoon.ovdll57.mongodb.net/GreenSpoon?retryWrites=true&w=majority'; 

const busSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  type:{type:Boolean,required:true}
});

const Bus = mongoose.model('credentials', busSchema);

const filePath = "green-spoon\\prebuild\\random_users.csv";
var jsonArray = []
createJSONObjectsFromCSV(filePath)  // Replace with the actual path to your CSV file
  .then((jsonArray) => {
    // Iterate over each item in the JSON array
    jsonArray.forEach((item, index) => {
      const newBus = new Bus({
        email: item.email,
        username: item.username,
        type: parseInt(item.type)  // Convert 'type' to integer if needed
      });
      connect(newBus);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });

async function connect(newBus) {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // Save the new record to the database
    await newBus.save();
    console.log('New bus record inserted:', newBus);
  } catch (error) {
    console.error('Error inserting record:', error);
  }
}

app.listen(5000, () => {
  console.log("RUNNNING");
});