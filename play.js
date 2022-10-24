const {connect} = require("./client");

console.log("Connecting ...")

connect();

const setupInput = function () {

  const stdin = process.stdin;

  stdin.setRawMode(true);

  stdin.setEncoding("utf8");

  stdin.resume();

  const handleUserInput = (key) => {
    if (key === '\u0003') process.exit();  
  };

  stdin.on("data", handleUserInput);



  return stdin;

}

setupInput();

