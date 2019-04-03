module.exports = stats = (allLinks) => {
  let total = 0;

  let repeated = 0;
  let unique = 0;
  let notRepeated = 0;
  for (let i = 0; i < allLinks[0].length; i++) {
    total += 1;
    for (let j = 1; j < allLinks[0].length; j++) {
      // console.log();
      if (allLinks[0][i] !== allLinks[0][j]) {
        notRepeated += 1;
        unique = notRepeated / (allLinks[0].length-2)
      }

    }
  }
  console.log(notRepeated);
  console.log('Total links: ' + total);
  console.log('Unique links: ' + unique);
  //   console.log('Repeated links: ' + repeated);
}
