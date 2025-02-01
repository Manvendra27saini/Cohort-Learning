const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json()); // to parse the body of the request
app.use(cors(/*{
    hosts: "http://google.com",
}*/));
app.post("/sum", function(req, res) {
     
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);
    res.json({
        ans: a + b,
    });
     
});

app.listen(3000);