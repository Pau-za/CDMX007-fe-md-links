const fs = require('fs');
const path = require('path');
const md = require('markdown-it')();
const mila = require('markdown-it-link-attributes');
const jsdom = require("jsdom");
const {
  JSDOM
} = jsdom;
const validate = require('./get-link');

module.exports = findLinks = () => {
  if (process.argv.length <= 2) {
    console.log("Necesitas ingresar la ruta de un archivo con extensión md");
    process.exit(-1);
  }

  const userPath = path.resolve(process.argv[2]);
  fs.readFile(`${userPath}`, 'utf8', (err, data) => {
    if (err) throw err;

    const renderedReadme = md.render(data); // convierte el readme a html

    let totalLinks = [];
    let totalNamesLinks = [];
    let linksInfo = [];
    const obj = new JSDOM(renderedReadme).window.document.getElementsByTagName("a");
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        totalLinks.push(obj[key].getAttribute("href"));
        const link = obj[key].getAttribute("href");
        const linkName = obj[key].textContent;
        totalNamesLinks.push(obj[key].textContent);
        linksInfo.push(`${'link a: ' + linkName + ', url: ' + link}`)
      }
    }
    validate(totalLinks);
    // console.log(linksInfo);

  })
}

console.log(findLinks());
