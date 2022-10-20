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
  const pDateEl = '<p>date: <strong>2022</strong></p>';
  artEl.insertAdjacentHTML('beforeend', pDateEl);
  // <p>It is all dynamic</p>
  const pEl = document.createElement('p');
  pEl.textContent = 'It is all dynamic';
  artEl.append(pEl);
  // artEl.insertAdjacentElement('beforeend', h2El);
  // dedam article i main
  mainEl.append(artEl);
}
makeArticle();

/*
<ol class="colors">
        <li>red</li>
        <li>green</li>
        <li>blue</li>
        <li>white</li>
      </ol>
*/

function makeColorsList() {
  const olEl = crElement('ol', mainEl, null, 'colors');
  crElement('li', olEl, 'red');
  crElement('li', olEl, 'green');
  crElement('li', olEl, 'blue');
  crElement('li', olEl, 'white');
  crElement('li', olEl, 'what ever color');
}

makeColorsList();
// Helper functions ========================

function crElement(tagName, destination, elText = null, className = null) {
  const el = document.createElement(tagName);
  el.textContent = elText;
  if (className !== null) el.className = className;

  destination.append(el);
  return el;
}

// sukurti h3 el su klase 'title' tekstu 'sveiki' ir patalpinti i body

// document.body.prepend(sukurtasEL);
