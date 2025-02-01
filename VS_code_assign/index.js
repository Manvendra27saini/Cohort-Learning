/*const fs=require("fs");

function read(err, data){
    console.log(err);
    console.log(data);
}

const contents =fs.readFile("a.txt","utf-8" ,read);
console.log(contents);

const content2 =fs.readFile("b.txt","utf-8" ,read);
console.log(content2);

function timeout(err, data){
    console.log("Click the button");
}

console.log("Hi");

setTimeout(timeout,5000);

console.log("Welcome to Loupe");

let c=0;
for(let i=0;i<1000000000;i++){
    c+=1;
}
console.log("Expensive operation done");*/

class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    
 }
 
 const rect = new Rectangle(2, 4 ,"Red" )

 const rect2 = new Rectangle(3, 4 ,"Blue" )
 const area = rect.area();
 rect.paint();
 console.log(area)
 const area2=rect2.area();
 console.log(area2);