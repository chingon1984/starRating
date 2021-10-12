export const rater = (() => {

  class Rater {
    constructor(ratingElement) {
      const stars = ratingElement.querySelectorAll('.star');
      stars.forEach(star => {
        this.#colorStar(ratingElement, star);
        star.addEventListener('mouseover', this.#changeColor)
      })
    }

    #colorStar(ratingElement, star) {
      star.setAttribute('color',
        star.dataset.value <= ratingElement.dataset.rating ? 'yellow' : 'grey');
    }

    #changeColor(e) {
      const star = e.currentTarget;
      const parentElement = star.parentElement;
      parentElement.querySelectorAll('.star').forEach(elt => console.log(this))
    }
  }

  return {Rater};
})();
