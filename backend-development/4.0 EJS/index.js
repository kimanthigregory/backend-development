import  express  from "express";


const app = express();
const port = 3000;

   
app.get("/", (req, res)=>{
    const now = new Date("June 20, 2023 11:13:00");
    const day = now.getDay();
    console.log(day);
    let type = "its a weekday";
    let adv = " time to work hard"
    if (day ===0|| day ===6){
        type = " its the weekend "
        adv = "time to have some fun"
    }
    res.render("index.ejs" ,
        {datatype:type,
         advice:adv
    });
})
app.listen(port, ()=>{
    console.log(`server started at port ${port}`);
})
