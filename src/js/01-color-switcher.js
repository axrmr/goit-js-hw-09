const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');
const body = document.body;
let colorSwitcherTimeoutId = null;

startButtonEl.addEventListener('click', onStartBtnClick);
stopButtonEl.addEventListener('click', onStopBtnClick);

function onStartBtnClick(event) {
  switchBodyBgColor();

  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
}

function onStopBtnClick(event) {
  clearTimeout(colorSwitcherTimeoutId);

  stopButtonEl.disabled = true;
  startButtonEl.disabled = false;
}

function switchBodyBgColor() {
  body.style.backgroundColor = getRandomHexColor();

  colorSwitcherTimeoutId = setTimeout(switchBodyBgColor, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
