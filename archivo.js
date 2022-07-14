const logger = require('./logger/index')

let a = '10'
let b = 0.00005
// corrobora el tipo de dato almacenados en las variables a y b , en caso de no coincidir arroja un error
const msjError = () =>{

    if(typeof(a) == typeof(b)){   
        console.log('si es el mismo tipo')
    }else {
        throw('Error de tipo de dato')
    }
}

try {
    msjError()    
} catch (error) {
   logger.error(`Error:${error}`)
}


