// Пункт 2

const changeColorButton = document.getElementById("change-color-button");
const changeFontSizeButton = document.getElementById("change-font-size-button");
const hiddenButton = document.getElementById("hidden-button");

const paragraph = document.querySelector(".target-text");

changeColorButton.onclick = () => {
    if(paragraph.classList.contains("grey-text"))
        paragraph.classList.remove("grey-text")
    else
        paragraph.classList.add("grey-text")
}


changeFontSizeButton.onclick = () => {
    paragraph.style.fontSize = '24px';
}


hiddenButton.onclick = () => {
    if(paragraph.style.display == 'block')
        paragraph.style.display = 'none';
    else 
        paragraph.style.display = 'block';
}


// Пункт 3
const pushTheButton = document.getElementById("push-the-button");
let indexButton = 1;

pushTheButton.onclick = () => {
    pushTheButton.classList = "";

    indexButton++;

    if(indexButton == 4)
        indexButton = 1;

    pushTheButton.classList.add('push-button-' + indexButton);

}

// Пункт 4
const squareButton = document.getElementById("square-button");
const circleButton = document.getElementById("circle-button");
const triangleButton = document.getElementById("triangle-button");

const container = document.getElementById("geometry-dash");

squareButton.onclick = () => {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) ) + min;
}

circleButton.onclick = () => {
    const colors = ["blue", "green", "red", "orange"];

    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.backgroundColor = colors[getRndInteger(0, 3)]
    container.appendChild(circle);
}


triangleButton.onclick = () => {
    const triangle = document.createElement("div");
    triangle.classList.add("triangle");
    container.appendChild(triangle);
}

