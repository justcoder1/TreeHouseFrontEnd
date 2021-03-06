// CLASS = TreeHouse - javascript-Loops //
/* //This is how the code starts before I refactored it.
let html = '';
let red;
let green;
let blue;
let randomRGB;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">2</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">3</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">4</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">5</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">6</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">7</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">8</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">9</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">10</div>`;

document.querySelector('main').innerHTML = html;
*/
/* MY First attempt at Refactoring
let html = '';
let red;
let green;
let blue;
let randomRGB;

for (let i = 1; i <= 10; i ++) {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;
*/

/* //2nd attemtp at refactoring
let html = '';
let red;
let green;
let blue;
const randomvalue = () => Math.floor(Math.random() * 256);

function randomRGB () {
  const color = `rgb( ${randomvalue()}, ${randomvalue()}, ${randomvalue()} )`;
  return color;
}

for (let i = 1; i <= 10; i ++) {
  html += `<div style="background-color: ${randomRGB()}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;
*/

// final refactor
let html = '';
let red;
let green;
let blue;
const randomvalue = () => Math.floor(Math.random() * 256);

function randomRGB (value) {
  const color = `rgb( ${value()}, ${value()}, ${value()} )`;
  return color;
}

for (let i = 1; i <= 10; i ++) {
  html += `<div style="background-color: ${randomRGB(randomvalue)}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;