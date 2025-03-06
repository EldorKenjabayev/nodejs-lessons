const fs = require('fs')
fs.readFile('some.txt', 'utf-8', (err, data)=>{
    fs.writeFile('some.txt', data + '\nSalom dunyo', (err, data)=>{
        console.log('vse srabotalo');
        
    })
});