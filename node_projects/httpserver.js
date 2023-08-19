const http = require('http');
const port= process.env.PORT || 3000;
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>This is Server Code</h1>');
    if(res.url=='/hello'){
        res.status=200;
        const data  = fs.readFileSync('index.html');
        res.end(data.toString()); // run and render the index.html file as a response.
    }
    else if(res.url=='/about'){
        res.status=200;
        res.end('<h2>About Page</h2>'); // render more elements for more URLs dynamically.
    }
})

server.listen(port, ()=>{
    console.log('Server running on' + port);
});