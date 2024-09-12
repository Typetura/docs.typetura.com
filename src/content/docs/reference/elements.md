---
title: Elements
---

Typetura uses a cocktail of animation styles to make everything work. You’ll need to apply these styles by either using the utility classes or by modifying the selector list.

## Default element styling and utility classes

- **`--tt: var(--on);`:** Add this to your style sheet for any element you wish to have Typetura styles.
- **`.tt` and`.typetura`:** are default element selectors. After applying these classes to an element, you can start writing your Typetura CSS styles to that element.
- **`html` and `.rtt`:** These default element selectors reference the root of the document as the [container](/reference/containers). Even when used inside of a container query, they will reference the root of the document.

## html element

By default, `html` is already a Typetura element _and_ [container](/reference/containers). We have found it is extremely useful to dynamically manage the root font [styles](/reference/styles) on the `<html>` element. Visit [our guide on root text styling](/guides/root-text) for an example of how this is done.

## Modifying selectors in the source

_As of v4.1.1 you can assign typetura styles to any element using the property `--tt: var(--on);` in your CSS. This reduces the need to modify the source CSS file._

The Typetura element selectors are on [lines 28-31 of the typetura.css source file](https://github.com/Typetura/Typetura/blob/v4/typetura.css#L28-L31). You can add and remove selectors there to fit your project.

The root Typetura element selector is on [line 54 of the typetura.css source file](https://github.com/Typetura/Typetura/blob/v4/typetura.css#L54).
