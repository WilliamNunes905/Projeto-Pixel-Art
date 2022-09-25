const colorBlack = document.getElementById('black');
const colorRed = document.getElementById('red');
const colorOrange = document.getElementById('orange');
const colorGreen = document.getElementById('green');
const button = document.querySelector('#button-random-color');

function colorRandom() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
function saveColor() {
  let currentColors = [
    colorBlack.style.backgroundColor,
    colorRed.style.backgroundColor,
    colorOrange.style.backgroundColor,
    colorGreen.style.backgroundColor,
  ];
  currentColors = JSON.stringify(currentColors);
  localStorage.setItem('colorPalette', currentColors);
}
button.addEventListener('click', () => {
  colorRed.style.backgroundColor = colorRandom();
  colorOrange.style.backgroundColor = colorRandom();
  colorGreen.style.backgroundColor = colorRandom();
  saveColor();
});
function functionRandom() {
  if (localStorage.length !== 0) {
    let colorLocalStorage = localStorage.getItem('colorPalette');
    colorLocalStorage = JSON.parse(colorLocalStorage);
    colorBlack.style.backgroundColor = colorLocalStorage[0];
    colorRed.style.backgroundColor = colorLocalStorage[1];
    colorOrange.style.backgroundColor = colorLocalStorage[2];
    colorGreen.style.backgroundColor = colorLocalStorage[3];
  } else {
    localStorage.setItem('colorPalette', JSON.stringify(''));
  }
}
button.addEventListener('click', () => {
  colorRed.style.backgroundColor = colorRandom();
  colorOrange.style.backgroundColor = colorRandom();
  colorGreen.style.backgroundColor = colorRandom();
  saveColor();
});
functionRandom();

function selectedColor(event) {
  const color = event.target.classList;
  const style = event.target.style.backgroundColor;
  if (color.value.includes('selected')) {
    console.log(selectedColor);
  } else if (style) { const selectName = document.getElementsByClassName('selected');
    selectName[0].classList.remove('selected');
    const select = document.getElementsByClassName(color.value);
    select[0].classList.add('selected');
selectColor = style;
  } else {
    const selectName = document.getElementsByClassName('selected');
    selectName[0].classList.remove('selected');
    const select = document.getElementsByClassName(color.value);
    select[0].classList.add('selected');
    const recebeCor = color[1];
    selectColor = recebeCor;
  }
}
function squareColor() {
  const element = document.getElementsByClassName('selected')[0];
  const css = window.getComputedStyle(element, null);
  const Color = css.getPropertyValue('background-color');
  return Color;
}
function aplicarColor(event) {
  const aux = event;
  aux.target.style.backgroundColor = squareColor();
}

const square = document.getElementsByClassName('pixel');
for (let index = 0; index < square.length; index += 1) {
  square[index].addEventListener('click', aplicarColor);
}

function clearBoard() {
  for (let index = 0; index < square.length; index += 1) {
    square[index].style.backgroundColor = 'white';
  }
}
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);
