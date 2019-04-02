//voy a crear este módulo en caso de que el usuario quiera encontrar el archivo (con extensión .md) para leerlo
const fs = require('fs');
const path = require('path');

// cuando el usuario no introduce la ruta de la carpeta que quiere buscar
module.exports = findFile = () => {
  //   console.log(process.argv.length);
  if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
  }

  const userPath = path.resolve(process.argv[2]); //define la ruta de la carpeta que proporciona el usuario para buscar
  fs.readdir(userPath, (err, items) => {
    // console.log(path);
    if (err) throw err;
    // console.log(items);

    let total = 0;
    for (var i = 0; i < items.length; i++) {
      //   console.log(items[i]);
      const ext = path.extname(items[i]);
        // console.log(ext);

      if (ext === '.md') {
        console.log(items[i]);
        total++;
      }
    }
    console.log('Hay ' + total + ' archivos con la extención ".md"');
  });
}

console.log(findFile());
