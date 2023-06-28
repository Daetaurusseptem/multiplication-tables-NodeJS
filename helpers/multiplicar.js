const fs = require('fs');


const { resolve } = require('path');

const colors = require('colors');



const createFile = (base = 5, lim = 10, listar = false) => {


    return new Promise((resolve, reject) => {

        try {
            generateFile(base, lim, listar)

            if(lim!=10){
                resolve(`tabla del-${base}-limite-${lim}.txt CREADO`.bgGreen)

            }
            resolve(`tabla del-${base}.txt CREADO`.bgGreen)

        } catch (error) {
            reject(`tabla del-${base}.txt NO PUDO SER CREADA`)
        }

    })



}



const generateFile = async (base, lim, listarTabla) => {
    const {tablaPrintFormatted, salida} = CrearTabla(base, lim);


    if (listarTabla) {
        console.log('==========================='.rainbow);
        console.log(`TABLA DEL ${base}`.rainbow);
        console.log('==========================='.rainbow);
        console.log(tablaPrintFormatted);
    }

    try {
        if(lim!=10){
            fs.writeFileSync(`tabla del-${base}-limite-${lim}.txt`, salida, (err) => {
                if (err) throw `Hubo un error`;
                else{

                    return "File created successfully";
                }
                
            })
        }
        fs.writeFileSync(`./salida/tabla del-${base}.txt`, salida, (err) => {
            if (err) throw `Hubo un error`;
            
            else{
    
                return "File created successfully";
            }
            
            
        })
        
    } catch (error) {
        throw `Hubo un error`;
    }




}



const CrearTabla = (base, lim) => {

    var tablaPrintFormatted = ''
    var salida = ''

    salida+=`=====================
                Tabla Base: ${base}
    
    `
    for (let index = 1; index <= lim; index++) {
        if (index >= 10) {
            tablaPrintFormatted += `${base}`.green+` X`.red+` ${index}:`.green + ` ${(index) * base}\n`.blue.bold;
            salida += `${base} X ${index}: ${(index) * base}\n`;
        } else {
            tablaPrintFormatted += `${base}`.green+` X`.red+` ${index}:`.green + `  ${(index) * base}\n`.blue.bold;
            salida += `${base} X ${index}:  ${(index) * base}\n`;
        }
    }
    return {salida, tablaPrintFormatted}
}

module.exports = {
    createFile
}


