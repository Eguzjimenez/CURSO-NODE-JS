const os = require('node:os')

console.log('Informacion del sistema operativo')
console.log('_________________________________')
console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema opereatvi', os.release())
console.log('Arquitectura', os.arch())
console.log("CPUS", os.cpus()) // <-- vamos a poder escalar procesoso en Node.js
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)