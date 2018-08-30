const fs = require('fs'); //fs = file system

fs.readFile('./hello.txt', (err,data) => {
    if(err){
        console.log('ERROR')
    }
    console.log(data.toString())
})