const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const { send } = require("process");
const router = express.Router();
var fs = require('fs');
const readline = require('readline');
var json_obj = [];
var copy_obj = [];
var json_obj_chart = [];
var copy_obj_chart = [];
  
// Pages:
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

router.get("/", (req, res) => {
  res.sendFile(__dirname +"/template/base.html");
});

app.get("/alldata", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj.push(JSON.parse(line))
  });

  copy_obj = json_obj
  json_obj = []
  
  res.render(__dirname + '/template/alldata.pug', { 
    obj: copy_obj,
  });
  
});

app.get("/chart", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/feeding", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_feeding.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/latest", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_latest.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/line", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_line.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/monthly", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_monthly.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/monthly/mealtime", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_monthly_mealtime.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/monthly/frequency", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_monthly_frequency.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/aboutme", (req, res) => {
  res.sendFile(__dirname +"/template/aboutme.html");
});

app.get("/lemonade", (req, res) => {
  res.sendFile(__dirname+"/lemonade_sleep.jpg");
});

app.get("/lemonade_ap", (req, res) => {
  res.sendFile(__dirname+"/template/pics/lemonade_ap.jpg");
});

app.get("/head", (req, res) => {
  res.sendFile(__dirname+"/template/pics/head.jpg");
});

app.get("/lemonade_ap2", (req, res) => {
  res.sendFile(__dirname+"/template/pics/lemonade_ap2.jpg");
});

app.get("/base/basecss", (req, res) => {
  res.sendFile(__dirname+"/template/base.css");
});

app.get("/alldata/alldatacss", (req, res) => {
  res.sendFile(__dirname+"/template/alldata.css");
});

app.get("/style_togglecss", (req, res) => {
  res.sendFile(__dirname+"/template/toggle.css");
});

app.get("/style_togglejs", (req, res) => {
  res.sendFile(__dirname+"/template/toggle.js");
});

app.use('/', router);

app.get("/chart/monthly/jan", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_jan.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/monthly/feb", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_feb.pug', {
    obj: copy_obj_chart,
  });
});


app.get("/chart/monthly/mar", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_mar.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/monthly/apr", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_apr.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/monthly/may", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_may.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/monthly/jun", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_jun.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/monthly/jul", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_jul.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/monthly/aug", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_aug.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/monthly/sep", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_sep.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/monthly/oct", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_oct.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/monthly/nov", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_nov.pug', {
    obj: copy_obj_chart,
  });
});

app.get("/chart/monthly/dec", (req, res) => {
  var readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname+'/js_data.json'),
    output: process.stdout,
    console: false
  });
  
  readInterface.on('line', function(line) {
    json_obj_chart.push(JSON.parse(line))
  });

  copy_obj_chart = json_obj_chart
  json_obj_chart = []
  
  res.render(__dirname + '/template/chart_dec.pug', {
    obj: copy_obj_chart,
  });
});