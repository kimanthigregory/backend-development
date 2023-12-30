import express from "express";
import bodyParser from "body-parser";
import { name } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
let defText ="enter your name below";
app.get("/", (req, res) => {
  
  res.render("index.ejs",{header:defText});
});

app.post("/submit", (req, res) => {
  const fullName=req.body["fName"]+req.body["lName"];
  const nameLength= fullName.length;
  defText=`there are ${nameLength} words in your name`;
  res.render("index.ejs",{header: defText})
  console.log(nameLength);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
