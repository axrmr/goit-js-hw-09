export default function () {
  return {
    startButton: document.querySelector('[data-start]'),
    stopButton: document.querySelector('[data-stop]'),
    colorSwitcherTimeoutId: null,
  };
}
