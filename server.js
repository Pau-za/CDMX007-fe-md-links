// const readMd = require('./src/read-file');
const findFile = require('./src/find-file');
// const findLinks = require('./src/find-links');
// const validate = require('./src/validate');
// const stats = require('./src/stats');
const path = require('path');
// const fs = require('fs');

module.exports = server = () => {
  if (process.argv.length <= 2) {
    console.log("You need to give a file or a directory path");
    process.exit(-1);
  } else {
    const userPath = path.resolve(process.argv[2]);
    // console.log(process.argv[2]);
    // console.log(userPath.extname)
    if (userPath.extname === undefined) {
      // console.log(typeof(userPath));
      console.log(findFile.directoryLook(`${userPath}`));
    // } else {
    //   console.log(readMd(userPath));
    }
  }
}

console.log(server())
// console.log(process.argv[2])