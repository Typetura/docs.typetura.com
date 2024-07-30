---
title: Root text
description: Best practices for styling your root document text.
---

We recommend applying all your basic (paragraph) text styles to the root of your document, the `<html>` tag. Using `rem` units across your design will help you scale the layout and text across screen sizes. This way you can reference these styles throughout your website using `rem` for your root font size and `rlh` for your root line height.

## Setting up your document

As usual, you need to include [`Typetura.css`](https://github.com/Typetura/Typetura/releases/latest) onto your page. Either by linking it directly as shown below or by copying and pasting it into your stylesheet.

Additionally, now is a good time to add viewport meta tags. You’ve probably used the `viewport` one before, but the `disable-adaptations` one does essentially the same thing for the Apple Watch. Just like when iPhones first came out, websites weren’t designed for them so they scaled things down to fit and we needed to add the viewport meta tag. Now the Apple Watch is out and they introduced a new tag to disable scaling on it.

```html
<head>
  <link rel="stylesheet" href="/typetura.css">
  
  <meta name="disable-adaptations" content="watch">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
```

## Styling

We can skip defining `html` as a Typetura [element](/reference/elements), because it already is one by default. We can get straight to styling.

To avoid reflow issues ([see accessibility statement](reference/accessibility)) we are going to do something a little unconventional by starting our font size at 0%. This is because at a viewport width of `0px`, our text would have to be `0%` to fit. We want our text to scale up to a more reasonable `125%`.

```css
html {
  animation-name: html;
}
@keyframes html {
  from {
    font-size: 0%;
  }
  to {
    font-size: 125%;
  }
}
```

This is not ideal. The text is far too small. We want the text to get to a reasonable size as quickly as possible. Let’s add `--to: 30em` to get the styles changing to a smaller size, and add [`animation-timing-function: cubic-bezier(0,0.7,0.3,1);`](https://cubic-bezier.com/#0,.7,.3,1) to get things scaling up from zero quickly.

```css
html {
  animation-name: html;
	animation-timing-function: cubic-bezier(0,0.7,0.3,1);
  --to: 30em;
}
@keyframes html {
  from {
    font-size: 0%;
  }
  to {
    font-size: 125%;
  }
}
```

## Fallbacks

Typetura should be treated as progressive enhancement. It’s important to ensure styles are served to people who might be on older browsers. You can add fallbacks to your CSS, and let’s define `line-height` while we are at it.

```css
html {
  animation-name: html;
	animation-timing-function: cubic-bezier(0,0.7,0.3,1);
  --to: 30em;
  font-size: 115%;
	line-height: 1.3;
}
@keyframes html {
  from {
    font-size: 0%;
  }
  to {
    font-size: 125%;
  }
}
```

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="xxogyRM" data-pen-title="Typetura Hello World Tutorial" data-editable="true" data-user="scottkellum" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/scottkellum/pen/xxogyRM">
  Typetura Root Text Tutorial</a> by Scott Kellum (<a href="https://codepen.io/scottkellum">@scottkellum</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>