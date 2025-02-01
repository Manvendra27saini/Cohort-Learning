const express = require('express');
const jwt= require('jsonwebtoken');

const app = express();

const JWT_SECRET ="meowmeowmeow";

app.use(express.json());

const users = [];
 
function logger(req, res, next){
    console.log(req.method + " request received  ");
    next();
}
app.use(logger);
app.post("/signup", function(req, res)   { 
   const username = req.body.username;
   const password = req.body.password;
  
   /*if(users.find(user => user.username === username)) {
    return res.json({
        message: "User already exists"
    })
   }*/
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
              message: "You have successfully signed in and this is your token",
              token: token
         })
    }else{
        res.status(401).json({
            message: "Invalid credentials"
        })
    }
    console.log(users);
})

function auth(req, res, next){
    let  token = req.headers.token;
    const decodedInformation= jwt.verify(token,JWT_SECRET);
    if(decodedInformation.username){
        req.username = decodedInformation.username
        next();
    }else{
        res.status(401).json({
            message: "You are not logged in"
        })
    }
}

app.use(auth);
app.get("/me",  function(req, res) {
    //let  token = req.headers.token;
    //const decodeData= jwt.decode(token); it's a security vulranability because anyone can decode the tokem and use as sign in as someone else
    //const decodedInformation= jwt.verify(token,JWT_SECRET);//{  username: "username"}
    const username = req.username; 
    let foundUser = users.find(user => user.username === username );
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