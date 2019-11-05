# Usage

## Global object

Include spoiler.css:
```html
<link rel="stylesheet" type="text/css" href="spoiler.css">
```

Include spoiler.js and create spoilers:
```html
<!-- Include script -->
<script src="spoiler.js"></script>

<!-- Create spoilers -->
<script type="text/javascript">
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
</script>
```

## Webpack require

Require spoiler.js and create spoilers:
```js
// app.js
const Spoiler = require('spoiler.js');

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
```

Include styles and the file created:

```html
<link rel="stylesheet" type="text/css" href="spoiler.css">
```

```html
<script src="app.js"></script>
```

## Complete examples

Complete examples can be found under `test` directory


# About

Based on CodePen creted by Taufik Nurrohman (tovic)

https://codepen.io/tovic/pen/razXbO
