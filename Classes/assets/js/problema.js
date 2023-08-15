const fer  = {
    nombre : 'Juna Pablo',
    edad :19,
    imprimir(){
      console.log(`Mombre : ${this.nombre} - edad: ${this.edad}`)
    }
  }
  
  const pedro  = {
    nombre : 'Pedro',
    edad : 15,
    imprimir(){
      console.log(`Mombre : ${this.nombre} - edad: ${this.edad}`)
    }
  }
  
  fer.imprimir();
  pedro.imprimir();
  
  function Persona(nombre, edad){
    console.log('Se ejecutó esta línea ');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
      console.log(`Mombre : ${this.nombre} - edad: ${this.edad}`)
    }
  }
  
  const maria = new Persona('María', 18);
  const melissa = new Persona('Melissa', 35);
  maria.imprimir();
  melissa.imprimir();