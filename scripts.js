//PASO 1. Agregar evento de clic al documento
document.addEventListener(`click`, (event) => {
    event.preventDefault();
    console.log(event.target);
});
//PASO 2.
document.addEventListener(`click`, (event) => {
    const element = event.target;
    if (element.tagName === `IMG`) {
        element.src = getRandom(gifs);
    } else if (element.tagName === `P`) {
        element.style.color = getRandom(colors);
        element.style.backgroundColor = getRandom(colors);
    }else if (element.tagName === `ARTICLE` || element.tagName === `SECTION`) {
        element.style.backgroundColor = getRandom(colors);
    }
});
//PASO 3.
document.addEventListener(`mouseover`, (event) => {
    const element = event.target;
    if (element.tagName === `IMG`) {
        element.dataset.original = element.src;
        element.src =`assets/abracadabra.gif`;
    }
    else if (element.tagName === `P`) {
        element.dataset.color = element.style.color;
        element.dataset.fondo = element.style.backgroundColor;
        element.style.color = getRandom(colors);
        element.style.backgroundColor = getRandom(colors);
    }
    else if (element.tagName === `ARTICLE` || element.tagName === `SECTION`) {
        element.dataset.fondo = element.style.backgroundColor;
        element.style.backgroundColor = `lightblue`;
    }
    
    })
    document.addEventListener(`mouseout`, (event) => {
        const element = event.target;
        if (element.tagName === `IMG`) {
            element.src =element.dataset.original;
}
if (element.tagName === `P`) {
    element.style.color = element.dataset.color;
    element.style.backgroundColor = element.dataset.fondo;
}
if (element.tagName === `ARTICLE` || element.tagName === `SECTION`) {
    element.style.backgroundColor = element.dataset.fondo;
}
    })
    //4.random
const colors = ['09814A', 'BCB382', '119DA4']
const gifs = ['assets/magic-1.gif', 'assets/magic-2.gif', 'assets/magic-3.gif', 'assets/magic-4.gif', 'assets/magic-5.gif', 'assets/magic-6.gif'];
const getRandom = (array) => {
    const numero= Math.floor(Math.random() * array.length);
    return array[numero];
};

