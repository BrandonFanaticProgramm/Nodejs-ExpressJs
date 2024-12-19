const fs = require('fs');
const util = require('util');

//HANDLE ERRORS IN PROMISES
const myPromise = (x,y) => {
    return new Promise((resolve,reject) => {
        const result = x + y;

        if(result >= 20) resolve(result);
        else reject(new Error('Result is too small'));
    })
}
myPromise(10,10)
    .then(result => console.log(result))
    .catch(err => console.log('Error: ', err.message));


// WITH PROMISIFY
const readFile = util.promisify(fs.readFile);

readFile('/path/to/file.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.log('Error: ', err.message));


// WITH ASYNC/AWAIT

const read = async () => {
  try {
    const result = await readFile('/home/Kedar/node.txt');
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

read();