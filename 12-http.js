const http=require('http');

const server =http.createServer((req,res)=>{
  
  res.write('welcomme to our home page')
  res.end()
})

server.listen(500)