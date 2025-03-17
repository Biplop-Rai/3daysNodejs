let express = require("express");
let app = express();
// let port =
//  3000;


app.get("/",(req,res)=>
{
    res.send("<h1>This is home page</h1>");
}
);
 app.get("/about",(req,res)=>
 {
        res.send("<h1>This is about page</h1>");
 });

//call back function
app.listen(3000,()=>
    {
        console.log("Server is running on port 3000");
    }
);

