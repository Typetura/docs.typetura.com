---
title: Headings
description: Best practices for styling your headings.
---

## Your content

Let’s start with some HTML on a page:

```html
<article>
  <h1 class="heading">My headline</h1>
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

We want to style the `.heading` [element](/reference/elements). Let’s attach Typetura’s behavior to it by adding the class `tt`.

```html
<article>
  <h1 class="heading tt">Hello world!</h1>
</article>
```

## Defining a container

Let’s say we want to have the headline scale with the [container](/reference/containers) it is in. We can define this by either adding a `cq` class to `<article>` or by adding `article{ container-type: inline-size; }` to our CSS.

## Your styles

Now we can style this using [CSS keyframe animations](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes). We’ll start by creating an animation and attaching that to our heading.

```css
.heading {
  animation-name: heading;
}
@keyframes heading {
  from {
    font-size: 1.5rem;
  }
  to {
    font-size: 5rem;
  }
}
```

## Additional styling

You did it! Now let’s add more styles to both the keyframes and our regular ruleset for the heading. See the [Typetura style reference](/reference/styles) for more information.

```css
.heading {
  animation-name: heading;
  animation-timing-function: ease-in;
	margin: 0;
	margin-block-end: 0.2em;
	font-stretch: 80%;
	line-height: 1;
  --to: 60rem;
}
@keyframes heading {
  from {
    font-size: 1.5rem;
		line-height: 1.2;
		font-stretch: 50%;
		font-weight: 700;
  }
  to {
    font-size: 5rem;
		line-height: 1;
		font-stretch: 100%;
		font-weight: 400;
  }
}
```

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="QWXdZYr" data-pen-title="Typetura Headings Tutorial" data-editable="true" data-user="scottkellum" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/scottkellum/pen/QWXdZYr">
  Typetura Headings Tutorial</a> by Scott Kellum (<a href="https://codepen.io/scottkellum">@scottkellum</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>