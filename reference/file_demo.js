const fs = require('fs');
const path = require('path');

// Create folder ==> fs.mkdir(path[option], callback)
// fs.mkdir(path.join(__dirname,"/test"),{}, err => {
//     if(err) throw err;
//     console.log("Folder created...")
// })

// CREATE AND WRITE TO FILE
// fs.writeFile(path.join(__dirname,"/test",'hello.txt'),
//     'hello world i am abdessamad',
//     err => {
//     if(err) throw err;
//     console.log("File written to...")

//     // File append
//     fs.appendFile(path.join(__dirname,"/test",'hello.txt'),
//     ' i love notejs',
//     err => {
//     if(err) throw err;
//     console.log("File written to...")
// })
// })

// Reade file
// fs.readFile(path.join(__dirname,'/test/hello.txt'),'utf-8',
//     (err,data) => {
//         if(err) throw err;
//         console.log(data)
// })

// rename file
fs.rename(path.join(__dirname,'/test/hello.txt'),path.join(__dirname,'/test/helloworld.txt'),
    (err) => {
        if(err) throw err;
        console.log('fille renamed...')
})
