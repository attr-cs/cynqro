const { Server } = require("socket.io");


function serverInitialization(server) {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket)=>{
    console.log(`User connected with socket Id: ${socket.id}`);
    

    socket.on("disconnect", ()=>{
      console.log(`User disconnected with socket Id: ${socket.id}`);
    })
  })
}

module.exports = { serverInitialization };