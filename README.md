# Informe

# 1. ¿Qué es TypeScript y en qué se diferencia de JavaScript?
TypeScript es un superset tipado de JavaScript, desarrollado por Microsoft. Esto significa que cualquier código válido de JavaScript también es válido en TypeScript, pero TypeScript agrega nuevas características como tipado estático, interfaces, clases, herencia, modificadores de acceso y soporte avanzado para la POO.

- JavaScript: lenguaje dinámico, débilmente tipado, los errores se detectan en tiempo de ejecución.
- TypeScript: lenguaje estáticamente tipado, los errores se detectan en tiempo de compilación, antes de ejecutar el código.


# 2. ¿Qué ventajas ofrece TypeScript para trabajar con Programación Orientada a Objetos?
- Tipado estático: previene errores comunes antes de ejecutar el programa.
- Mejor autocompletado e IntelliSense en editores como VSCode.
- Clases, interfaces y modificadores de acceso que permiten implementar todos los pilares de POO.
- Código más mantenible y escalable en proyectos grandes.
- Se compila a JavaScript, por lo que es compatible con navegadores y Node.js.


# 3. ¿Qué son los modificadores de acceso (public, private, protected)? Ejemplos
- public: accesible desde cualquier parte (por defecto).
- private: accesible solo dentro de la clase.
- protected: accesible dentro de la clase y sus subclases.

ts
class Persona {
  public nombre: string;
  private edad: number;
  protected dni: string;

  constructor(nombre: string, edad: number, dni: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
  }
}


# 4. ¿Qué es un readonly y para qué se usa?
La palabra clave readonly permite definir propiedades que solo se asignan en el constructor y no pueden cambiar durante la ejecución, es utilizada para declarar variables o propiedades que solo pueden asignarse una vez (en la declaración o en el constructor) y luego no se pueden modificar.

Se usa para
-Proteger datos de cambios accidentales.
-Crear objetos con propiedades inmutables.
-Mejorar la seguridad y coherencia del código.


# 5. ¿Cómo se definen clases y objetos en TypeScript?
ts
class Animal {
  especie: string;

  constructor(especie: string) {
    this.especie = especie;
  }

  hacerSonido() {
    console.log("Sonido genérico");
  }
}

const perro = new Animal("Perro");
perro.hacerSonido();


# 6. ¿Qué son los constructores y para qué sirven?
Un constructor es un método especial que se ejecuta al instanciar una clase, inicializando sus propiedades.

Sirve para
-Inicializar las propiedades del objeto.
-Asegurar que un objeto empiece con valores válidos.
-Simplificar la creación de instancias con datos personalizados.


# 7. ¿Qué es la herencia en TS y cómo se implementa (extends / super)?
La herencia permite crear nuevas clases basadas en clases existentes. Se implementa con extends y se llama al constructor padre con super().

ts
class Animal {
  constructor(public nombre: string) {}
  hacerSonido() {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("Ladrido");
  }
}

const miPerro = new Perro("Firulais");
miPerro.hacerSonido(); // "Ladrido"


# 8. ¿Qué significa polimorfismo en el contexto de TS?
El polimorfismo es la capacidad de que un mismo método se comporte de forma distinta en diferentes clases (sobrescritura de métodos).

ts
class Figura {
  area(): number {
    return 0;
  }
}

class Cuadrado extends Figura {
  constructor(private lado: number) {
    super();
  }
  area(): number {
    return this.lado * this.lado;
  }
}

const figuras: Figura[] = [new Figura(), new Cuadrado(5)];
figuras.forEach(f => console.log(f.area()));


# 9. ¿Qué son las clases abstractas y qué diferencia tienen con una clase normal?
- Una clase abstracta no se puede instanciar directamente.
- Puede contener métodos definidos y métodos abstractos (que deben implementarse en las subclases).
- Una clase normal sí puede instanciarse.

ts
abstract class Vehiculo {
  abstract moverse(): void;
}

class Auto extends Vehiculo {
  moverse(): void {
    console.log("El auto se mueve");
  }
}


# 10. ¿Qué es una interface en TS y en qué se diferencia de una clase abstracta?
Una interface define la forma (contrato) de un objeto, pero no tiene implementación.
Una clase abstracta sí puede contener lógica parcial.

ts
interface Persona {
  nombre: string;
  hablar(): void;
}

class Estudiante implements Persona {
  constructor(public nombre: string) {}
  hablar(): void {
    console.log("Hola, soy " + this.nombre);
  }
}


# 11. Ejemplo mínimo de cada pilar de POO en TS
- Encapsulación: usar private, protected o getters/setters.
- Herencia: clases hijas con extends.
- Polimorfismo: sobrescribir métodos en subclases.
- Abstracción: usar abstract class o interface.
- Composición: una clase usa otra dentro.

ts
abstract class Persona {
  constructor(protected nombre: string) {}
  abstract presentarse(): void;
}

class Profesor extends Persona {
  presentarse(): void {
    console.log(Soy el profesor ${this.nombre});
  }
}

class Curso {
  constructor(private profesor: Profesor) {}
  iniciarClase() {
    this.profesor.presentarse();
  }
}

const profe = new Profesor("Carlos");
const curso = new Curso(profe);
curso.iniciarClase();


# 12. Configuración de TypeScript con Node.js y VSCode
1. Inicializar proyecto:
   bash
   mkdir proyecto-ts && cd proyecto-ts
   npm init -y
   

2. Instalar dependencias:
   bash
   npm install typescript ts-node @types/node --save-dev
   

3. Crear archivo de configuración:
   bash
   npx tsc --init
   

4. Configurar tsconfig.json para habilitar "strict": true.

5. Crear un archivo index.ts y ejecutarlo:
   bash
   npx ts-node index.ts
   

6. En VSCode: instalar la extensión oficial de TypeScript para autocompletado.


# Conclusión
TypeScript mejora la programación en JavaScript al ofrecer tipado fuerte y soporte completo para la POO (encapsulación, herencia, polimorfismo, abstracción y composición). Esto permite escribir aplicaciones más robustas, seguras y mantenibles.
