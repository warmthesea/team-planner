var repl = require("repl");
var db = require("./server/models/index.js");

var replServer = repl.start({
  prompt: "PostgreSQL > ",
});
