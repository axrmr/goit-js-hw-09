import { Notify } from 'notiflix/build/notiflix-notify-aio'; //failure info success warning
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const errorMessage = 'Please choose a date in the future';
const dateTimePickerEl = document.getElementById('datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
let onClickIntervalId = null;

startBtnEl.addEventListener('click', onStartBtnClick);

const $flatPickr = flatpickr(dateTimePickerEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = Date.now();

    if (selectedDate < currentDate) {
      showErrorMessage();

      disableNodeEl(startBtnEl);
    } else {
      startBtnEl.disabled = false;
    }
  },
});

function countDown() {
  const countDownDate = $flatPickr.selectedDates[0];

  let distance = countDownDate - Date.now();

  if (distance < 0) {
    clearInterval(intervalId);

    return;
  }

  renderTimer(distance);
}

function onStartBtnClick() {
  onClickIntervalId = setInterval(countDown, 1000);

  disableNodeEl(startBtnEl);
  disableNodeEl(dateTimePickerEl);
}

function renderTimer(timeMs) {
  const { days, hours, minutes, seconds } = convertMs(timeMs);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function disableNodeEl(element) {
  element.disabled = true;
}

function showErrorMessage() {
  Notify.failure(errorMessage);
}
