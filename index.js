import http from "http";
import dotenv from "dotenv";
dotenv.config();

console.log("API_KEY = " + process.env.API_KEY);

console.log("API_KEY = " + process.env.PATH);
const server = http.createServer((req, res) => {
  console.log("Request Received");

  res.end(
    `${Math.round(Math.random() * 100)} ${"API_KEY = " + process.env.API_KEY}`
  );
});

server.listen(process.env.PORT);
console.log("server starting http://localhost:8081");
