let connection;

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
      conn.write("Move: up");
    } else if (key === 'a') {
      conn.write("Move: left");
    } else if (key === 's') {
      conn.write("Move: down");
    } else if (key === 'd') {
      conn.write("Move: right");
    }
  };

  const sendMessage = (key) => {
    if (key === 'h') {
      conn.write("Say: Hey there");
    } else if (key === 'i') {
      conn.write("Say: I'm going to win!");
    } else if (key === 'g') {
      conn.write("Say: Nice save");
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