const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));

app.get('/status', (req, res) => {
  res.send("I'm running");
});

app.post('/subscribe', (req, res) => {
  return res.json({ success: false });
});

app.listen(3030, function () {
  console.log('Server listening on port 3030!');
});
