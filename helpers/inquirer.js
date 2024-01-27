const inquirer = require('inquirer');
require('colors');

const preguntas =[
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer ?',
        choices: [
            {
                value: '1',
                name: `${'1'.green}. Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tarea`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tarea Completada`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tarea Pendiente`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir de la aplicacion`
            },
        ]
    }
];

const inquirerMenu = async()=>{
    console.log(`====================================`.green);
    console.log(`        Selecione una opcion        `.green);
    console.log(`====================================\n`.green);
    
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
};

const pausa = async () =>{
    const quetion = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${'ENTER'.green} para continuar\n`,
           
        }
]
    await inquirer.prompt(quetion);
    
    
};

const leerInput = async(message)=>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0 ){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    const {desc}  = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async(tareas = [])=>{
    const choices = tareas.map ((tarea, i) =>{
        const idx = `${i+1}.`.green;
        return {
            value: tarea.id,
            name:  `${idx} ${tarea.desc}`
        }
    })
    const preguntas = {
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
    }
    choices.unshift({
        value: '0',
        name: '0.'.green + ' CANCELAR'
    })
    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const confimar = async (message) =>{
    const pregunta = {
        type: 'confirm',
        name: 'ok',
        message
    }
    
    const {ok} = await inquirer.prompt(pregunta);
    return ok;
}

const mostrarListadoCheckList = async(tareas = [])=>{
    const choices = tareas.map ((tarea, i) =>{
        const idx = `${i+1}.`.green;
        return {
            value: tarea.id,
            name:  `${idx} ${tarea.desc}`,
            checked: (tarea.completado) ? true: false,
        }
    })
    const preguntas = {
        type: 'checkbox',
        name: 'ids',
        message: 'Selecciones',
        choices
    }
   
    const {ids} = await inquirer.prompt(preguntas);
    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confimar,
    mostrarListadoCheckList
}