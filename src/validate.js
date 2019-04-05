const https = require('https');
const http = require('http');

module.exports =
  validate = (allLinks) => {
    console.log('validate results:')
    for (let i = 0; i < allLinks[0].length; i++) {
      if (allLinks[0][i].includes("https")) {
        // console.log(allLinks[1][i])
        https.get(allLinks[0][i], (res) => {
          if (res.statusCode !== 404) {
            console.log('Result: OK. Response:  ' + res.statusCode + '. Link to: ' + allLinks[1][i] + ',  url: ' + allLinks[0][i]);
          } else {
            console.log('Result: FAIL. Response:  ' + res.statusCode + '. Link to: ' + allLinks[1][i] + ',   url: ' + allLinks[0][i]);
          }
        })
      } else {
        http.get(allLinks[0][i], (res) => {
          if (res.statusCode !== 404) {
            console.log('Result: OK. Response:  ' + res.statusCode + '. Link to: ' + allLinks[1][i] + ',  url: ' + allLinks[0][i]);
          } else {
            console.log('Result: FAIL. Response:  ' + res.statusCode + '. Link to: ' + allLinks[1][i] + ',  url: ' + allLinks[0][i]);
          }
        })
      }
    }
  }
 