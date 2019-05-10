const fs = require('fs');
const path = require('path');
const Stream = require('stream');
const readline = require('readline');

const file = path.resolve(`${__dirname}/data.txt`);

function readLargeFile() {
    let counter = 0;
    const fileData = fs.createReadStream(file);
    const stream  = new Stream();
    const readByLine = readline.createInterface(fileData);

readByLine.on('line', (data) => {
    counter++;
})

readByLine.on('close', () => {
    console.log('closed')
    console.log(`Number of line in the file is ${counter}`)
})
}

readLargeFile();