const http = require('http');

const hostname = '0.0.0.0';
const port = 9003;

const server = http.createServer((req, res) => {
  console.log(`Request URL: ${req.url}`);
  console.log(`Request method: ${req.method}`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Shashank, this app is deployed to Kubernetes from GIT using CICD with version V1.0!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
