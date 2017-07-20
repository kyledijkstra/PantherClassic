// var gameOne = {
//   time: "8:00am",
//   home: " ",
//   away: " "
// };
const express = require('express');
const app = express();
// app.use(express.static(__dirname));
app.get('/', function(req, res) {
   res.send('hello world');
})
app.listen(3000);
console.log("listening...");
