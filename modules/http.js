const http = require("http");

function router(req, res) {
  console.log("New request!");
  console.log(req.url);

  switch (req.url) {
    case "/hello":
      res.writeHead(200, { "Content-type": "text/plain" });
      res.write("Hi, how are you?");
      res.end();
      break;
    default:
      res.writeHead(404, { "Content-type": "text/plain" });
      res.write(`Error 404: I don't know what you want`);
      res.end();
  }
}

const server = http.createServer(router);

server.listen(3000, () => {
  console.log("Listening on port 3000");
});