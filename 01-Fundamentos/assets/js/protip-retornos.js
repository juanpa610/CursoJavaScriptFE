// function crearPersona( nombre , apellido ){
//     return { nombre ,  apellido}
// }

const crearPersona = ( nombre , apellido ) => ({nombre, apellido});

const persona1  = crearPersona('Fernando', 'Herrera'  );
console.log( persona1 );


function imprimeArgumentos() {
    console.log(arguments)
}


const imprimeArgumentos2 = ( edad,  ...args  ) => {
    // console.log( edad, casado, args );
    return args;
}

// imprimeArgumentos(10, true , false , 'JUAN');
let [ casado , vivo, nombre ] = imprimeArgumentos2(10, true , false , 'JUAN');
console.debug("💎🤑 ~ argumentos :",{ casado , vivo, nombre});





const {apellido: nuevoApellido}  = crearPersona('Fernando', 'Herrera'  );
console.debug("💎🤑 ~ persona2 :", {nuevoApellido});




let tony = {
    nombre: 'juan',
    codeName: 'Iroman',
    vivo : true,
    edad : 40,
    trajes: ['Mark I', 'Mark V', ' Hlofwy'],
    direccion: {
        zip : '1080 90265',
        ubicacion : 'Malibu, California'
    },
    'ultima-pelicula' : 'Infinty War'
};




// const imprimePropiedades  = (    personajes   ) => {
//     console.log( 'personajes.nombre ' ,    personajes.nombre);
//     console.log( 'personajes.codeName ' ,  personajes.codeName);
//     console.log( 'personajes.edad ' ,      personajes.edad);
//     console.log( 'personajes.trajes ' ,    personajes.trajes);
// }   


const imprimePropiedades  = (   {nombre, codeName, vivo , edad = 19 }   ) => {

    edad = edad || 0;
    console.log(  {nombre, codeName, vivo , edad }  )
}   

imprimePropiedades( tony );