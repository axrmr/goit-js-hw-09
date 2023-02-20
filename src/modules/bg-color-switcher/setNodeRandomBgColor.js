import getRandomHexColor from './getRandomHexColor';

function setNodeRandomBgColor(element) {
  element.style.backgroundColor = getRandomHexColor();
}

export default setNodeRandomBgColor;
