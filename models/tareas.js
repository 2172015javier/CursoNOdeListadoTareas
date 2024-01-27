const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  borrarTareas (id = ''){
    if (this._listado[id]){
        delete this._listado[id];
    }
  }
  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }
  listadoCompleto() {
    // console.log();
    this.listadoArr.forEach((tares, indice) => {
      const idx = `${indice + 1}`.green;
      const { desc, completado } = tares;
      const extado = completado ? "Completado".green : "Completado".red;
      console.log(`${idx} ${desc} :: ${extado}`);
    });
  }
  listarPendienteCompletada(completadas = true) {
    let contador = 0;
    this.listadoArr.forEach((tares) => {
      const { desc, completado } = tares;
      const extado = completado ? "Completado".green : "Completado".red;
      if (completadas) {
        if (completado) {
          contador += 1;
          console.log(`${contador.toString().green + '.'.green} ${desc} :: ${extado}`);
           console.log(`Se completon en: ${completado}`.yellow);
          
        }
      } else {
        if (!completado) {
          contador += 1;
          console.log(`${contador.toString().green + '.'.green} ${desc} :: ${extado}`);
        }
      }
    });
  }
  togglesCompletado (ids = []){
    ids.forEach(id =>{
        const tarea = this._listado[id];
        if (!tarea.completado){
            tarea.completado = new Date().toISOString();
        }
    })
    this.listadoArr.forEach(tarea =>{
        if (!ids.includes(tarea.id)){
          this._listado[tarea.id].completado = null;
        }
    })
  }
}

module.exports = Tareas;
