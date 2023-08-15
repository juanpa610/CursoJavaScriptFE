class Persona {

    static porObjeto( { nombre, apellido, pais  }) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.debug(`💎🤑Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }

}

const nombre1   = 'Melisa',
      apellido1 = 'Garcia',
      pais1     = 'España';


const juan = {
    nombre: 'Juan Pablo',
    apellido: 'Jaramillo',
    pais: 'Colombia'
}

// el new es para crear una nueva instancia de la clase 
const persona1 = new Persona(nombre1, apellido1, pais1);

// como para este es un  metodo no lleva la palabra new
const persona2 = Persona.porObjeto(juan);


persona1.getInfo();
persona2.getInfo();
