'use strict';
console.log('insertAdjacent.js');

const listEl = document.getElementById('colorsList');

// elem.insertAdjacentHTML(where, html)
// panasus i innerHTML. skirtas ikelti tekstiniam htmlui

const h2ElString = '<h2>Colors</h2>';

const h2El = document.createElement('h2');
h2El.textContent = 'Colors';

// listEl.insertAdjacentHTML('beforebegin', h2ElString);
listEl.insertAdjacentHTML('afterbegin', '<li>Black</li>');
// listEl.insertAdjacentHTML('beforebegin', h2El); // neveikia su elemntais
listEl.insertAdjacentElement('beforebegin', h2El);
