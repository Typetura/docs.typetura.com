---
title: Styles
---

There are two parts of styling to go through. One is the [element styles](#element-styles), and the other is [keyframe styles](#keyframe-styles). Element styles configure the element you wish to style to receive keyframes, and keyframes hold all the styles that interpolate as size changes.

## Element styles

Setting up Typetura styles on the element you are working with can be done using the following properties. The only required property to get Typetura working is `animation-name: <name>`. It should be the `<name>` that references your `@keyframes <name>`.

| Property                    | Description                                                  | Type / Options                                    | Default                    |
| --------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |----------------------------|
| `animation-name`            | The name of your `@keyframes` animation.                     | `<string>`                                                   | `none` |
| `animation-timing-function` | The easing curve that defines how the text scales across widths. | `linear`,<br />`ease`,<br />`ease-in`,<br />`ease-out`,<br />`ease-in-out`,<br />`cubic-bezier()`,<br />`steps()` | `linear` |
| `--from`                    | The breakpoint at which the styles start changing. | `<length>`                                                   | `0` |
| `--to`                      | The breakpoint at which the styles stop changing. | `<length>`                                                   | `60rem` |
| `--container`              | Rarely used. Do not change if you don’t know what you are doing. If you need to change the container this references, you can do that here. | `<length>`                                                   | `100cqi` or `100vi` |

Additionally, be sure to add fallback styles and treat everything in the keyframe styles as progressive enhancement.

## Keyframe styles

Write your keyframes how you normally would for any [CSS animation](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes). You can use the keywords `from` and `to`, or you can use percentages. You can add as many keyframes as you wish to these animations. You can use any interpolable CSS property here.

```css
@keyframe my-animation {
  from {
    font-size: 1rem;
    line-height: 1.2;
    font-weight: 600;
    color: #906;
  }
  to {
    font-size: 5rem;
    line-height: 1;
    font-weight: 300;
    color: #f29;
  }
}
```

