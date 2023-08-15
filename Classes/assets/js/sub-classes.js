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

class Heroe extends PersonaNatural {
  
    clan = 'sin cla';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);  //<---- hace el llamado al constructor de la class PersonaNatural
        this.clan = 'Los Avengers';
    }

    quienSoy(){
        console.debug(`Soy ${this.nombre} y mi identidad es ${this.clan}` );
        super.quienSoy();
    }

}


const iroman = new Heroe('Juan', 'Spiderman', 'Soy juan Pablo');
 iroman.quienSoy()
