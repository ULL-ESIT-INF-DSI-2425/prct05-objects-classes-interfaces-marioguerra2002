[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/FTPDI46d)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=18340416)

[![CI tests](https://github.com/ULL-ESIT-INF-DSI-2425/prct05-objects-classes-interfaces-marioguerra2002/actions/workflows/ci.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2425/prct05-objects-classes-interfaces-marioguerra2002/actions/workflows/ci.yml)

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2425/prct05-objects-classes-interfaces-marioguerra2002/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2425/prct05-objects-classes-interfaces-marioguerra2002?branch=main)

# Ejercicios de Desarrollo

## Ejercicio 1 - Combates Pokémon

### Descripción

En este ejercicio, se debe crear una estructura de clases e interfaces para representar una Pokedex, que almacenará información sobre diferentes Pokémon. Para cada Pokémon, se deben almacenar los siguientes elementos de información:

- Nombre
- Peso y altura
- Tipo
- Estadísticas básicas: ataque, defensa, velocidad, daño máximo (HP)

La Pokedex debe permitir mostrar información sobre los Pokémon almacenados y permitir la búsqueda por cualquier campo de información, como el tipo del Pokémon. Por ejemplo, se debe poder buscar todos los Pokémon de tipo fuego.

Además, se debe diseñar una clase `Combat` que simule un combate entre dos Pokémon. La clase `Combat` tendrá los siguientes requisitos:

- El combate se realiza por turnos, donde un Pokémon ataca al otro, reduciendo su HP según el daño infligido.
- El primer contrincante será el que inicie el combate.
- Después de cada ataque, se debe mostrar el estado de HP de cada Pokémon.
- El daño de un Pokémon sobre otro se calcula con la fórmula:

  ```plaintext
  daño = 50 * (ataque / defensa) * efectividad
  ```
  Donde:
- **Ataque** es la capacidad de ataque del Pokémon que ataca.
- **Defensa** es la capacidad de defensa del oponente.
- **Efectividad** depende del tipo de los Pokémon involucrados en el combate.

### Tipos y Efectividad

Los ataques pueden ser **efectivos**, **neutrales** o **no efectivos** dependiendo del tipo de los Pokémon que estén combatiendo. Considerando únicamente Pokémon de tipo **fuego**, **agua**, **hierba** y **eléctrico**, se establece lo siguiente:

- **Fuego > Hierba**
- **Fuego < Agua**
- **Fuego = Eléctrico**
- **Agua < Hierba**
- **Agua < Eléctrico**
- **Hierba = Eléctrico**

### Valores de Efectividad

- **Efectivo**: `efectividad = 2`
- **Neutral**: `efectividad = 1`
- **No efectivo**: `efectividad = 0.5`

#### Ejemplo:

- Un Pokémon de **fuego** provocará un ataque **efectivo** sobre un Pokémon de **hierba**.
- El ataque de un Pokémon de **fuego** será **neutral** respecto a un Pokémon de **eléctrico**.
- Un Pokémon de **fuego** provocará un ataque **no efectivo** sobre un Pokémon de **agu

  ### Descripción

En este ejercicio, se debe diseñar el conjunto de clases e interfaces necesarias para almacenar una biblioteca musical. La información de un artista, ya sea un grupo o un solista, debe incluir lo siguiente:

- **Nombre**
- **Número de oyentes mensuales**
- **Discografía**

La discografía de un artista consistirá en una colección de discos, donde la información de un disco debe ser:

- **Nombre**
- **Año de publicación**
- **Canciones**

Por cada canción perteneciente a un disco, la información será la siguiente:

- **Nombre**
- **Duración en segundos**
- **Géneros**
- **Single** (indica si la canción fue lanzada como un single o no)
- **Número de reproducciones**

La biblioteca musical debe permitir las siguientes funcionalidades:

1. **Almacenar la información de diferentes artistas**, su discografía y las canciones de cada disco o álbum.
2. **Mostrar la información de la biblioteca** en formato tabla utilizando `console.table`.
3. **Realizar búsquedas** de artistas, discos y canciones y mostrar los resultados en formato tabla.
4. **Calcular el número de canciones** incluidas en un disco concreto.
5. **Calcular la duración total de un disco**, sumando la duración de todas las canciones que lo conforman.
6. **Calcular el número total de reproducciones de un disco**, sumando las reproducciones de todas las canciones incluidas en él.

### Requisitos

1. Crear las **clases e interfaces** necesarias para representar la información de los artistas, discos y canciones.
2. Implementar **métodos** que permitan:
   - Almacenar y mostrar la información en tablas.
   - Realizar búsquedas de artistas, discos y canciones.
   - Calcular el número de canciones, la duración y las reproducciones de un disco.
3. Incluir **pruebas unitarias** para verificar el correcto funcionamiento de las clases y métodos implementados.

### Ejemplo de implementación:

#### Estructura de clases

- **Artista**:
  - Nombre
  - Número de oyentes mensuales
  - Discografía (colección de discos)

- **Disco**:
  - Nombre
  - Año de publicación
  - Canciones (colección de canciones)

- **Canción**:
  - Nombre
  - Duración en segundos
  - Géneros
  - Single
  - Número de reproducciones

#### Funcionalidades clave

- **Mostrar toda la biblioteca**: Se debe poder ver la información de todos los artistas, discos y canciones almacenados utilizando `console.table`.
  
- **Búsquedas**: Buscar artistas, discos o canciones por nombre o características, como género o año de publicación.

- **Cálculos**:
  - Número de canciones en un disco.
  - Duración total de un disco (sumar la duración de las canciones).
  - Número total de reproducciones de un disco (sumar las reproducciones de las canciones).

---

## Metodología

Para este ejercicio, siga la metodología de **Desarrollo Dirigido por Pruebas (TDD)**. Asegúrese de realizar pruebas unitarias que verifiquen el correcto funcionamiento del código, así como los casos en los que el código debe manejar entradas no válidas o inesperadas de manera adecuada.

Además, utilice **TSDoc** para documentar sus clases y métodos, y genere la documentación utilizando **TypeDoc**.

---

