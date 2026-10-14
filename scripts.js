//PASO 1. Agregar evento de clic al documento
document.addEventListener(`click`, (event) => {
    event.preventDefault();
    console.log(event.target);
});
//PASO 2.
document.addEventListener(`click`, (event) => {
    const element = event.target;
    if (element.tagName === `IMG`) {
        element.src =`assets/magic-
    } else if (element.tagName === `P`) {
        element.style.color = `white`;
        element.style.backgroundColor = `purple`
    }else if (element.tagName === `ARTICLE` || element.tagName === `SECTION`) {
        element.style.backgroundColor = `lightgreen`;
    }
});