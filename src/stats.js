module.exports = stats = (allLinks) => {
  let total = 0;

  let repeated = 0;
  let unique = 0;
   for (let i = 0; i < allLinks[0].length; i++) {
    total ++;
    for (let j = i+1; j < allLinks[0].length; j++) {
      // console.log();
      if (allLinks[0][i] === allLinks[0][j]) {
        repeated ++;
        // console.log(allLinks[0][i]);
        // return;
      }

    }
  }
  // console.log(notRepeated);
  unique = total - repeated;
  console.log('Total links: ' + total);
  console.log('Unique links: ' + unique);
  //   console.log('Repeated links: ' + repeated);
}
