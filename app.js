const express = require("express");
const send = require("send");

const app = express();

app.use((req, res, next) => {
  let body = "";
  req.on("end", () => {
    const username = body.split("=")[1];
    if (username) {
      req.body = { name: username };
    }
    next();
  });
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
});

app.use((req, res, next) => {
  if (req.body) {
    return res.send("<h1>" + req.body.name + "</h1>");
  }
  res.send(
    '<form method="POST"><input type="text" name="username" /><button type="submit">Submit</button></form>'
  );
});

app.listen(5000);
