const {
  token_tel
} = require('./token.js');
const axios = require('axios');
const {
  Firestore
} = require('@google-cloud/firestore');
const firestore = new Firestore();
var bodyParser = require('body-parser')
var express = require('express');
const cors = require('cors');
var app = express();
port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());

app.options('*', cors({
  credentials: true,
  origin: ["http://localhost:" + port]
}));
app.post('/msg', function (req, res) {
  console.log(req.body.msg)
  getID(req.body.msg);
  res.json({
    status: "Mensage Sent",
    // mensage: req.body.msg
  })
});




app.listen(port, function () {
  console.log('Example app listening on port'+port)
});





// Create a new client
async function getID(msg) {
  url = 'https://api.telegram.org/bot' + token_tel + '/sendMessage';
  // Obtain a document reference.
  const document = firestore.doc('dialogflow/pipoco');

  // Read the document.
  let doc = await document.get();
  // console.log(doc._fieldsProto)
  id = doc._fieldsProto;
  // console.log(id)
  for (var key in id) {
    axios.get(url, {
      params: {
        text: msg,
        chat_id: key
      }
    }).then(res => {
      console.log("Mensage Sent");
      //   console.log(res);
    }).catch(err => {
      console.log("ERROR", err);
    });

  }
}