import http from "http";
import dotenv from "dotenv";
dotenv.config();

console.log("API_KEY = " + process.env.API_KEY);

console.log("API_KEY = " + process.env.PATH);
const server = http.createServer((req, res) => {
  console.log("Request Received");
  res.write("Random Number: ");
  res.write(
    `${Math.round(Math.random() * 100)} ${"API_KEY = " + process.env.API_KEY}`
  );
  res.end();
});

server.listen(8081);
console.log("server starting http://localhost:8081");
