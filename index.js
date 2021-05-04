const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const { send } = require("process");
const router = express.Router();

// const fs = require('fs')

try {
  const data = fs.readFileSync('/home/bitnami/htdocs/Lightsail-Setup-Custom-Domain-SSL/Lightsail-Setup-Custom-Domain-SSL-main/temp_data.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

router.get("/", (req, res) => {
  res.sendFile(__dirname+"/template/base.html");
});

app.get("/feeding", (req, res) => {
  res.sendFile('/home/bitnami/htdocs/Lightsail-Setup-Custom-Domain-SSL/Lightsail-Setup-Custom-Domain-SSL-main/temp_data.txt');
  // res.send(data);
});

// app.get("/:name/:pic", (req, res) => {
//    res.sendFile('/home/bitnami/htdocs/Lightsail-Setup-Custom-Domain-SSL/Lightsail-Setup-Custom-Domain-SSL-main/lemonade_sleep.jpg');
// });

app.use('/', router);