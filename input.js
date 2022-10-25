let connection;

const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGE } = require("./constants");



const setupInput = (conn) => {

  connection = conn;

  const stdin = process.stdin;

  stdin.setRawMode(true);

  stdin.setEncoding("utf8");

  stdin.resume();

  const handleUserInput = (key) => {
    if (key === '\u0003') process.exit();
  };


  const wasd = (key) => {
    if (key === 'w') {
      conn.write(MOVE_UP_KEY);
    } else if (key === 'a') {
      conn.write(MOVE_LEFT_KEY);
    } else if (key === 's') {
      conn.write(MOVE_DOWN_KEY);
    } else if (key === 'd') {
      conn.write(MOVE_RIGHT_KEY);
    }
  };


  const sendMessage = (findValue) => {
    for (let [key, value] of Object.entries(MESSAGE)) {
      if (findValue === key) {
        conn.write(value);
      }
    }
  };



  stdin.on("data", wasd);
  stdin.on("data", handleUserInput);
  stdin.on("data", sendMessage);

  return stdin;

};


module.exports = {
  setupInput,
};