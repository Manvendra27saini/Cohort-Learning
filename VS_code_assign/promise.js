/*
setTimeout(function () {
    console.log("hi");
    setTimeout(function () {
      console.log("hello");
  
      setTimeout(function () {
        console.log("hello there");
      }, 5000);
    }, 3000);
  }, 1000);
  */


 /* 
 function step3Done() {
    console.log("hello there");
  }
  
  function step2Done() {
    console.log("hello");
    setTimeout(step3Done, 5000);
  }
  
  function step1Done() {
    console.log("hi");
    setTimeout(step2Done, 3000);
  }
  
  setTimeout(step1Done, 1000); 
  */





  
  /*
  function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
      console.log("hello");
      setTimeoutPromisified(5000).then(function () {
        console.log("hello there");
      });
    });
  });
  */






  /*
  function random(resolve){
    setTimeout(resolve ,4000);
  }
  let p= new Promise(random);

  function callback(){
    console.log(" Promise succeded");
  }
  p.then(callback);
  */







 /* 
const fs =require("fs");

 function readTheFile(sendTheFinalValueHere){
    fs.readFile("a.txt" ,"utf-8" ,function(err,data){
        sendTheFinalValueHere(data);
    })
 } 
  function readFile(fileName){
    return new Promise(readTheFile);
  }

const p =readFile("a.txt");

function callback(contents){
    console.log(contents);

}
 p.then (callback);
 */
 





/* class Promise2 {
    constructor(fn) {
        const afterDone = () => {
           this.resolve();
        }
        fn(afterDone);
    }
  
    then(callback) {
      this.resolve = callback; // Store the callback to be called later
    }
  }
 
  function readTheFile(resolve) {
    setTimeout(function()  {
      console.log("Callback-based setTimeout completed");
      resolve(); // Call resolve after 3 seconds
    }, 3000);
  }
  
  function setTimeoutPromisified() {
    return new Promise2(readTheFile); // Create a new Promise2 with `readTheFile`
  }
  
  let p = setTimeoutPromisified();
  
  function callback() {
    console.log("Callback has been called");
  }
  
  p.then(callback);
  






 /// -----------setTimeout------------
function setTimeoutPromisified(ms){
return new Promise(function(resolve){
setTimeout(resolve,ms);
})
}

setTimeoutPromisified(3000).then(function(){
console.log("3 seconds has passed");
})
*/


//-----------readFile------------
const fs = require("fs");

function readFileAsync() {
  return new Promise(function(resolve, reject) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
      if (err) {
        reject(err.syscall);
      } else {
        resolve(data);
      }
    });
  });
}

readFileAsync().then(function(x) {
  console.log("data is " + x);
}).catch(function(x) {
  console.log("error is " + err);
});