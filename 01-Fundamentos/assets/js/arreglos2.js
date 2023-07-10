let juegos = ['Zelda', 'Mario', 'Metroid','Chrono'];
console.debug("💎🤑 ~ Largo :", juegos.length);


let primero = juegos[0];
let ultimo = juegos[ juegos.length-1 ];


console.log({primero, segundo: ultimo})

juegos.forEach( (elemnto, i, arr) => {
    console.log({elemnto, i, arr})
});
 
let nuevaLongitud = juegos.push( 'F-Zero'  );
console.debug("💎🤑 ~ nuevaLongitud1 :", {nuevaLongitud, juegos});


nuevaLongitud = juegos.unshift( 'GTA-V' );
console.debug("💎🤑 ~ nuevaLongitud2 :", {nuevaLongitud, juegos});


let elementoEliminado = juegos.pop();
console.debug("💎🤑 ~ elementoEliminado1 :", {elementoEliminado, juegos});


console.debug(juegos);


let pos = 1;

elementoEliminado = juegos.splice(pos , 3);

console.debug("💎🤑 ~ elementoEliminado2 :", {elementoEliminado, juegos});


console.debug(juegos);

console.debug("💎🤑 ~ elementoEliminado2 :",  juegos.indexOf('Chrono')); // CaSeSeNsItIv

//TODO: Referencia