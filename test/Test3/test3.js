const Spoiler = require('../../src/spoiler.js');

// Container where spoilers will be created
var container = document.querySelector('#container');

// Example of HTML created spoiler
var firstSpoiler = Spoiler.createHTML({
    'spoilerContent' : 'HTML created spoiler'
});
container.innerHTML = firstSpoiler;

// Example of DOM created spoiler
var secondSpoiler = Spoiler.create({
    'spoilerContent': 'DOM created spoiler'
});
container.appendChild(secondSpoiler);

// Init spoilers
Spoiler.initAll();