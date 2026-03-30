const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req);
  process.exit();
})

const PORT = 3001;
server.listen(PORT,()=>{
  console.log(`Server address is http://localhost:3001`);
})