//import http from "http"; // ES6 Modules

console.log("BACKEND");

const http = require("http"); // CommonJS Modules
console.log("starting server....");
const server = http.createServer((request, response) => {
  console.log("getting  a request", request.method, request.url);
  switch (request.url) {
    case "/photos": {
      const photos = [
        "https://www.guru99.com/images/1/091318_0717_WhatisBacke1.png",
      ];
      //   response.setHeader("Content-Type", "application/json");
      response.setHeader("Content-Type", "image/png");

      response.write("my PHOTOS:");

      response.write(JSON.stringify({ photos }));

      console.log("request photos");
      response.end();

      break;
    }
    case "/albums": {
      response.write("my albums");
      console.log("request albums");
      response.end();

      break;
    }
  }
});

server.listen(4000);
