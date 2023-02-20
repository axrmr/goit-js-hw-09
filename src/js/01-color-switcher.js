import getRefs from '../modules/bg-color-switcher/getRefs';
import setNodeRandomBgColor from '../modules/bg-color-switcher/setNodeRandomBgColor';

const ref = getRefs();

ref.startButton.addEventListener('click', onStartBtnClick);
ref.stopButton.addEventListener('click', onStopBtnClick);

function onStartBtnClick(event) {
  const bodyEl = document.body;

  setNodeRandomBgColor(bodyEl);

  ref.colorSwitcherTimeoutId = setInterval(() => {
    setNodeRandomBgColor(bodyEl);
  }, 1000);

  ref.startButton.disabled = true;
  ref.stopButton.disabled = false;
}

function onStopBtnClick(event) {
  clearTimeout(ref.colorSwitcherTimeoutId);

  ref.stopButton.disabled = true;
  ref.startButton.disabled = false;
}
