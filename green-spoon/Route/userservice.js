var  usermodel= require("../Route/usermodel.js");

module.exports.findUser = (userdetails) => {
     return new Promise(function fx(resolve, reject) {
       usermodel.findOne(
         {
           $or: [
             { email: userdetails },
             { username: userdetails } // Assuming you have a username field
           ]
         },
         function returnData(error, results) {
           if (error) {
             reject(false);
           } else {
             resolve(results);
           }
         }
       );
     });
   };