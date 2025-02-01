const express = require('express');
const jwt= require('jsonwebtoken');
const app = express();
const JWT_SECRET ="meowmeowmeow";

app.use(express.json());

const users = [];

/*
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}
*/

app.post("/signup", function(req, res)   { 
   const username = req.body.username;
   const password = req.body.password;
  
   if(users.find(user => user.username === username)) {
    return res.json({
        message: "User already exists"
    })
   }
   users.push({
    username :username,
    password :password
   })

   res.json({
    message: "Hey you have signed up"
   })
   console.log(users);
})

app.post("/signin", function(req, res)   {
    const username = req.body.username;
    const password = req.body.password;
    let foundUser = users.find(user => user.username === username && user.password === password);
    if(foundUser){
       const token = jwt.sign({
        username:  username,
       },JWT_SECRET);
      // foundUser.token = token;  Store the token in the user object
         res.json({
              message: "You have successfully signed in",
              token: token
         })
    }else{
        res.status(401).json({
            message: "Invalid credentials"
        })
    }
    console.log(users);
})

app.get("/me", function(req, res) {
    let  token = req.headers.token;
    const decodedInformation= jwt.verify(token,JWT_SECRET);//{  username: "username"}
    const username = decodedInformation.username;
    let foundUser = users.find(user => user.token === token);
    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }else{
        res.status(401).json({
            message: "You are not authorized"
        })
    }
})


app.listen(3000);