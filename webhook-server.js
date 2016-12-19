
const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const dbClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/mydatabase';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  dbClient.connect(dbUrl, function(err, db) {
    const collection = db.collection('alerts');
    let alert = req.body;
    collection.insertOne(alert, (err, r) => {
      if (!err) {
        res.sendStatus(200);
      }
      db.close();
    });
  });

});

app.get('/alerts', (req, res) => {
  dbClient.connect(dbUrl, function(err, db) {
    const collection = db.collection('alerts');
    collection.find({}).toArray((err, alerts) => {
      if (!err) {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.write(JSON.stringify(alerts));
        res.send();
      }
      db.close();
    });
  });
});

app.get('/topAlerts', (req, res) => {
  dbClient.connect(dbUrl, function(err, db) {
    const collection = db.collection('alerts');
    collection.find({}).limit(3).toArray((err, alerts) => {
      if (!err) {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.write(JSON.stringify(alerts));
        res.send();
      }
      db.close();
    });
  });
});

http.listen(4301, () => {
  console.log('listening on *:4301');
});
