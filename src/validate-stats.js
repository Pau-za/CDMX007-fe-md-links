const https = require('https');
const http = require('http');

module.exports =
  validateStats = (allLinks) => {
    // console.log('validate stats:')
    let failLinks = 0;
    for (let i = 0; i < allLinks[0].length; i++) {
      if (allLinks[0][i].includes("https")) {
        https.get(allLinks[0][i], (res) => {
          if (res.statusCode === 404) {
            // console.log(allLinks[0][i]);
            failLinks++;
          }
        })
      } else {
        http.get(allLinks[0][i], (res) => {
          if (res.statusCode !== 404) {
            failLinks += 1;
          }
        })
      }
    }
    console.log('Failed Links: ' + failLinks)
  }
