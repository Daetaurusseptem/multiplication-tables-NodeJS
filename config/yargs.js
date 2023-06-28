const { number, options, boolean } = require('yargs');
const argv = require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                description:'Base de la  tabla de multiplicar'
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                description:'Listar tabla',
                default:false
            })
            .option('lim',{
                alias:'limite',
                type:'number',
                description:'limite de la tabla de multiplicar',
            })
            .check((argv, options)=>{
                if(isNaN(argv.b)){
                    throw `El valor base debe de ser un numero`
                }
                if(argv.lim && isNaN(argv.lim)){
                    throw `El valor limite debe de ser un numero`
                }
                return true
            })   

.argv;

module.exports = argv;