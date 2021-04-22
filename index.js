const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send(`Welcome to ZHENBO's server! This is the homepage on port ${port}`);
});

app.get("/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.get("/:name/:pic", (req, res) => {
  res.send(`Welcome to Lemonade's server! This is the homepage on port ${port}`);
  res.sendFile('/home/bitnami/htdocs/Lightsail-Setup-Custom-Domain-SSL/Lightsail-Setup-Custom-Domain-SSL-main/ms.jpg');
});

app.get("/:name/:ms/:perfect", (req, res) => {
  res.sendFile('/home/bitnami/htdocs/Lightsail-Setup-Custom-Domain-SSL/Lightsail-Setup-Custom-Domain-SSL-main/perfect.jpg');
});