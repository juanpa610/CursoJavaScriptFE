let perosonaje = {
    nombre: 'juan',
    codeName: 'Iroman',
    vivo : true,
    edad : 40,
    coords :{
        lat: 65328942,
        long: -75688954
    },
    trajes: ['Mark I', 'Mark V', ' Hlofwy'],
    direccion: {
        zip : '1080 90265',
        ubicacion : 'Malibu, California'
    },
    'ultima-pelicula' : 'Infinty War'
};


console.log(  {perosonaje}  );
console.log( 'Nombre', perosonaje.nombre );
console.log( 'Nombre', perosonaje['nombre'] );
console.log( 'Edad', perosonaje.edad );


console.log( 'Coors', perosonaje.coords );
console.log( 'LAT', perosonaje.coords.lat );


console.log('No. ', perosonaje.trajes.length );
console.log('Ultimo traje', perosonaje.trajes[perosonaje.trajes.length -1]);


const x = 'vivo';
console.log('Vivo', perosonaje[x]);


console.log('Ultima pelicula', perosonaje['ultima-pelicula']);

// Más detalles

delete perosonaje.edad;
console.log({perosonaje});

perosonaje.casado = true;


const entriesPares  = Object.entries( perosonaje );
console.debug("💎🤑 ~ entriesPares :", entriesPares);


//Bloqueo  de un Object, solo alica a las propiedades directas no bloquea los objetcs directos 


Object.freeze( perosonaje );


// Object.freeze( perosonaje.direccion );


// No funcinan por el Object.freeze( perosonaje );
    delete perosonaje.nombre;
    perosonaje.dinero = 100000;
    perosonaje.direccion.ubicacion = 'Costa rica';
// ---------------------------------------------


console.debug("💎🤑 ~ perosonaje :", perosonaje);


const propiedades  = Object.getOwnPropertyNames( perosonaje );
const valores  = Object.values( perosonaje );
console.debug("💎🤑 ~ propiedades :", propiedades);
console.debug("💎🤑 ~ valores :", valores);



