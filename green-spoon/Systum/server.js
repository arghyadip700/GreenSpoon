const express=require("express")
const app=express()
const port=3001
const route=require("../Route/route.js");
var mongoose=require("mongoose");
mongoose.set('strictQuery',true)
const uri='mongodb+srv://gdscgcect:6WfCpxST66ofieFh@greenspoon.ovdll57.mongodb.net/GreenSpoon?retryWrites=true&w=majority'
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true },function checkDB(error)
{
     if(error)
          console.log(error)
     else
          console.log("success");
})


app.use(express.json());
app.use(route);
app.listen(port)