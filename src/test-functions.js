const fs = require('fs');
const path = require('path');
const validate = require('./validate.js');
const stats = require('./stats.js');
const validateStats = require('./validate-stats.js');
const md = require('markdown-it')();
const jsdom = require("jsdom");
const {
  JSDOM
} = jsdom;

const userPath = process.argv[2];

// cuando el usuario no introduce la ruta de la carpeta que quiere buscar
module.exports = mdLinks = (userPath) => {
  const absPath = path.resolve(userPath);
  if (absPath == undefined) {
    // process.exit(-1);
    return "you should enter a file Path or a directory path";
  } else if (absPath.extname === '.md') {
    console.log('its a file path');
    itsAFile(absPath);
    return absPath
  } else if (absPath.extname === undefined) {
    itsADirectory(absPath);
    return absPath
  }
}

module.exports = itsADirectory = (userPath) => {
  let pathArr = [];
  let actualPath = '';
  fs.readdir(userPath, (err, items) => {
    if (err) {
      console.log(err);
    } else {

      for (var i = 0; i < items.length; i++) {
        const ext = path.extname(items[i]);
        if (ext === '.md') {
          actualPath = userPath + '\\' + items[i];
          console.log(actualPath);
          // pathArr.push(actualPath);
          itsAFile(actualPath);
          return actualPath;
        }
      }
    }
  })
}

module.exports = itsAFile = (somePath) => {
  let allLinks = [];
  fs.readFile(somePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {

      const renderedReadme = md.render(data); // convierte el readme a html
      let totalLinks = [];
      let totalNamesLinks = [];
      const obj = new JSDOM(renderedReadme).window.document.getElementsByTagName("a");
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          totalLinks.push(obj[key].getAttribute("href"));
          totalNamesLinks.push(obj[key].textContent);
          // return totalLinks, totalNamesLinks;
          allLinks.push(totalLinks, totalNamesLinks);
        }
      }
    }
    if (process.argv.length <= 3) {
      console.log('links found in the path: ' + somePath);
      for (let i = 0; i < allLinks[0].length; i++) {
        console.log('Link: ' + allLinks[0][i] + ', to: ' + allLinks[1][i]);
      }
      return allLinks;
    } else if (process.argv[3] === '--validate') {
      validate(allLinks);
      return allLinks;
    } else if (process.argv[3] === '--stats') {
      stats(allLinks);
      return allLinks;
    } else if (process.argv[3] === '--validate--stats') {
      stats(allLinks);
      validateStats(allLinks)
      return allLinks;
    }
  });
}

console.log(mdLinks(userPath));
