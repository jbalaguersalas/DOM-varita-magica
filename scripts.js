//PASO 1. Agregar evento de clic al documento
document.addEventListener(`click`, (event) => {
    event.preventDefault();
    console.log(event.target);
});
//PASO 2.
document.addEventListener(`click`, (event) => {
    const element = event.target;
    if (element.tagName === `IMG`) {
        element.src =`assets/magic-1.gif`;
    } else if (element.tagName === `P`) {
        element.style.color = `white`;
        element.style.backgroundColor = `purple`
    }else if (element.tagName === `ARTICLE` || element.tagName === `SECTION`) {
        element.style.backgroundColor = `lightgreen`;
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
        element.style.color = `purple`;
        element.style.backgroundColor = `orange`
    }
    else if (element.tagName === `ARTICLE` || element.tagName === `SECTION`) {
        element.style.backgroundColor = `lightblue`;
    }
    
    })
    document.addEventListener(`mouseout`, (event) => {
        const element = event.target;
        if (element.tagName === `IMG`) {
            element.src =element.dataset.original;
}
    })