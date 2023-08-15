// Que es un singleton: en pocas palabras es una instancia única de mi clase
class Singleton {
    static instancia; // por defecto es undefined
    nombre = '';

    constructor(nombre = ''){
        
        if ( !!Singleton.instancia) {
          return Singleton.instancia;  
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        // return this; esto aunque no se pone, es lo que hace un constructor de una clase, retornar el this;
    }

}

const instancia1 = new Singleton('Juan Pablo');
const instancia2 = new Singleton('Omar');
const instancia3 = new Singleton('Paola');



console.debug(`El nombre en la instancia 1 es: ${instancia1.nombre} `);
console.debug(`El nombre en la instancia 2 es: ${instancia2.nombre} `);
console.debug(`El nombre en la instancia 3 es: ${instancia3.nombre} `);

