// http: サーバーとクライアントとのやり取りをすることができる
const http = require('http');
const PORT = 8000;
const html = require("fs").readFileSync("./index.html");

const server = http.createServer((req, res) => {
  // ヘッダー情報を返す
  res.writeHead(200, { "Content-type": "text/html" });
  res.write(html);
  res.end();
});

server.listen(PORT, () => {
  console.log("server running!");
});
