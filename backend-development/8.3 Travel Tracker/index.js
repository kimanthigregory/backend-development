import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
let countries_codes = [];
const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"work",
  password:"greg",
  port:5432,
})
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("SELECT * FROM visited_countries");
  let countries  = [];
  result.rows.forEach((country) => {
  countries.push(country.country_code);
  });
  console.log(result.rows);
  const arrayLength = result.rows.length;
  console.log(arrayLength); 
  // console.log(countries);
  res.render("index.ejs",{countries:countries,total:arrayLength})

  db.end();

});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
