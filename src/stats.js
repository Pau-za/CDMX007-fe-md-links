const chalk = require('chalk');

module.exports = stats = (allLinks) => {
  // console.log(chalk.green('--stats result:'));
  let total = 0;
  let repeated = 0;
  let unique = 0;
   for (let i = 0; i < allLinks[0].length; i++) {
    total ++;
    for (let j = i+1; j < allLinks[0].length; j++) {
      if (allLinks[0][i] === allLinks[0][j]) {
        repeated ++;
      }
    }
  }
  unique = total - repeated;
  console.log(chalk.redBright('Total links: ') + chalk.cyanBright(total));
  console.log(chalk.yellowBright('Unique links: ') + chalk.cyanBright(unique));
  return total;
}
