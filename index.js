import dotenv from "dotenv";
import express, { json, urlencoded } from "express";
import cors from "cors";

import routerMessages from "./routes/socketRoutes.mjs";
import routerMeli from "./routes/meliRoute.mjs";
import { initializeSocketService } from "./services/socketService.mjs";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8800;

// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(express.static("public"));

// Rutas
app.use("/messages", routerMessages);
app.use("/meli", routerMeli);
// app.get("/", (req, res) => {
//   res.status(200).json({ msg: "Server running" });
// });

// Crear el servidor HTTP
const server = app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);

// Inicializar los sockets en el mismo servidor
initializeSocketService(server);
