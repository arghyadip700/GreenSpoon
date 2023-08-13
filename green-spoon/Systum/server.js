// IMPORT SECTION
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 4000;
const mongoURI = 'mongodb+srv://gdscgcect:greenspoon@greenspoon.ovdll57.mongodb.net/GreenSpoon?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI
const mongoose =require("mongoose")

//  FINDING FUNCTION
app.get('/user/findOne', async (req, res) => {
  const email = req.query.email;
  const username = req.query.username;
  const type = req.query.type;
  try {
    const client = await MongoClient.connect(mongoURI, { useUnifiedTopology: true });
    const db = client.db('GreenSpoon'); // Replace with your database name
    const usersCollection = db.collection('credentials'); // Replace with your collection name

    const user = await usersCollection.findOne({ email, username, type });

    client.close(); 

    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

//  LOGIN FUNCTION
app.get('/user/login', async (req, res) => {
  const email = req.query.email;
  try {
    const client = await MongoClient.connect(mongoURI, { useUnifiedTopology: true });
    const db = client.db('GreenSpoon'); // Replace with your database name
    const usersCollection = db.collection('credentials'); // Replace with your collection name

    const user = await usersCollection.findOne({ email });

    client.close();

    if (user) {
      res.json({ type: user["type"] });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});



// SIGNUP FUNCTION
app.get('/user/signup', async (req, res) => {
  const email = req.query.email;
  const username = req.query.username;
  const type = req.query.type;

  try {
    const client = await MongoClient.connect(mongoURI, { useUnifiedTopology: true });
    const db = client.db('GreenSpoon'); // Replace with your database name
    const usersCollection = db.collection('credentials'); // Replace with your collection name

    const user = await usersCollection.findOne({ email, username, type });

    
    if (user) {
      res.json({ status: false });
    } else {
      //write function
      const user = {
        email,
        username,
        type
      };
  
      const result = await usersCollection.insertOne(user);
  
      client.close();
      res.json({ message: 'User registered successfully' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
