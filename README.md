¡Te ayudooo! 🙌  
Lo que te pasa es que ahí se mezclaron **marcas de conflicto de Git** (`<<<<<<< HEAD`, `=======`, `>>>>>>> abc836c...`).

Esas marcas aparecen cuando Git detecta **conflictos de fusión (merge conflicts)** y no sabe cuál versión conservar.

**Para arreglarlo**, simplemente eliminá **todo lo que esté entre** esas marcas, y quedate solo con el contenido correcto.

Te paso el texto limpio y corregido sin conflictos:

---

# 📄 Trabajo Práctico N°1

### 📚 Asignatura
**Desarrollo de Aplicaciones Web**

### 📝 Carácter
**Trabajo Práctico N°1**

### 🎓 Carrera
**Tecnicatura Universitaria en Desarrollo Web**

### 🏛️ Facultad
**Facultad de Ciencias de la Administración - UNER**

---

## 👨‍🏫 Profesores
- **BUFFA, Juan Marcos**
- **FAURE, Cristian Dario**

---

## 👥 Integrantes del Equipo
- **GARCÍA, Manuel Alejandro**
- **PIEROTTI CASTILLO, Enrique Alejandro**

---

## 🛠 Tecnologías Utilizadas
- **TypeScript** (TS Logo)

Este proyecto está desarrollado en **TypeScript**.

---

## 📦 Configuración Inicial del Proyecto

Para generar el archivo de configuración `tsconfig.json`, ejecutar el siguiente comando desde la terminal:

```sh
tsc --init
```

---

## 🚀 Ejecución del Proyecto

Se puede ejecutar el código utilizando alguno de los siguientes comandos:

```sh
# Compilar y ejecutar directamente
ts-node index.ts

# Compilar con TypeScript y ejecutar con Node.js
tsc index.ts && node index.js

# Ejecutar directamente con tsx
tsx index.ts

# Ejecutar en modo "watch" para actualizaciones automáticas
tsx watch index.ts
```

---

## 📌 Consignas del Trabajo Práctico

- Crear una **interfaz** `Animal` con un atributo `nombre` y un método `gritar()`.
- Implementar las **clases** `Perro`, `Gato` y `Vaca` basadas en la interfaz `Animal`.
- Crear una **función** `describirAnimal` que imprima el nombre y el sonido del animal.
- Crear **constantes** `perro`, `vaca` y `gato`, con instancias de las clases anteriores.
- Ejecutar la función `describirAnimal` para cada animal.
- Crear un **Enum** llamado `DiasSemana` con los días de la semana.
- Crear una **variable** que pueda contener **números o strings**, asignarle `"Messi"` y luego el número `10`.
- Crear una **clase genérica** que implemente la interfaz:

```typescript
interface Fila<T> {
  agregar(elemento: T): void;
  remover(): T | undefined;
}
```
- Implementar filas para **números**, **strings** y **animales**.
- Agregar elementos a cada fila y remover uno de cada tipo.

---

## 🎯 Objetivo

Este trabajo práctico tiene como objetivo **aplicar los conceptos de interfaces, clases, enumeraciones y genéricos en TypeScript**.

---
