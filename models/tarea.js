const {v4} = require('uuid')
class Tarea {
    id = '';
    desc = '';
    completado = null;
    
    constructor(desc){
        this.desc = desc;
        this.id = v4();
    }
}


module.exports = Tarea;