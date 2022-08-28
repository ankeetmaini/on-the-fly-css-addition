const button = document.getElementById('add-css');
const nothing = document.getElementById('nothing');

let counter = 0;
const prefix = 'css-rule-';

button.addEventListener('click', () => {
  let str = '';
  for (let i = 0; i < 100; i++) {
    str += `
    .${prefix}-${counter++} {
      background: green;
      padding: 12px;
    }
  `
  }
  const tag = document.createElement('style');
  tag.innerHTML = str;
  document.head.appendChild(tag);
});

nothing.addEventListener('click', () => {

  for (let i = 0; i < 10000; i++);
})

window.addEventListener('load', () => {
  for (let i = 0; i <= 100000; i++) {
    const div = document.createElement('div');
    div.innerHTML = 'hey I am a div#' + i;
    document.body.appendChild(div);
  }
})