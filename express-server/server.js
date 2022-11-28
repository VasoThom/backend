const { response } = require("express");
const express = require("express");
const server = express();

server.get("/photos", (request, response) => {
  console.log("GET/photos");

  const photos = [
    "https://www.guru99.com/images/1/091318_0717_WhatisBacke1.png",
  ];

  //   response.json({ photos });
  response.send({ photos });
});

server.get("/albums", (request, response) => {
  console.log("GET/albums");

  const photos = [];

  //   response.json({ photos });
  response.send({ photos });
});
server.post("/photos", () => {});
server.put("/photos", () => {});
server.patch("/photos", () => {});
server.delete("/photos", () => {});

server.listen(4002);
