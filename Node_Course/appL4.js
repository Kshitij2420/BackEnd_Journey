const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);

  // Home Route
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>WELCOME TO HOME</h1></body>');
    res.write('</html>');
    return res.end();
  } 
  
  // Products Route
  else if (req.url === '/products') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>WELCOME TO PRODUCTS SECTION</h1></body>');
    res.write('</html>');
    return res.end();
  }

  // Default Route
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>NAME</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server address is http://localhost:${PORT}`);
});