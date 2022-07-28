const express = require('express');
const app = express();

app.use(express.json());


app.get('/', function (req, res) {
  res.send('Hello World');
});

var port = process.env.port || 3000;

app.listen(port, ()=>{
  console.log('App running at http://localhost:'+port);
});
