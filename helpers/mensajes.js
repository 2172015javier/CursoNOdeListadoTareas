const { rejects } = require("assert");

require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tarea`);
    console.log(`${"3.".green} Listar tarea Completada`);
    console.log(`${"4.".green} Listar tarea Pendiente`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"1.".green} Salir\n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opcion\n", (opt) => {
      readline.close();
      resolve(opt)
    });
  });
};

const pausa = () => {
    return new Promise((resolve, reject) => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
          });
          readline.question(`\nPresione ${"ENTER".green} para continuar\n`, () => {
            input: process.stdin,

            readline.close();
            resolve();
          });
    });
 
};

module.exports = {
  mostrarMenu,
  pausa,
};
