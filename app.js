const express = require("express");

const app = express();

// const app = require('express')();

app.get("/", (req, res) => {
  res.send("Hello world ");
});

app.listen(3000, () => {
  console.log("NodeJS server has been created at port 3000");
});
