// sockets

export const socketConfig = {
  url: window.location.href,
  //url: "https://app-meli-test.onrender.com",
  //url: "http://localhost:8800",
  //url: "https://rm21thw.localto.net",
  config: { transports: ["websocket", "polling", "flashsocket"] },
};
