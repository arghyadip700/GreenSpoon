
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 4000;
const mongoURI = 'mongodb+srv://gdscgcect:greenspoon@greenspoon.ovdll57.mongodb.net/GreenSpoon?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI

app.get('/user/findOne', async (req, res) => {
  const email = req.query.email;
  const username = req.query.username;
  const type= req.query.type;
  try {
    const client = await MongoClient.connect(mongoURI, { useUnifiedTopology: true });
    const db = client.db('GreenSpoon'); // Replace with your database name
    const usersCollection = db.collection('credentials'); // Replace with your collection name

    const user = await usersCollection.findOne({ email, username, type });

    client.close();

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
