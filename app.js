const http = require("http");

const server = http.createServer((req, res) => {
  console.log("INCOMING REQUEST");
  console.log(req.method, req.url);

  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Succes!</h1>"); // -> outputs <h1>Success!</h1> in the browser
});

server.listen(5000);
