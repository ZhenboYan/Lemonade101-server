const express = require("express");
const app = express();
const port = 3000;

// const fs = require('fs')

// try {
//   const data = fs.readFileSync('/home/bitnami/htdocs/Lightsail-Setup-Custom-Domain-SSL/Lightsail-Setup-Custom-Domain-SSL-main/temp_data.txt', 'utf8')
//   console.log(data)
// } catch (err) {
//   console.error(err)
// }
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/template/index.html");
});

app.get("/", function (request, response){
  response.sendFile(__dirname+"/index.html");
});

app.get("/feeding", (req, res) => {
  res.sendFile('/home/bitnami/htdocs/Lightsail-Setup-Custom-Domain-SSL/Lightsail-Setup-Custom-Domain-SSL-main/temp_data.txt');
});

app.get("/:name/:pic", (req, res) => {
   res.sendFile('/home/bitnami/htdocs/Lightsail-Setup-Custom-Domain-SSL/Lightsail-Setup-Custom-Domain-SSL-main/lemonade_sleep.jpg');
});

