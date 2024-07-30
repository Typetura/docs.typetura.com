---
title: Containers
---

By default, the container is the viewport, but you can define containers that Typetura uses to observe width changes by using CSS Container queries. You have the choice to decide what element you want to be responsive to.

## The utility class

Add the class `cq` to any element to create a new container

```html
<article class="cq">
  Your content goes here
</article>
```

## The CSS

Alternatively, you can style elements directly with CSS to create a container using `container-type: inline-size;`.

```css
article {
  container-type: inline-size;
}
```

Now, [Typetura elements](/reference/elements) inside these containers will respond to changes in container width instead of viewport width.

## Overriding the container

The custom CSS property `--container` on the [Typetura element](/reference/elements) looks for the container context. This can be overridden with the `rtt` or “root Typetura” utility class on the Typetura element, or you can specify `--container` using whatever length measurement you wish. The default value for `--container` is `100vw`, or `100cqi` when available. Learn more in the next section on Typetura elements.
