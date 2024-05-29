const path   = require('node:path')
const { fileURLToPath } = require('node:url')

// --> unuix /
// -- windows \


// barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/Desktop/CURSO-NODE-JS/archivo.txt')
console.log(base)

const fileName = path.basename('/Desktop/CURSO-NODE-JS/archivo.txt', '.txt')
console.log(fileName)

const extension = path.extname('archivo.txt')
console.log(extension)

const secondExtension = path.extname('my.super.archivo.txt')
console.log(secondExtension)