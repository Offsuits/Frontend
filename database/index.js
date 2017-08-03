const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  githubId: String,
  name: String,
  owner: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (entries, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the mongodb

  for(var i = 0; i < entries.length; i++) {
    var entry = new Repo({name: entries[i].name, githubId: entries[i].githubId, owner: entries[i].owner, forks: entries[i].forks});
    entry.save(function(err, addition) {
      if(err) console.log(err);
    })
  }

  retrieve((repos) => {
    callback(repos);
  })
}

let retrieve = (callback) => {
  Repo.find(function (err, repos) {
    if (err) return console.error(err);
    callback(repos);
  }).sort({'forks': -1}).limit(25)
}

module.exports.save = save;
module.exports.retrieve = retrieve;