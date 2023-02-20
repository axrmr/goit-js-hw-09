import notify from '../modules/promises-generator/notify';
import createPromise from '../modules/promises-generator/createPromise';
import getRefs from '../modules/promises-generator/getRefs';

const ref = getRefs();

ref.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const amount = parseInt(this.amount.value);
  const step = parseInt(this.step.value);
  let delay = parseInt(this.delay.value);

  for (let i = 0; i < amount; i += 1) {
    const position = i + 1;

    createPromise(position, delay).then(notify.success).catch(notify.error);

    delay += step;
  }

  this.reset();
}
