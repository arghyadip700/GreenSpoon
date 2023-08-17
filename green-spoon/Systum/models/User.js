const  mongoose = require("mongoose");
const { Schema } = mongoose;
// creating schema
// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
  const userSchema = new Schema({
      username: {type: String,required:true}, // String is shorthand for {type: String}
      email: {type: String,required:true,unique:true},
      type: { type: String,required:true},
    });


//   To use our schema definition, we need to convert our Schema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):

 const User= mongoose.model('User', userSchema);
 module.exports=User
 