const https = require('https');
const http = require('http');
const chalk = require('chalk');

module.exports =
  validateStats = (allLinks) => {
    let failLinks = 0;
    for (let i = 0; i < allLinks[0].length; i++) {
      if (allLinks[0][i].includes("https")) {
        const checkStatus =  https.get(allLinks[0][i])
          if(checkStatus.statusCode === 404){
            failLinks++
          }
      } else {
        http.get(allLinks[0][i], (res) => {
          if (res.statusCode === 404) {
             failLinks ++;
          }
        })
      }
    }
    console.log(chalk.magenta('Failed Links: ') + chalk.cyanBright(failLinks));
    return failLinks;
  }
