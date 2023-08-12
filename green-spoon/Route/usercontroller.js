var userservice = require("../Route/userservice.js")

var findOneUser = async (req, res) => {
     const { email, username } = req.body;
     console.log(email)
     if (!email && !username) {
          return res.send({ "status": false, "data": "No 'email' or 'username' provided",src:email });
     }

     if (email) {
          var results = await userservice.findUser(email);
     } else if (username) {
          var results = await userservice.findUser(username);
     }

     if (results) {
          res.send({ "User Email": results["email"], "Source is": results["username"] });
     } else {
          res.send({ "status": false, "data": "USER NOT FOUND" });
     }
}

module.exports = { findOneUser };