
function saludar( nombre   ){
    // console.debug(arguments);
    // console.log(`Hola ${nombre}`);
    return [1, 2 ,3 ,4 ,5 ] ;

    // Esto nunca se ejecutara
    console.log('Soy un codigo que esta despues del return ');
}

const saludar2 = function ( nombre ){
    console.log(`Hola ${nombre}`);
}


const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 =    (nombre)    =>    {
    console.debug("💎🤑 ~ nombre :", nombre);
}


let retornoSaludar = saludar('Juan', 40, true , 'Costa rica');
// console.debug("💎🤑 ~ retornoSaludar :", retornoSaludar)
// saludar2('Juan');


// saludarFlecha();
// saludarFlecha2('Omar');


function sumar( a,b){
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// }


const sumar2 = (a, b) =>  a + b;


function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () =>  Math.random();


console.debug("💎🤑 ~ sumar :", getAleatorio2()  );

