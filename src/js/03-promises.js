import { Notify } from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const amount = Number(this.amount.value);
  const step = Number(this.step.value);
  let delay = Number(this.delay.value);

  for (let i = 0; i < amount; i += 1) {
    const position = i + 1;

    createPromise(position, delay).then(showSuccesMsg).catch(showErrorMsg);

    delay += step;
  }

  this.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function showSuccesMsg({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function showErrorMsg({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
