import express from "express";

import {
  sendMessageToIndex,
  sendMessageToStock,
  broadcastMessage,
} from "../services/socketService.mjs";

const routerMeli = express.Router();

// Endpoint único para manejar todos los mensajes
routerMeli.post("/", (req, res) => {
  const notification = req.body;
  console.log("message from meli", req.body);
  const token = process.env.ML_TOKEN;
  console.log("TOKEN", token);
  try {
    if (notification.topic === "orders_v2") {
      console.log("Nueva venta:", notification);
      // io.emit("nuevaVenta", notification); // Enviar notificación al frontend
      sendMessageToStock(notification);
    } else if (notification.topic === "questions") {
      console.log("Nueva pregunta:", notification);
      //io.emit("nuevaPregunta", notification); // Enviar notificación al frontend
      broadcastMessage(
        "Te hicieron una pregunta , responde,carajo:" +
          notification.resource.split("/").pop()
      );
    }
    res.status(200).send(notification);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "bad request" }); // Identificar el tipo de notificación
  }
});

export default routerMeli;
