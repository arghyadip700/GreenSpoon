const  mongoose = require("mongoose");
const { Schema } = mongoose;
// creating schema
// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
  const resSchema = new Schema({
        name:{type:String,required:true},
      Item: {type: String,required:true}, // String is shorthand for {type: String}
      Quantity: {type: Number,required:true},
      Expdate: { type: Date,required:true},
      user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
    });


//   To use our schema definition, we need to convert our Schema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):

 const Res= mongoose.model('Res', resSchema);
 module.exports=Res
 