---
title: Hello world
description: Get up and running quickly.
---

## Your content

Let’s start with some HTML on a page:

```html
<article>
  <h1>Hello world!</h1>
</article>
```

Then, let’s add `typetura.css`. It should ideally go in the `<head>`.

```html
<head>
  ...
  <link rel="stylesheet" href="typetura.css">
  ...
</head>
```

We want to change the size of the `h1`. Let’s attach Typetura’s styles to that by adding the class `tt`.

```html
<article>
  <h1 class="tt">Hello world!</h1>
</article>
```

## Your styles

Now we can style this using [CSS keyframe animations](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes).

```css
h1 {
  animation-name: h1;
}
@keyframes h1 {
  0% {
    font-size: 1rem;
  }
  100% {
    font-size: 5rem;
  }
}
```

## Additional styling

You did it! You wrote your first Typetura styles. You may want to adjust the start and end position, as well as the easing curve.

```css
h1 {
  animation-name: h1;
  animation-timing-function: ease-in-out; /* Scaling curve */
  --tt-min: 10rem; /* Where to start at 0% of the animation */
  --tt-max: 60rem; /* Where to end at 100% of the animation */
}
@keyframes h1 {
  0% {
    font-size: 1rem;
    line-height: 1.2
  }
  100% {
    font-size: 5rem;
    line-height: 1;
  }
}
```

**[Edit the result on Codepen](https://codepen.io/scottkellum/pen/mdZVRVb)**