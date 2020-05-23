let a = document.querySelector('#xsquare');
let b = document.querySelector('#x');
let c = document.querySelector('#constant');
let result = document.querySelector('.result');
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  a = Number(a.value);
  b = Number(b.value);
  c = Number(c.value);

  let x1 = ((-b) + Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a);
  let x2 = ((-b) - Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a);
  if (x1 >= 1 || x1 < 1) {
    return result.textContent = `The roots of the equation ${a}x² + ${b}x + ${c} is ${x1} and ${x2}`;
  } else {
    return result.textContent = `The equation ${a}x² + ${b}x + ${c} has no roots`;
  }
})
