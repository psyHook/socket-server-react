
class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      // Escuchar evento
      socket.on("message-to-server", (data) => {
        console.log(data);

        this.io.emit("message-from-server", data);
      });
    });
  }
}

module.exports = Sockets;

// io.on("connection", (socket) => {
//   // console.log(socket.id);

//   // Para emitir un mensaje
//   //   socket.emit("mensaje-bienvenida", {
//   //     msg: "Bienvenido al server",
//   //     fecha: new Date(),
//   //   });

//   // Escuchar el evento
//   socket.on('message-to-server', (data) => {
//     console.log(data);

//     io.emit('message-from-server', data );
//   });
// });
