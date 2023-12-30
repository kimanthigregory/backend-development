import  express  from "express";
const app = express();
const port = 3000;

app.get("/",(req, res)=>{
  console.log(res.send("<h1>HELLO I KNOW NODE.JS</h1>"));
})
app.get("/about",(req,res)=>{
  console.log(res.send("<h1>this is the About page</h1>"));

})
app.get("/contact",(req,res)=>{
  console.log(res.send("<h1> this is the contact page</h1>"))
})
app.listen(port, ()=>{
  console.log(`server is stated at ${port}`);
})