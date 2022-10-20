'use strict';
console.log('createElement.js');

// sukuriam elementa div

const divContainerEl = document.createElement('div');
// pridedam klase
divContainerEl.className = 'container';
console.log('divContainerEl ===', divContainerEl);
// patalpinti body append
document.body.appendChild(divContainerEl);

// sukurti h1
// prideti jame tekxta
// patalpinti i divContainerEl
