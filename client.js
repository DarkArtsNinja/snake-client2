const net = require("net");

const connect = function () {


  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  //to receive messages
  conn.on("connect", ()=> {
    
    console.log("client connected to server:")
    conn.write("Name: 515");
    setInterval(


      ()=> conn.write("Move: up")


    , 500)

  });

  conn.on("data", (data) => {
    console.log("this is incoming data:", data);
  } )

  return conn;
};

module.exports = {connect}
