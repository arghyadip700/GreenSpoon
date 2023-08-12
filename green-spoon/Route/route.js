var express=require("express")
var usecontroller= require("../Route/usercontroller")

const router=express.Router();
router.route('/user/findOne/').get(usecontroller.findOneUser);

module.exports=router;