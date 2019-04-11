#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const validate = require('./src/validate.js');
const stats = require('./src/stats.js');
const validateStats = require('./src/validate-stats.js');
// const toRead = require('./src/read-file.js');
const md = require('markdown-it')();
const chalk = require('chalk');
const jsdom = require("jsdom");
const console = require('console');
const {
  JSDOM
} = jsdom;

// cuando el usuario no introduce la ruta de la carpeta que quiere buscar
module.exports = mdLinks = () => {
  if (process.argv.length <= 2) {
    console.log(chalk.bold.gray("You need to give a directory path"));
    process.exit(-1);
    return "You need to give a directory path";
  } else {
    const userPath = path.resolve(process.argv[2]);
    if (userPath.extname === undefined) {
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
              // console.log(actualPath);
              pathArr.push(actualPath);
            }
          }
        }
        pathArr.forEach(newPath => {
          fs.readFile(newPath, 'utf8', (err, data) => {
            console.log('File:  ' + newPath);
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
              console.log(chalk.yellow('links found in the path: ') + chalk.magenta(actualPath));
              for(let i = 0; i < allLinks[0].length; i ++){
                console.log(chalk.cyan('Link: ') + chalk.green(allLinks[0][i]) + chalk.red(',  to: ') + chalk.green(allLinks[1][i]));
              }
              // console.log(allLinks);
            } else if (process.argv[3] === '--validate') {
              validate(allLinks);
            } else if (process.argv[3] === '--stats') {
              stats(allLinks);
            } else if (process.argv[3] === '--validate--stats') {
              stats(allLinks);
              validateStats(allLinks).then(resp => console.log(resp))
            }
          });
        });
      })
    // } else if(userPath.extname === '.md'){
    //   toRead(userPath);
    }
  }
}
console.log(mdLinks());