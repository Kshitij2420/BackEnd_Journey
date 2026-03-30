// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.headers, req.method);
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>');
//   res.write('<head><title>Complete Coding</title></head>');
//   res.write('<body><h1>ENTER YOUR DETAILS</h1>');
//  res.write('<form>');
// res.write('<input type="text" name="username" placeholder="Enter your name"><br>')
// res.write('<label for = "male">MALE</label>')
// res.write('<input type="radio" id = "female" name = "gender" value="female">')
// res.write('<label for = "female">FEMALE</label>')
// res.write('<input type="radio" id = "male" name = "gender" value="male">')
// res.write('<input type = "submit" value="Submit">');
//  res.write('</form>');

//   res.write('</body>');
//   res.write('</html>');
//   res.end();
// });

// const PORT = 3001;

// server.listen(PORT, () => {
//   console.log(`Server address is http://localhost:${PORT}`);
// });
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  if(req.url === '/'){
    
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head><title>Complete Coding</title></head>
      <body>
        <h1>ENTER YOUR DETAILS</h1>

        <form method="POST" action="/submit">
          
          <input type="text" name="username" placeholder="Enter your name"><br><br>

          <label for="male">MALE</label>
          <input type="radio" id="male" name="gender" value="male"><br>

          <label for="female">FEMALE</label>
          <input type="radio" id="female" name="gender" value="female"><br><br>

          <input type="submit" value="Submit">

        </form>
      </body>
    </html>
  `);

 return res.end();
  } else if(req.url.toLowerCase() === '/submit' && req.method == "POST"){
   fs.writeFileSync('user.txt','Kshitij ')
   res.statusCode = 302;
   res.setHeader('Location','/');
  }
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server address is http://localhost:${PORT}`);
});