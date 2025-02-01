const express = require('express');
const {UserModel , TodoModel }=require("./db");
const z = require("zod"); 
const jwt = require('jsonwebtoken');
const mongoose=require('mongoose');
const JWT_SECRET="itsmysecrethwjekj"
const bcrypt = require('bcrypt');

mongoose.connect("mongodb+srv://Admin:UL0v86eYZcaywB78@cluster0.fnwso.mongodb.net/todo-app-database");
const app = express();
app.use(express.json());



app.post("/signup", async function (req, res) {

    ///check that password has one uppercase letter, one lowercase letter, one number, and one special character
  try {
    const requireBody = z.object({
      email: z.string().min(3).max(100).email(),
      name: z.string(),
      password: z.string().min(6),
    });

    // Parse and validate the request body
    const parsedDataWithSuccess = requireBody.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
      // If validation fails, send back the errors
      return res.status(400).json({
        message: "Invalid data",
        errors: parsedDataWithSuccess.error.errors, // Send specific validation errors
      });
    }

    // Extract parsed data
    const { email, password, name } = parsedDataWithSuccess.data;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12); // Using bcrypt strength of 12 for better security

    // Create a new user in the database
    await UserModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });

    // Send success response
    res.json({
      message: "You are signed up",
    });
  } catch (e) {
    console.error(e); // Log the error for debugging purposes
    res.status(500).json({
      message: "Error while signing up",
      error: e.message || "Unknown error", // Send more context about the error
    });
  }
});

 
app.post('/signin', async function(req ,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
    });
    const passwordMatch = await bcrypt.compare(password, user.password);

    if(user  && passwordMatch){
        const token=jwt.sign({
            id :user._id.toString()
        },JWT_SECRET);
        res.json({
           token: token
        });
    }else{
        res.status(403).json({
            message: "Invalid email or password"
        });
    }

});

app.post('/todo', async function(req ,res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })

});

app.get('/todos', async function(req ,res){
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
 
});

function auth(req, res, next) {
    const token = req.headers.token;

    const user= jwt.verify(token, JWT_SECRET);

    if (user) {
        req.userId = token.userId;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}
app.listen(3000);