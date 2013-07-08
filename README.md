#seuss.js
#####a plugin that will transform a website into something of good old dr. seuss' dreams...but your nightmares

##demo
http://seuss.johnvaghi.com

## basic implemenation

```javascript
	$('.mySelector').seuss();
```

##config options (followed by their defaults)

```javascript
$('.mySelector').seuss({
	selectors : ['p','h1','h2','h3','h4','a','div','span'], //array of selectors to seuss-ify
    unSeuss: '.unSeuss' //selector that will, when clicked, revert the webpage to it's original state
});
```
##in the works

- onSeuss callback function
- background colors
- insertion of random seuss lines (assuming i won't be immediately sued)
- ability to toggle off seuss-ification options

##dependencies 

- jQuery
