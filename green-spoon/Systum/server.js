// IMPORT SECTION
const express = require('express');
const server=express()
//const app = express();
const router = express.Router();
const User=require('./models/User');
const Res=require('./models/Res');
const order=require('./models/Order')
const bodyParser=require('body-parser');
server.use(bodyParser.json())
var jwt=require('jsonwebtoken')
var fetchuser=require('./middleware/fetchuser')
const jwt_secret = "greenspoonpv89"




// SIGNUP FUNCTION
router.post('/createuser',  async (req, res) => {
 
  let user=await User.findOne({email:req.body.email}) //checking if the email is already used or not
  if(user){ //if email is already use donts create new data send error
      return res.status(200).send({error:"Sorry this email is already user by someone"})
  }
  
  try {
   
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      type: req.body.type,
    });
    const data={
      user:{
          id:user.id
      }
  }
  console.log(data)
    const authtoken=jwt.sign(data,jwt_secret);
    res.json(authtoken);
  console.log(user);
  
    //res.json(user);
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(200).json({ error: 'Email already exists' ,Message:error.message});
    }
    console.error(error);
    res.status(200).json({ error: 'Server error' });
  }
  })


  router.post('/getuser',  async (req, res) => {
   
    console.log(req.body.email);
    try {
        let user=await User.findOne({email:req.body.email}) //checking if the email is already used or not
        // if(!user){ //if email is already use donts create new data send error
        //     return res.status(400).send({error:"Incorrect email "})
        // }
        // const pass=await bcrypt.compare( req.body.password,user.password)
        // if(!pass){
        //     return res.status(400).json({error:"Incorrect email or Password"})
    
        // }
        const data={
            user:{
                id:user.id
            }
        }
        console.log(data)
        console.log(jwt_secret);
        const authtoken = jwt.sign(data, jwt_secret);
        success = true;
        res.json({ success, authtoken })
       
    }
     
      //res.json(user);
     catch (error) {
     
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
    })

//   router.post('/getuser',fetchuser,async(req,res)=>{
//     try{
//         userId=req.user.id
//         // const user  = await User.findById(userId).select("-password")
//         const user  = await User.findById(userId)
//         res.send(user);
//     }catch(error){
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//     }
// })



  //add itmes
  router.post('/putitems',fetchuser, async (req, res) => {
  
    const usern=await User.findById(req.user.id)
    if(usern.type==="Ngo") return res.status(403).json({error:"you cant donate"});
    else{
    try {
        
      const Item = await Res.create({
        name:usern.username,
        Item: req.body.item,
        Quantity: req.body.quantity,
        Expdate: req.body.exp,
        user:req.user.id
      });
     res.send(Item)
  
    
    } catch (error) {
     
        return res.status(400).json(error.message);
      
      
    }
  }
    })

//getitems
    router.get('/getitems',fetchuser,async(req,res)=>{
      try{
      //userId=req.user.id
     const items = await Res.find({ user: req.user.id });;
      res.json(items)
  } catch (error) {
       
      return res.status(400).json({ error:"Internal server error"});
    
    
  }
  })

  //get all available food
  router.get('/getfood',fetchuser,async(req,res)=>{
    //let usern=await User.findById(req.user.id)
    // if(usern.type=="Res" || usern.type=="res") return res.status(403).json({error:"you cant collect"});
    // else{
    try{
    
   const items = await Res.find();
    res.json(items)
} catch (error) {
     
    return res.status(400).json({ error:"Internal server error"});
  
  
}
    
})

router.get('/getorderfood',fetchuser,async(req,res)=>{
  let usern=await User.findById(req.user.id)
   if(usern.type=="Res" || usern.type=="res") return res.status(403).json({error:"you cant collect"});
   else{
  try{
  
 const items = await order.find({ user: req.user.id });;
  res.json(items)
} catch (error) {
   
  return res.status(400).json(error.message);


}
   }
  
})
//Ngo collect the item
router.post('/putorder',fetchuser, async (req, res) => {
  
  let usern=await User.findById(req.user.id)
  try {
      
    const Item = await order.create({
      ngoname:usern.username,
      name:req.body.name,
      Item: req.body.Item,
      Quantity: req.body.Quantity,
      Expdate: req.body.Expdate,
      itemId:req.body._id,
      resId:req.body.user,
      user:req.user.id
    });
   res.send(Item)
   let Items=await Res.findByIdAndDelete(req.body._id)
   
    res.json(Items)
  
  } catch (error) {
   
      return res.status(400).json(error.message);
    
    
  }

  })

  //in restaurent taken order

  router.get('/takenorder',fetchuser,async(req,res)=>{
    //let usern=await User.findById(req.user.id)
    // if(usern.type=="Res" || usern.type=="res") return res.status(403).json({error:"you cant collect"});
    // else{
    try{
    
   const items = await order.find({ resId: req.user.id });;
    res.json(items)
  } catch (error) {
     
    return res.status(400).json(error.message);
  
  
  }
    
  })
//   router.delete('/deletenotes/:id',fetchuser, async (req, res) => {
//     try{
//   let notes = await Mynotes.findById(req.params.id);
//   //The req. params property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /student/:id, then the “id” property is available as req.params.id. This object defaults to {}.

//   if(!notes){return res.status(400).send("not found")}
  
//   //The toString() method returns a string as a string. The toString() method does not change the original string. The toString() method can be used to convert a string object into a string.
//   if(notes.user.toString() !== req.user.id){
//     return res.status(400).send("not allowed")
//   }

//   notes=await Mynotes.findByIdAndDelete(req.params.id)
//   res.json(notes)
// } catch (error) {
     
//     return res.status(400).json({ error:"Internal server error"});
  
  
// }



// })
  

module.exports = router
