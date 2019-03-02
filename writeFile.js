const fs = require('fs');
const file = fs.createWriteStream('./output.json');
const faker = require('faker');

const firstName = faker.name.findName();
const city = faker.address.city();

const obj = {
    firstName,
    city
};

const batch = 10000;
let counter = 8000;

async function streams()  {
    let data = [];

    if(counter>0) {
        for(i = batch; i>0; i--) {
            data.push(obj);
        }
        counter--;
    }
    const res = file.write(JSON.stringify(data));
    data = [];
    if(counter === 0) {
        console.log("Done!!")
        return;
    }
    if(!res) {
    file.once('drain', streams);
    }
};
streams();