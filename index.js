import http from "http";

const server = http.createServer((req, res) => {
  console.log("Request Received");
  res.write("Random Number: ");
  res.write(`${Math.round(Math.random() * 100)}`);
  res.end();
});

server.listen(8081);
