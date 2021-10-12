import { rater } from './rater.js';

class RaterApp {
  constructor() {
    this.#init();
  }

  #init() {
    const raters = document.querySelectorAll('[role=rater]')
    raters.forEach(r => {
      new rater.Rater(r);
    })
  }
}

let _APP = null;
window.addEventListener('DOMContentLoaded', () => {
  _APP = new RaterApp();
})
