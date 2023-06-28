

const {createFile} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();


//=======================FORMA SI YARGS PARA OBETENER ARGV=========================

// const [,,arg3='base=5' ]  = process.argv

// const [ , base] = arg3.split('=')

//================================================





const {listar, base, lim} = argv


createFile(base, lim, listar)
    .then((result) => {
        console.log(result);
       
    }).catch((err) => {
        console.log(err);
    });