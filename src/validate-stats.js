const https = require('https');
const http = require('http');
const chalk = require('chalk');
let failLinks = 0;

module.exports =
validateStats = async (allLinks) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < allLinks[0].length; i++) {
        if (allLinks[0][i].includes("https")) {
          https.get(allLinks[0][i], (res) => {
            if(res.statusMessage !== 'OK' || res.statusMessage === ''){
              console.log(res.statusMessage);
              failLinks++;
              // resolve(failLinks);
            }
          })
        } else {
          http.get(allLinks[0][i], (res) => {
            if (res.statusMessage !== 'OK') {
              // console.log(failLinks)
              failLinks ++;
            }
          })
        }
      }
      console.log(chalk.magenta('Failed Links: ') + chalk.cyanBright(failLinks));
      console.log(failLinks)
      // reject('Ocurrio un problema')
    })
  }


  // const response = await validateStats();
  // console.log(response);
// console.log(await validateStats());