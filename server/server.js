const express = require("express");
const port = 8080;
 
//use the application off of express.
const app = express();

//start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

//define the route for "/"
app.get("/", function (request, response){
    response.sendFile(__dirname+"/index.html");
});
 
app.get("/getemail", function (request, response){
    const firstname = request.query.firstname;
 
    if (firstname != "") {
        response.send("Your email address is " + firstname + "@gullele.com");
    } else {
        response.send("Please provide us first name");
    }
});
 
