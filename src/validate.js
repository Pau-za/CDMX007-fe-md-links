const https = require('https');
const http = require('http');
const chalk = require('chalk');
const emoji = require('node-emoji');
const console = require('console');


module.exports =
  validate = (allLinks) => {
    console.log(chalk.redBright('--validate results:'))
    for (let i = 0; i < allLinks[0].length; i++) {
      if (allLinks[0][i].includes("https")) {
        https.get(allLinks[0][i], (res) => {
          if (res.statusCode !== 404) {
            console.log(emoji.emojify(chalk.red('Result: OK :heavy_check_mark: Response:  ') + chalk.cyan(res.statusCode) + chalk.yellowBright('. Link to: ') + chalk.bold.gray(allLinks[1][i]) + chalk.yellowBright(',  url: ') + chalk.magenta(allLinks[0][i])));
            return "this is an OK link";
          } else {
            console.log(emoji.emojify(chalk.white('Result: FAIL :heavy_multiplication_x: Response:  ') + chalk.magentaBright(res.statusCode) + chalk.yellowBright('. Link to: ') + chalk.grey(allLinks[1][i]) + chalk.yellowBright(',  url: ') + chalk.blueBright(allLinks[0][i])));
            return "This is a broken link";
          }
        })
      } else {
        http.get(allLinks[0][i], (res) => {
          if (res.statusCode !== 404) {
            console.log(emoji.emojify(chalk.red('Result: OK :heavy_check_mark: Response:  ') + chalk.cyan(res.statusCode) + chalk.yellowBright('. Link to: ') + chalk.bold.gray(allLinks[1][i]) + chalk.yellowBright(',  url: ') + chalk.magenta(allLinks[0][i])));
            return allLinks[0][i];
          } else {
            console.log(emoji.emojify(chalk.white('Result: FAIL :heavy_multiplication_x: Response:  ') + chalk.magentaBright(res.statusCode) + chalk.yellowBright('. Link to: ') + chalk.grey(allLinks[1][i]) + chalk.yellowBright(',  url: ') + chalk.blueBright(allLinks[0][i])));
            return allLinks[0][i];
          }
        })
      }
    }
  }
 