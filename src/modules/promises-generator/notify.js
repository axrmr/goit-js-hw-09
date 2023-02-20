import { Notify } from 'notiflix';

function success({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function error({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

export default {
  success,
  error,
};
