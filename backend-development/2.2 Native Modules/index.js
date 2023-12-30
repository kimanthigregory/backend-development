 const error  = require("console");
const fs = require("fs");

//  fs.writeFile("message.text","hello from nodejs", (err)=>{
//     if(err) throw err;
//     console.log("file has been saved!");
//  })

 fs.readFile("./message.text","utf-8",(err,data) =>{
    if(err) throw err;
    console.log(data);
 })