const https = require('https');
const http = require('http');

module.exports =
  validate = (links) => {
    links.forEach(element => {
      if (element.includes("https")) {
        https.get(`${element}`, (res) => {
            if(res.statusCode === 404){
                console.log(element + ' página no encontrada')
            } else {
                console.log(element + ' página activa')
            }
        //   console.log('statusCode:', res.statusCode);
        //   console.log('headers:', res.headers);

        //   res.on('data', (d) => {
        //     process.stdout.write(d);
        //   });

        }).on('error', (e) => {
          console.error(e);
        })
        // console.log(element);
        // return
    //   } else {
    //     http.get(`${element}`, (res) => {
    //       const {
    //         statusCode
    //       } = res;
    //       const contentType = res.headers['content-type'];

    //       let error;
    //       if (statusCode !== 200) {
    //         error = new Error('Request Failed.\n' +
    //           `Status Code: ${statusCode}`);
    //       } else if (!/^application\/json/.test(contentType)) {
    //         error = new Error('Invalid content-type.\n' +
    //           `Expected application/json but received ${contentType}`);
    //       }
    //       if (error) {
    //         console.error(error.message);
    //         // Consume response data to free up memory
    //         res.resume();
    //         return;
    //       }

    //       res.setEncoding('utf8');
    //       let rawData = '';
    //       res.on('data', (chunk) => {
    //         rawData += chunk;
    //       });
    //       res.on('end', () => {
    //         try {
    //           const parsedData = JSON.parse(rawData);
    //           console.log(parsedData);
    //         } catch (e) {
    //           console.error(e.message);
    //         }
    //       });
    //     }).on('error', (e) => {
    //       console.error(`Got error: ${e.message}`);
    //     });
      }
    });
  };
