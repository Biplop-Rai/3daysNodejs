//http
//framework 

let express = require("express");
let app = express();

app.set("view engine", "ejs"); // express js ma ejs vane template engine use as a fronntend ko lagi use garna aateko xu
// tesko lagi k kati chayene configuration garkthey hai toh

app.get("/", (req, res) => {
    let name = "Biplop";
    // console.log(req);
    // console.log(res);
    res.render("/home/biplop/Documents/Nodejs-Workshop-3Days/views/home.ejs",{name:name});
});

app.get("/about", (req,res) => {
    res.render("/home/biplop/Documents/Nodejs-Workshop-3Days/views/about.ejs");
}
);

app.get("/contact", (req,res) => {
    res.send("<h1>This is contact page </h1>")
})

app.get("*", (req,res) => {
    res.send("<h1>404 Page not found</h1>");
}
);
app.listen(3000, () => {
    console.log('server is running on port 3000');
});


