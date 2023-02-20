import addLeadingZero from '../modules/timer/addLeadingZero';
import convertMs from '../modules/timer/convertMs';
import disableNodeEl from '../modules/timer/disableNodeEl';
import enableNodeEl from '../modules/timer/enableNodeEl';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import showErrorMsg from '../modules/timer/notify-error';
import getRefs from '../modules/timer/getRefs';

const ref = getRefs();

ref.startBtn.addEventListener('click', onStartBtnClick);

const $flatPickr = flatpickr(ref.dateTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = Date.now();

    if (selectedDate < currentDate) {
      showErrorMsg(ref.errorMessage);

      disableNodeEl(ref.startBtn);
    } else {
      enableNodeEl(ref.startBtn);
    }
  },
});

function onStartBtnClick() {
  ref.startBtnClickIntervalId = setInterval(() => {
    const countDownDate = $flatPickr.selectedDates[0];

    let distance = countDownDate - Date.now();

    const { days, hours, minutes, seconds } = convertMs(distance);

    if (!seconds) {
      clearInterval(ref.startBtnClickIntervalId);

      enableNodeEl(ref.dateTimePicker);
    }

    ref.days.textContent = addLeadingZero(days);
    ref.hours.textContent = addLeadingZero(hours);
    ref.minutes.textContent = addLeadingZero(minutes);
    ref.seconds.textContent = addLeadingZero(seconds);
  }, 1000);

  disableNodeEl(ref.startBtn);
  disableNodeEl(ref.dateTimePicker);
}
