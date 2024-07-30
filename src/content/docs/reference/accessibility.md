---
title: Accessibility
---

Typetura is designed to allow for highly dynamic text that is legible across all screen sizes, from the big screen to a watch. Our priority is to do this without overflows forcing people to scroll horizontally to read ([WCAG SC 1.4.10](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)). Our secondary priority is allowing all content to scale 200% ([WCAG SC 1.4.4](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html)). Working with a highly responsive framework can force you to consider your priorities. We believe it is a bad reading experience to scale headlines as large as they can be, and then increase that size another 200%. Our goal is to provide an optimal reading experience for everyone.

These priorities aren’t inherent to Typetura as a technology, they are considerations to be made with breakpoints and `clamp()`. These priorities exist in our documentation and our work. We recommend you consider your own priorities when working with this framework, as well as considering our priorities when reading our documentation.

## Relative sizes

We recommend your font sizes be at least 16px at a viewport width of 320 CSS pixels with an ideal font size of around 18px to 20px for body copy and a browser base font size set to 16px. We also recommend you **do not set these sizes using `px`**. Instead, use `%` on the root of your document. This allows for user font size preferences to be respected. Reference this root font size throughout your document by using the `rem` unit. To keep the line-height proportional, use a unitless ratio as your value for `line-height`.

To recap

- Set the font size on the root of your document using `%` units. Ideally anywhere from `100%` to `125%` from a minimum viewport width of 320 CSS pixels.
- Use `rem` for font sizes and layout elsewhere in your document. These will reference the root font size you have set up earlier.
- Always use a unitless `line-height` value as a ratio, like `1.25` for one and a quarter line spacing. This will ensure your line height is consistent as your text scales.

Caveat: Everyone’s workflow is different. While we strongly recommend using relative sizes, design tools do not support relative sizing. Typetura is unit agnostic. You can use pixels, inches, points, and picas if you want to. We still recommend relative units though 😉

## Browser zoom

[WCAG SC 1.4.4](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html) requires that all text can be scaled to 200% or higher, with the consideration that most browsers can scale 400%. A small viewport is defined as 320 CSS pixels wide, and a large viewport is defined as 1280 CSS pixels wide as defined in [WCAG SC 1.4.10](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html).

We recommend ensuring that your root text can be scaled 200% using your browser zoom from a minimum viewport size of 320px wide. Ensure all headlines do not fall below the size of your root text by never using a value below `1rem`. This will ensure all text is as legible as possible to your audience. WCAG SC 1.4.4 recommends that headlines follow this 200% zoom rule as well. There is some [discussion questioning the helpfulness of 1.4.4 applying to large headlines](https://github.com/w3c/wcag/issues/1671), but please consider your project’s goals in implementing this.

## Large headlines and internationalization

Typetura allows you to make your headlines very large. Please consider your language support and that English has very short words while German has very long words. To pass WCAG 1.4.10 you should not make readers of your website scroll horizontally to read the text. In our opinion this should be the primary accessibility consideration.
