const fs = require('fs');
const path = require('path');
const md = require('markdown-it')();
const mila = require('markdown-it-link-attributes');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = findLinks = () => {
    if (process.argv.length <= 2) {
        console.log("Necesitas ingresar la ruta de un archivo con extensión md");
        process.exit(-1);
      }

      const userPath = path.resolve(process.argv[2]);
      fs.readFile(`${userPath}`, 'utf8', (err, data) => {
          if(err) throw err;
        //   const link = data.match(/^https?:\/\//);
        //   return link;
         const renderedReadme =  md.render(data); // convierte el readme a html
        //  console.log(renderedReadme); 
        //  const links = md.use(mila, [{
        //     pattern: /^https?:\/\//,
        //     attrs: {
        //       class: 'external-link'
        //     }
        //   }])
        totalLinks = [];
          const obj = new JSDOM(renderedReadme).window.document.getElementsByTagName("a");
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const link = totalLinks.push(obj[key].getAttribute("href"));
                const linkName = obj[key].textContent;
                console.log('link ' + key + ' ' + linkName + ': ' + link);
            }
        }
        console.log(totalLinks);
        //    console.log(dom.window.document.querySelector("a")); // "Hello world"
        //   return links;
    })
}

console.log(findLinks());