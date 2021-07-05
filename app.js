// const { pausa } = require('./helper/mensajes');

const { inquirerMenu, pausa } = require('./helper/inquirer');

require( 'colors' );
console.clear();

const main = async() =>{

    console.log('Hola Mundo');

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({opt});
        
        await pausa();
    
    } while( opt !== '0' );
   

    
    // pausa();


}

main();