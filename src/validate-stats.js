const https = require('https');
const http = require('http');
const chalk = require('chalk');

module.exports =
  validateStats = async (allLinks) => {
    // console.log('validate stats:')
    let failLinks = 0
    for (let i = 0; i < allLinks[0].length; i++) {
      if (allLinks[0][i].includes("https")) {
        const checkStatus = await https.get(allLinks[0][i])
          // , (res) => {
          if(checkStatus.statusCode === 404){
            failLinks++
            // console.log(err);
          }
          // if (res.statusCode === 404) {
          //   failLinks++;
          //   // console.log(allLinks);
          //   console.log(failLinks);
          // }
        // }).on('error', (e) => {
        //   console.error(e);
        // });
      } else {
        http.get(allLinks[0][i], (res) => {
          if (res.statusCode !== 404) {
             failLinks ++;
            //  console.log(failLinks);
          }
        }).on('error', (e) => {
          console.error(e);
        });
      }
    }
    console.log(chalk.magenta('Failed Links: ') + chalk.cyanBright(failLinks));
  }

  // setTimeout(validateStats(), 2000);