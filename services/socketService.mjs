import { Server } from "socket.io";

let sendMessageToIndex, sendMessageToStock, broadcastMessage;

export function initializeSocketService(server) {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("New connection established:", socket.id);

    // Escuchar cuando un cliente se une a una sala específica
    socket.on("joinRoom", (room) => {
      console.log(`Cliente se unió a la sala: ${room}`);
      socket.join(room);
    });

    // Manejo de desconexión
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  // Definir funciones para enviar mensajes a salas o a todos
  sendMessageToIndex = (message) => {
    io.to("indexRoom").emit("message", message);
  };

  sendMessageToStock = (message) => {
    io.to("stockRoom").emit("message", message);
  };

  broadcastMessage = (message) => {
    io.emit("message", message);
  };

  return io; // Devuelve la instancia de Socket.IO si necesitas usarla en otros módulos
}

export { sendMessageToIndex, sendMessageToStock, broadcastMessage };
