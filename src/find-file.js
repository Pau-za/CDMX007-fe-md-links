//voy a crear este módulo en caso de que el usuario quiera encontrar el archivo (con extensión .md) para leerlo
const fs = require('fs');
const path = require('path');
const validate = require('./validate.js');
const stats = require('./stats.js');
const validateStats = require('./validate-stats.js');
const toRead = require('./read-file.js');
const md = require('markdown-it')();
const jsdom = require("jsdom");
const {
  JSDOM
} = jsdom;

// cuando el usuario no introduce la ruta de la carpeta que quiere buscar
module.exports = directoryLook = () => {
  if (process.argv.length <= 2) {
    console.log("You need to give a file or a directory path");
    process.exit(-1);
  } else {
    const userPath = path.resolve(process.argv[2]);
    if (userPath.extname === undefined) {
      let pathArr = [];
      let actualPath = '';
      fs.readdir(userPath, (err, items) => {
        if (err) throw err;
        for (var i = 0; i < items.length; i++) {
          const ext = path.extname(items[i]);
          if (ext === '.md') {
            actualPath = userPath + '\\' + items[i];
            console.log(actualPath);
            pathArr.push(actualPath);
          }
        }
        pathArr.forEach(newPath => {
          fs.readFile(newPath, 'utf8', (err, data) => {
            //utf8 le pide que retorne el contenido del documento (data) como un string 
            if (err) throw err;
            const renderedReadme = md.render(data); // convierte el readme a html
            let totalLinks = [];
            let totalNamesLinks = [];
            let allLinks = [];
            const obj = new JSDOM(renderedReadme).window.document.getElementsByTagName("a");
            for (const key in obj) {
              if (obj.hasOwnProperty(key)) {
                totalLinks.push(obj[key].getAttribute("href"));
                totalNamesLinks.push(obj[key].textContent);
              }
            }
            allLinks.push(totalLinks, totalNamesLinks);
            if (process.argv.length <= 3) {
              console.log('links found in the path: ' + actualPath);
              for(let i = 0; i < allLinks[0].length; i ++){
                console.log('Link: ' + allLinks[0][i] + ', to: ' + allLinks[1][i]);
              }
            } else if (process.argv[3] === '--validate') {
              validate(allLinks);
            } else if (process.argv[3] === '--stats') {
              stats(allLinks);
            } else if (process.argv[3] === '--validate--stats') {
              stats(allLinks);
              validateStats(allLinks)
            }
          });
        });
      })
    } else if(userPath.extname === '.md'){
      toRead(userPath);
    }
  }
}
console.log(directoryLook());
