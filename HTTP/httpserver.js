const express = require("express");

const app = express();

let requestCount = 0;

function requestIncrement(req ,res, next) {
    requestCount++;
    console.log("Request Count: ", requestCount);
    next();
}
/// aap.use(requestIncrement); to use the middleware for all the routes

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