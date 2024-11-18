// sockets
export const socketConfig = {
  url: "https://app-meli-test.onrender.com",
  //url: "http://localhost:8800",
  //url: "https://rm21thw.localto.net",
  config: { transports: ["websocket", "polling", "flashsocket"] },
};
export const getDomain = () => {
  const domain = process.env.URL_DOMAIN
    ? process.env.URL_DOMAIN
    : socketConfig.url;
  return domain;
};
