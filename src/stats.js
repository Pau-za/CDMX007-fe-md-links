module.exports = stats = (allLinks) => {
  console.log('stats result:');
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
  console.log('Total links: ' + total);
  console.log('Unique links: ' + unique);
}
