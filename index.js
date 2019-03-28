module.exports =
  sum = () => {
    let add = 0;
    for (let i = 2; i < process.argv.length; i++) {
      add += Number(process.argv[i]);
    }
    return add
  }

console.log(sum());

// console.log(Number(process.argv[2, 3]));


// console.log(sum(4, 5))
