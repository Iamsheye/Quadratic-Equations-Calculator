let a = document.querySelector('#xsquare');
let b = document.querySelector('#x');
let c = document.querySelector('#constant');
let result = document.querySelector('.result');
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  aA = Number(a.value);
  bB = Number(b.value);
  cC = Number(c.value);

  let x1 = ((-bB) + Math.sqrt((bB ** 2) - (4 * aA * cC))) / (2 * aA);
  let x2 = ((-bB) - Math.sqrt((bB ** 2) - (4 * aA * cC))) / (2 * aA);
  if (x1 >= 1 || x1 < 1) {
    return result.textContent = `The roots of the equation ${aA}x² + ${bB}x + ${cC} is ${x1} and ${x2}`;
  } else {
    return result.textContent = `The equation ${aA}x² + ${bB}x + ${cC} has no roots`;
  }
})
