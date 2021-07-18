// const { pausa } = require('./helper/mensajes');

require( 'colors' );

const { guardarDB } = require('./helper/guardarArchivo');
const { inquirerMenu, 
        pausa,
        leerInput
    } = require('./helper/inquirer');
const Tareas = require('./models/tareas');

const main = async() =>{

    let opt = '';
    const tareas = new Tareas();

    do {
        //Imprimir el menú
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
               // crear opcion
               const desc = await leerInput('Descripcion:');
               console.log(desc);
               tareas.crearTarea( desc );
                
            break;
        
            case '2':
                console.log( tareas.listadoArr );
            break;    
        }

        guardarDB( tareas.listadoArr );
        
        await pausa();
    
    } while( opt !== '0' );
   

    
    // pausa();


}

main();