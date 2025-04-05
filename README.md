# TP N°1

📚 **Asignatura**: Desarrollo de Aplicaciones Web  
📝 **Carácter**: TP N°1  
🎓 **Carrera**: Tecnicatura Universitaria en Desarrollo Web  
🏛️ **Facultad de Ciencias de la Administración - UNER**  

👨‍🏫 **Profesores**:

1. **BUFFA, Juan Marcos**  
2. **FAURE, Cristian Dario**  

👥 **Integrantes del equipo**:

1. **GARCÍA, Manuel Alejandro**  
2. **PIEROTTI CASTILLO, Enrique Alejandro**  

---

## 🛠 Tecnologías Utilizadas

![TypeScript Logo](https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg)

Este proyecto está desarrollado en **TypeScript**.

---

## 📦 Configuración Inicial del Proyecto

Para generar el archivo de configuración `tsconfig.json`, ejecutá el siguiente comando desde la terminal:

```sh
tsc --init


## 🚀 Ejecución del Proyecto
Para ejecutar el código, se puede utilizar uno de los siguientes comandos:

```sh
# Este comando compila el archivo index.ts y lo ejecuta automáticamente sin necesidad de generar un .js por separado.
ts-node index.ts

# Compilar con TypeScript y ejecutar con Node.js
tsc index.ts && node index.js

# Ejecutar directamente con tsx
tsx index.ts

# Modo watch para actualizaciones automáticas
tsx watch index.ts
```

---

## 📌 Consignas del Trabajo Práctico

1. Crear una interfaz **“Animal”** con un atributo `nombre` y un método `gritar()`.
2. Implementar las clases **“Perro”**, **“Gato”** y **“Vaca”**, basadas en la interfaz **Animal**.
3. Crear una función **“describirAnimal”** que imprima el nombre y el sonido del animal.
4. Crear constantes **perro**, **vaca** y **gato**, con instancias de las clases anteriores.
5. Ejecutar la función **describirAnimal** para cada animal.
6. Crear un **Enum** llamado **DiasSemana** con los días de la semana.
7. Crear una variable que pueda contener **números o strings**, asignar "Messi" y luego el número `10`.
8. Crear una **clase genérica** que implemente la interfaz:
   ```ts
   interface Fila<T> {
     agregar(elemento: T): void;
     remover(): T | undefined;
   }
   ```
9. Implementar filas para **números**, **strings** y **animales**.
10. Agregar elementos a cada fila y remover uno de cada tipo.

---

📌 **Este trabajo práctico tiene como objetivo aplicar los conceptos de interfaces, clases, enumeraciones y genéricos en TypeScript.**

