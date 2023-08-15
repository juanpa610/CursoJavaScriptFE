class Rectangulo {
    
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
        this.#calcularArea();
    }

    #calcularArea(){
        console.debug(`🚀 ~ this.#area`, this.#area * 2)
    }
}


const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 100;


console.debug(`🚀 ~ rectangulo`, rectangulo);
