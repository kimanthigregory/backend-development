import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
const __dirname =dirname(fileURLToPath(import.meta.url));
const app =express();
const port =3000;
var bandname ="";
app.get("/",(req,res)=>{
  res.sendFile(__dirname +"/public/index.html")
})
app.use(bodyParser.urlencoded({axtended:true}));
function bandNameGenerator(req, res, next){
  bandname= req.body["street"]+req.body["pet"];
   next();
}
app.use(bandNameGenerator);
app.post("/submit",(req,res)=>{
  res.send((`<h1>band generator</h1><h1>${bandname}</h1>`));
})
app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})
