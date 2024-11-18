import axios from "axios";
import clientes from "../tokens.json" assert { type: "json" };

const getTokenFromclient = (clientId, accessToken) => {
  console.log(clientes, "token", accessToken);
};

const getQuestion = async (question, accessToken) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/questions/${question}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log("Detalles de la pregunta:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener detalles de la pregunta:", error);
    return null;
  }
};

getTokenFromclient(1);
