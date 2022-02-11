
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path/posix');


const CrearArchivo = (base, listar, hasta) => { 

   
    return new Promise ((resolve, reject) =>{
      
        let salida = "";

        for ( let i = 1 ; i <= hasta ;i ++) {
           salida += (`${base} x ${i} = ${base * i}\n` );
            

        }

        if (listar){
            console.log("========================")
            console.log(`    Tabla del:`, base   )
            console.log("========================")
            console.log(salida);
        } else{
            console.log("MAMALO FERNANDO");
        }


        if (salida){
            
            fs.writeFileSync( `./salida/table-${base}.txt`, salida)
            resolve(`table-${base}.txt`)
            
        } else {
            reject("ha ocurrido un error");
        }
        
    })    

}

module.exports = {
    CrearArchivo
    
}