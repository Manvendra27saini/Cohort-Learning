const express = require("express");

const app = express();



function loggerMiddleware(req ,res, next) {
    console.log("Method is: ", req.method);
    console.log("Host is: ", req.hostname);
    console.log("Path is: ", req.path);
    console.log("url is: ", req.url);
    next();
}
app.use(loggerMiddleware); // to use the middleware for all the routes

app.get("/sum", function(req, res) {
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        ans: a + b,
    });
});

app.get("/multiply", function(req, res) {
    const a=req.query.a;
    const b=req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a=req.query.a;
    const b=req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);