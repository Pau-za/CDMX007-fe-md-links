// este programa busca un programa que dado un directorio imprime una lista de archivos filtrados por la extensión
const fs = require('fs');
const pathE = require('path');

// cuando el usuario no introduce la ruta de la carpeta que quiere buscar
module.exports = program = () => {
  console.log(process.argv.length);
  if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
  }

  const path = process.argv[2]; //define la ruta de la carpeta que proporciona el usuario para buscar
  fs.readdir(path, (err, items) => {
    console.log(path);
    if (err) throw err;
    console.log(items);

    for (var i = 0; i < items.length; i++) {
      const ext = pathE.extname(items[i]);
      console.log(ext);

      //   console.log(items[i]);
      if (ext === 'md') {
          console.log(ext);
        // fs.readFile lee un documento de forma asícrona de acuerdo a la ruta, url que le pases :D
    //     fs.readFile(`${ext}`, 'utf8', (err, data) => {
    //       //utf8 le pide que retorne el contenido del documento (data) como un string 
    //       if (err) throw err;
    //       console.log(data);
    //     });
      }
    }
  });
}

console.log(program());
