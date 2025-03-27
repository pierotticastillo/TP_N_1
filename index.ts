// Para su ejecución se puede realizar con el comando "tsc index.ts" y luego "node index.js"
// O ejecutandolo con el comando tsx index.ts o tsx watch index.ts

// 1. Crear una interfaz “Animal” con un atributo “nombre” y un método “gritar”.
interface Animal {
  nombre: string;
  gritar(): string;
}

// 2. Crear las clases “Perro”, “Gato”, y “Vaca” que implementen la interfaz “Animal”.
class Perro implements Animal {
  constructor(public nombre: string) {}
  gritar(): string {
    return "Guau";
  }
}

class Gato implements Animal {
  constructor(public nombre: string) {}
  gritar(): string {
    return "Miau";
  }
}

class Vaca implements Animal {
  constructor(public nombre: string) {}
  gritar(): string {
    return "Muu";
  }
}

// 3. Crear la función “describirAnimal” que imprima el nombre y el sonido del animal.
function describirAnimal(animal: Animal): string {
  return `El animal ${animal.nombre} hace ${animal.gritar()}`;
}

// 4. Crear las constantes con instancias de cada animal.
const perro: Perro = new Perro("Firulais");
const gato: Gato = new Gato("Garfield");
const vaca: Vaca = new Vaca("Bess");

// 5. Ejecutar la función “describirAnimal” con cada constante.
console.log("Descripción de los animales:");
console.log(describirAnimal(perro));
console.log(describirAnimal(gato));
console.log(describirAnimal(vaca));

// 6. Crear un Enum “DiasSemana” con los días de la semana.
enum DiasSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miércoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sabado = "Sábado",
  Domingo = "Domingo",
}

// 7. Crear una variable que pueda contener número o string, asignarle "Messi" y luego 10.
let variable: number | string = "Messi";
variable = 10;

// 8. Crear una clase genérica que implemente la interfaz “Fila<T>”.
interface Fila<T> {
  agregar(elemento: T): void;
  remover(): T | undefined;
}

class FilaGenerica<T> implements Fila<T> {
  private elementos: T[] = [];
  agregar(elemento: T): void {
    this.elementos.push(elemento);
  }
  remover(): T | undefined {
    return this.elementos.shift();
  }

  mostrarElementos(): void {
    console.log(this.elementos);
  }
}

// 9. Crear una fila para números, una para strings y otra para animales.
const filaNumeros = new FilaGenerica<number>();
const filaStrings = new FilaGenerica<string>();
const filaAnimales = new FilaGenerica<Animal>();

// 10. Agregar elementos a cada fila y remover uno.
filaNumeros.agregar(1);
filaNumeros.agregar(2);
filaNumeros.agregar(3);
filaStrings.agregar("Hola");
filaStrings.agregar("Mundo");
filaStrings.agregar("Programadores");
filaAnimales.agregar(perro);
filaAnimales.agregar(gato);
filaAnimales.agregar(vaca);

console.log("Filas antes de remover elementos:");
filaNumeros.mostrarElementos();
filaStrings.mostrarElementos();
filaAnimales.mostrarElementos();

// Remover un elemento de cada fila.
filaNumeros.remover();
filaStrings.remover();
filaAnimales.remover();

console.log("Filas después de remover elementos:");
filaNumeros.mostrarElementos();
filaStrings.mostrarElementos();
filaAnimales.mostrarElementos();