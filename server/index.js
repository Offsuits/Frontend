const express = require('express');
const github = require('../helpers/github.js')
const db = require('../database/index.js')
var fs = require('fs');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  chunk = '';
  req.on('data', (d) =>
    {chunk += d}
  )

  req.on('end', function() {
     console.log(chunk.term);
    // getLiveData(chunk, (params) => {
    //   db.save(params, (repos) => {
    //     console.log(repos);
    //     res.send(repos);
    //   });
    // })
  })

  //res.end('success')

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.retrieve(function(data){
    console.log(data);
    res.end(data);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

var getData = function(callback) {
  fs.readFile('../data.json', function(err, data) {
    var theList = JSON.parse(data);
    var params = [];
    for(var i = 0; i < theList.length; i++) {
      var param = {name: theList[i].name, githubId: theList[i].id, owner: theList[i].owner.login, forks: theList[i].forks};
      params.push(param);
    }

    callback(params);
  })
}

var getLiveData = function(name, callback) {
  github.getReposByUsername(name, function(data) {
    var params = [];
    for(var i = 0; i < data.length; i++) {
      var param = {name: data[i].name, githubId: data[i].id, owner: data[i].owner.login, forks: data[i].forks};
      params.push(param);
    }

    callback(params);
  });
}
