// const math_lib = require('./my_math')

// let result_plus = math_lib.add(4, 5);
// console.log(result_plus);


// const fs = require('fs')
// fs.readFile('some.txt', 'utf-8', (err, data)=>{
//     fs.writeFile('some.txt', data + '\nSalom dunyo', (err, data)=>{
//         console.log('vse srabotalo');
        
//     })
// });

// const fs = require('fs');

// fs.mkdir('text-files', ()=>{
//     fs.writeFile('./text-files/some.txt', 'hello',()=>{});
// })


// const fs = require('fs');

// fs.unlink('./text-files/some.txt', ()=>{
//     fs.rmdir('./text-files', ()=>{
//         console.log('Delete succes');
        
//     })
// })

// const http = require('http');

// let server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     res.end('Hello Node js');
// })

// const PORT = 3001;
// const HOST = 'localhost';

// server.listen(PORT, HOST, ()=>{
//     console.log(`Server started http://${HOST}:${PORT}`);
    
// })

const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if(req.url == '/'){
        fs.createReadStream('./templates/index.html').pipe(res);
    }else if(req.url == '/about'){
        fs.createReadStream('./templates/about.html').pipe(res);
    }
})

const PORT = 3001;
const HOST = 'localhost';

server.listen(PORT, HOST, ()=>{
    console.log(`Server started http://${HOST}:${PORT}`);
    
})