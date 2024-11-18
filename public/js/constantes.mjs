// sockets

const isLocalhost = window.location.hostname === "localhost";

export const socketConfig = {
  url: isLocalhost
    ? "http://localhost:8800"
    : "https://app-meli-test.onrender.com",
  config: { transports: ["websocket", "polling", "flashsocket"] },
};
