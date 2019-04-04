const https = require('https');
const http = require('http');

module.exports =
  validate = (allLinks) => {
    for (let i = 0; i < allLinks[0].length; i++) {
      if (allLinks[0][i].includes("https")) {
        // console.log(allLinks[1][i])
        https.get(allLinks[0][i], (res) => {
          if (res.statusCode !== 404) {
            console.log('Resultado: OK. Respuesta: ' + res.statusCode + ' Link a: ' + allLinks[1][i] + ' URL: ' + allLinks[0][i]);
          } else {
            console.log('Resultado: FAIL. Respuesta: ' + res.statusCode + ' Link a: ' + allLinks[1][i] + ' URL: ' + allLinks[0][i]);
          }
        })
      } else {
        http.get(allLinks[0][i], (res) => {
          if (res.statusCode !== 404) {
            console.log('Resultado: OK. Respuesta: ' + res.statusCode + ' Link a: ' + allLinks[1][i] + ' URL: ' + allLinks[0][i]);
          } else {
            console.log('Resultado: FAIL. Respuesta: ' + res.statusCode + ' Link a: ' + allLinks[1][i] + ' URL: ' + allLinks[0][i]);
          }
        })
      }
    }
  }

  module.exports = stats = () => {
    
  }
