// este programa busca un programa que dado un directorio imprime una lista de archivos filtrados por la extensión
const fs = require('fs');
const path = require('path');

// cuando el usuario no introduce la ruta de la carpeta que quiere buscar
module.exports = program = () => {
  if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
  }

  const userPath = path.resolve(process.argv[2]);
  // fs.readFile lee un documento de forma asícrona de acuerdo a la ruta, url que le pases :D
  fs.readFile(`${userPath}`, 'utf8', (err, data) => {
    //utf8 le pide que retorne el contenido del documento (data) como un string 
    if (err) throw err;
    console.log(data);
  });
}

console.log(program());
