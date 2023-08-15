class PersonaNatural {
    
    static _conteo = 0;
    static get conteo() {
        return PersonaNatural._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.debug(`🚀 ~  'hola a todos soy un mensaje estático'  `  );
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin Nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        PersonaNatural._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es: ${this.comida}`;
    }

    quienSoy(){
        console.debug(`Soy ${this.nombre} y mi identidad es ${this.codigo}`, );
    }

    miFrase(){
        this.quienSoy();
        console.debug(`${ this.codigo} diceeeee: ${this.frase}`, );
    }

}

const spiderman = new PersonaNatural( 'Juan Pablo', 1041324011, 'Maria llame a don Hector' );
const iroman = new PersonaNatural( 'Tony Stark', 'Iroman', 'Yo soy iroman' );
const iroman2 = new PersonaNatural( 'Tony Stark', 'Iroman 2', 'Yo soy iroman2' );

console.debug(`🚀 ~ spiderman`, spiderman);
console.debug(`🚀 ~ iroman`, iroman);

// iroman.miFrase();
iroman.setComidaFavorita = 'Helado de chocolate';

// console.debug(`🚀 ~ iroman`, iroman.getComidaFavorita)

// PersonaNatural._conteo = 2;
console.log(`conteo estatico `, PersonaNatural._conteo);

PersonaNatural.mensaje()
