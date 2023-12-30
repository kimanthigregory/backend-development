import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
function logger(){
  console.log("request method:", req.method, url.method)
}
app.use(logger)
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
