import { Notify } from 'notiflix/build/notiflix-notify-aio'; //failure info success warning

export default function (msg) {
  Notify.failure(msg);
}
