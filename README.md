# Loaders.css

Delightful and performance-focused pure css loading animations.

### What is this?

[See the demo](http://connoratherton.com/loaders)

A collection of loading animations written entirely in css.
Each animation is limited to a small subset of css properties in order
to avoid expensive painting and layout calculations.

I've posted links below to some fantastic articles that go into this
in a lot more detail.

### Install

```
bower install loaders.css
```

### Contributing

Pull requests are welcome! Create another file in `src/animations`
and load it in `src/loader.scss`.

In a separate tab run `gulp --require coffee-script`. Open `demo/demo.html`
in a browser to see your animation running.

### Further research

- http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/
- http://aerotwist.com/blog/pixels-are-expensive/
- http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
- http://frontendbabel.info/articles/webpage-rendering-101/

### Suggested use

Wrap the surrounding container in `display:flex` and center the animation.

### Licence

MIT
