const http = require('http');
const port = 2003;

const response = (req,res)=>{
    res.write("<h1>hi</h1>");
    res.end()
}

const server = http.createServer(response)

server.listen(port,err=>{
    if(err){
        console.log(err)
    }else{
        console.log("hi rahil")
    }
})
