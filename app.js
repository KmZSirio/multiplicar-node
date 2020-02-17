const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log("Comando no reconocido");
        break;
}















// 3 TIPOS DE REQUIRE
// Ya incluidos en node
// const fs = require('fs');

// No nativos de node, expansiones de otras personas
// const fs = require('express');

// Archivos escritos por nosotros
// const fs = require('fs');