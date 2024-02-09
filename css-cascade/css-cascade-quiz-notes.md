# css-cascade-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the four components of "the Cascade".
  source order, inheritance, specificity, !important
- What does the term "source order" mean with respect to CSS?
  the order that your CSS rules are written in your stylesheet. the last one in your stylesheet takes precedence
- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  inheritance, if the child property has no value specified on its element, it gets values from the parent element
- List the three selector types in order of increasing specificity.
  ID(1 0 0), CLASS(0 1 0), TYPE(0 0 1) 1 1 1 .. first compare ID- if one is higher it wins, if equal, goes to the next section of CLASS.... then TYPE. like boxing rounds for each, but if there is a winner in the first ones it wont go on
- Why is using `!important` considered bad practice?
  used to override inline styles (have the highest specificity), bad practice because it reverses cascade order of stylesheets,

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
