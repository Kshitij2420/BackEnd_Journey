const http = require('http');
const server = http.createServer((req,res)=>{
 console.log(req.url,req.method);
 if(req.url === '/home'){
  res.write('<h1>Home Page</h1>');
  return res.end();
 }
 if(req.url === '/men'){
  res.write('<h1>MEN Page</h1>');
  return res.end();
 }
 if(req.url === '/women'){
  res.write('<h1>WOMEN Page</h1>');
  return res.end();
 }
 if(req.url === '/kids'){
  res.write('<h1>KIDS Page</h1>');
  return res.end();
 }
 if(req.url === '/cart'){
  res.write('<h1>CART Page</h1>');
  return res.end();
 }
 res.write(`
<html lang="en">
<head>
  
  <title>MYNTRA</title>
</head>
<body>
  <nav>
    <ul>
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
       <a href="/men">Men</a>
      </li>
      <li>
                
        <a href="/women">Women</a>
        
      </li>
      <li>
              
        <a href="/kids">Kids</a>
       
      </li>
      <li>
            
        <a href="/cart">Cart</a>
      </li>
    </ul>
  </nav>
</body>
</html>`);
res.end();
});

server.listen(3001,()=>{
  console.log('Server running on address http://localhost:3001');
});