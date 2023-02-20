export default function () {
  return {
    errorMessage: 'Please choose a date in the future',
    dateTimePicker: document.getElementById('datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    startBtnClickIntervalId: null,
  };
}
