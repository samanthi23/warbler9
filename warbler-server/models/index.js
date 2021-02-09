const mongoose = require("mongoose");
// a wrapper around mongo
// to make queries a little bit more efficiently

mongoose.set("debug", true);
// see the actual mongo queries run in the terminal
mongoose.Promise = Promise;
// async functions return promises
mongoose.connect("mongodb://localhost/warbler", {
  keepAlive: true,
  useMongoClient: true
});

module.exports.User = require("./user");
