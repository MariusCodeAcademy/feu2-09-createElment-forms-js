'use strict';
console.log('uzd.js');

// div.container

const divContainterEl = document.createElement('div');
divContainterEl.className = 'container';
document.body.prepend(divContainterEl);

// <h1>About us</h1>
const h1El = document.createElement('h1');
h1El.textContent = 'About us';
divContainterEl.append(h1El);

// main
const mainEl = document.createElement('main');
divContainterEl.append(mainEl);

function makeArticle() {
  // kuriam article
  const artEl = document.createElement('article');
  artEl.className = 'card';
  // <h2>Its all about us</h2>
  const h2El = document.createElement('h2');
  h2El.textContent = 'Its all about us';
  artEl.append(h2El);

  // <p>date: <strong>2022</strong></p>

  // <p>It is all dynamic</p>

  // artEl.insertAdjacentElement('beforeend', h2El);
  // dedam article i main
  mainEl.append(artEl);
}
makeArticle();
