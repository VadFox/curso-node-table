const { type } = require('os');
const { demandOption } = require('yargs');
const {CrearArchivo} = require('./Helpers/multiplicar');
const argv = require("./Config/yargs");
console.clear();

console.log(argv);

const archivoCreado = async (base, listar, hasta)=> {


    try {
       return await CrearArchivo(base, listar, hasta);
               
    } catch (error) {
        throw error
    }
    
}

archivoCreado(argv.base, argv.listar, argv.hasta)
    .then( msg => console.log(msg, "creado"))
    .catch( err => console.log (err))