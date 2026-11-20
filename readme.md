# Varita mágica

Práctica del bootcamp de Full Stack de The Bridge, del bloque de fundamentos de programación.

## Qué es

Una entrada del blog Coding Horror descargada en local. Los profesores nos dieron la página y yo tenía que convertir el ratón en una varita: al pasar por encima o hacer click, las imágenes, los párrafos y los bloques cambian. Todo con JavaScript, en `scripts.js`. El enunciado completo está más abajo.

## Qué hice

- **Click**: con `event.preventDefault()` los enlaces dejan de llevar a otra página. Después miro el `tagName` del elemento:
  - Si es una imagen (`IMG`), la cambio por uno de los seis gifs `magic-*` de la carpeta `assets`.
  - Si es un párrafo (`P`), le cambio el color del texto y el del fondo.
  - Si es un `ARTICLE` o una `SECTION`, le cambio el color de fondo.
- **Pasar el ratón por encima** (`mouseover`): las imágenes se convierten en `abracadabra.gif`, los párrafos cambian de colores y los bloques se ponen azul claro.
- **Quitar el ratón** (`mouseout`): cada elemento vuelve a como estaba. Para eso guardo el valor original en `dataset` antes de cambiarlo (`dataset.original`, `dataset.color`, `dataset.fondo`).
- **`getRandom`** (premium): una función que recibe un array y devuelve un elemento al azar con `Math.floor(Math.random() * array.length)`. La uso para elegir colores de una paleta de tres (`#00ff8c`, `#ffd900`, `#1500ff`) y para elegir el gif.

Los `addEventListener` van en `document`, en vez de poner uno en cada imagen o párrafo. Luego miro `event.target` para saber dónde ha pasado.

## Cómo verlo

Abre `index.html` en el navegador y pasea el ratón por la página. Haz click en imágenes y párrafos para ver los cambios.

## Enunciado original

![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png "logotipo de The Bridge")

# :crossed_swords: Varita mágica #

## Introducción ##

Convertirás tu "pesé" en una electro-varita sembradora del caos en una página que te proveemos dentro del repositorio.

![](jarri.webp)

Mientras mueves el ratón y haces click sobre las cosas, irá haciendo cambios a su paso.

## Requisitos ##

- HTML

- CSS

- Javascript

- DOM API

## Iteraciones ##

En este repositorio tienes descargada y "aligerada" un post del conocido blog ["Coding Horror"](https://blog.codinghorror.com).

Todo está preparado para que puedas escribir en el archivo `scripts.js`

**_Todo ha de hacerse mediante Javascript._**

### Eventos ###

1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

    2.1 Imágenes: Cambia la imagen por uno de los `gif` que tienes en la carpeta **assets** con el nombre **magic-***.

    2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

    2.3 Bloques de `article` o `section`: Cambia el color de fondo.

3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

    3.1 Imágenes: Cambia la imagen por el gif `abracadabra.gif`.

    3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

    3.3 Bloques de `article` o `section`: Color de fondo distinto al de párrafo.

_**Premium**_

![](https://media.giphy.com/media/tpTOw6sljB2U/giphy.gif)

4. Crea una función de nombre `getRandom` que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

    ```javascript
    const colors = ['red', 'blue', 'green']

    const getRandom = (array) => {
        /* código misterioso */
    }

    console.log(getRandom(colors))
    // imprime 'red', 'blue' o 'green'
    ```
5. Utiliza la función creada `getRandom` para utilizar colores aleatorios de una paleta que hayas escogido de [coolors.co](https://coolors.co/palettes/trending) en los apartados anteriores.

6. Utiliza la función creada `getRandom` para utilizar _gifs_ aleatorios  en los apartados anteriores.
