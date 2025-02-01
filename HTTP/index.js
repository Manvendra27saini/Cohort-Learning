/*
const express = require('express');
const app = express();

function sum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;

}

app.get('/', function(req, res){
    const n=req.query.n;
    const ans=sum(n);
    res.send('Sum of first '+n+' numbers is '+ans);
})

app.listen(3000);
*/


const express = require('express');
const app = express();

var users =[{
    name: 'John',
    kidneys :[{
     healhty:false,
    },
    {
     healhty:true,
    }]  
}];
app.use(express.json());
app.get('/', (req, res) => {
     const johnKidneys = users[0].kidneys;
     const numberOfKidneys = johnKidneys.length;
     const healthyKidneys = johnKidneys.filter(kidney => kidney.healhty).length;
     const numberOfUnhealthyKidneys = numberOfKidneys - healthyKidneys;

     res.json({
     numberOfKidneys,
        healthyKidneys,
        numberOfUnhealthyKidneys
     })
})

app.post('/', function(req, res) {
    const isHealthy =req.body.isHealthy;
    users[0].kidneys.push({
        healhty: isHealthy
    });

    res.json({
        message: 'Kidney added'
    });
})

app.put('/', function(req, res) {
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healhty = true;
    }
    res.json({
        message: 'Kidney updated'
    });
})

app.delete('/', function(req, res) {  
   if(atleastOneHealthyKidney(users[0].kidneys)){
    users[0].kidneys = users[0].kidneys.filter(kidney => kidney.healhty);
    
    res.json({
        message: 'Kidney deleted'
    });
    }else{
        res.sendStatus(400);
    }
})

function atleastOneHealthyKidney(kidneys){
    return kidneys.some(kidney => !kidney.healhty);
}


app.listen(3000);