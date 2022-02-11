const { describe } = require('yargs');

const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type:'number',
                demandOption:true,
                describe:"Base de la tabla de multiplicar"
            })
            .option('l',{
                alias: 'listar',
                type:'boolean',
                default: false,
                describe:"Mostrar en consola la tabla"
            })
            .option('h',{
                alias: 'hasta',
                type:'number',
                default: 10,
                describe:"Hasta que numero llega la tabla"
            })
            .check( (argv, options)=>{

                if (isNaN( argv.base, argv.hasta)){
                    throw 'La base tiene que ser un numero'
                }
                    return true;
            })
            .argv;
            

module.exports = argv;