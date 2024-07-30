---
title: Headings
description: Best practices for styling your headings.
---

## Your content

Let’s start with some HTML on a page:

```html
<article>
  <h1>Hello world!</h1>
</article>
```

Then, let’s add [`typetura.css`](https://github.com/Typetura/Typetura/releases/latest). It should ideally go in the `<head>`.

```html
<head>
  ...
  <link rel="stylesheet" href="/typetura.css">
  ...
</head>
```

We want to change the size of the `h1` [element](/reference/elements). Let’s attach Typetura’s behavior to it by adding the class `tt`.

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

You did it! You wrote your first Typetura styles. You may want to adjust the start and end position, as well as the easing curve. See the [Typetura style reference](/reference/styles) for more information.

```css
h1 {
  animation-name: h1;
	/* Scaling curve */
  animation-timing-function: ease-in-out;
	/* Breakpoint for “from” keyframe */
  --from: 10rem;
	/* Breakpoint for “to” keyframe */
  --to: 60rem;
}
@keyframes h1 {
  from {
    font-size: 1rem;
		line-height: 1.2
  }
  to {
    font-size: 5rem;
		line-height: 1;
  }
}
```

<p class="codepen" data-height="600" data-default-tab="css,result" data-slug-hash="mdZVRVb" data-pen-title="Typetura Hello World Tutorial" data-editable="true" data-user="scottkellum" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/scottkellum/pen/mdZVRVb">
  Typetura Hello World Tutorial</a> by Scott Kellum (<a href="https://codepen.io/scottkellum">@scottkellum</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>