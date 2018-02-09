const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));

const { MONGO_URL } = process.env
const mongo = mongoose.createConnection(MONGO_URL)
mongoose.Promise = global.Promise

const HelloNotify = mongo.model('HelloNotify', mongoose.Schema({ email: String, c_at: Date }))

app.get('/status', (req, res) => {
  res.send("I'm running");
});

app.post('/notify', (req, res) => {
  let email = (req.body.email || '').trim()
  if (email == '') return res.json({ message: 'Något saknades', code: 400 })

  console.log(`Notifying ${email}`)
  const rec = new HelloNotify({ email: email, c_at: new Date()})
  rec.save().then((doc) => {
    res.json({ success: true, code: 0 })
  })
});

app.post('/subscribe', (req, res) => {
  return res.json({ success: false });
});

app.listen(3030, function () {
  console.log('Server listening on port 3030!');
});
