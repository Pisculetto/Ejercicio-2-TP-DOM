let personas = [];

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }

  

}

function mayoriaEdad() {
  if (this.edad >= 18) {
    alert(`${this.nombre} es mayor de edad.`);
  }
}

function mostrarDatos() {
  alert(`
      
      Nombre: ${this.nombre}
      Edad: ${this.edad} años
      DNI: ${this.dni}
      Sexo: ${this.sexo}
      Peso: ${this.peso}
      Altura: ${this.altura}
      Año de nacimiento: ${this.nacimiento}
      
      `);
}

function mostrarGeneracion() {
  if (this.nacimiento >= 1930 && this.nacimiento <= 1948) {
    alert(
      `${this.nombre} pertecene a la generacion Silent Generation. Su rasgo caracteristico: Austeridad.`
    );
  }

  if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
    alert(
      `${this.nombre} pertenece a la generacion Baby boom. Su rasgo caracteristico: Ambicion.`
    );
  }
  if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
    alert(
      `${this.nombre} pertenece a la generacion X. Su rasgo caracteristico: Obsesion por el exito.`
    );
  }
  if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
    alert(
      `${this.nombre} pertenece a la generacion Y. Su rasgo caracteristico: Frustracion.`
    );
  }
  if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
    alert(
      `${this.nombre} pertenece a la generacion Z. Rasgo caracteristico: irreverencia.`
    );
  }
}

function crearPersona() {

  
  const persona = new Persona(
    
    nombre = document.getElementById('Fnombre').value,
    edad = document.querySelector("#Fedad").value,
    dni = document.querySelector("#Fdni").value,
    sexo = document.querySelector("#Fsexo").value,
    peso = document.querySelector("#Fpeso").value,
    altura = document.querySelector("#Faltura").value,
    nacimiento = document.querySelector("#Fnacimiento").value

  );

  personas.push(persona)
  console.log(persona);
  console.log(personas);
}
