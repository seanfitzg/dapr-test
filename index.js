var express = require('express');
var app = express();
const port = 3001;

app.get('/test', function (req, res) {
  res.send('hello world')
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

// dapr run --app-id express-app --app-port 80 --dapr-http-port 3500 node index.js   