#! /Users/maniginam/phantomjs/phantomjs-2.1.1-macosx/bin/phantomjs

var fs = require("fs");
console.log(fs.workingDirectory);
var p = require('webpage').create();
var sys = require('system');

p.onConsoleMessage = function (x) {
    fs.write("/dev/stdout", x, "w");
};
console.log("args: ");
console.log(sys.args);
console.log("fs");
console.log(fs);
console.log(sys.args[1].workingDirectory);
p.libraryPath= "/Users/maniginam/TicTacToe"
p.open(sys.args[1]);
console.log("libraryPath");
console.log(p.libraryPath);
console.log("url");
console.log(p.url);

var result = p.evaluate(function () {
console.log("hello");
  speclj.run.standard.armed = true;
  return speclj.run.standard.run_specs(
     cljs.core.keyword("color"), true
  );
});

phantom.exit(result);