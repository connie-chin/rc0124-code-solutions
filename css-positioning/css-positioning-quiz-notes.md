# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  static- put element where it normally is in document flow
- How does setting `position: relative` on an element affect document flow?
  can shift the element around the page in relation to where it was before? positions the element based on its relative position within the document flow
- How does setting `position: relative` on an element affect where it appears on the page?
  it works the opposite way? if you say top, imagine its getting pushed on top, aka moving down. imagine what the property is , youre starting from there and moving it away?
- How does setting `position: absolute` on an element affect document flow?
  in relation to the parent? positioned absolutely relative to the parent. parent needs to have a postion property that isnt static. @9 min in video... does not exist in normal document flow, sits on its own layer separate from everything else
- How does setting `position: absolute` on an element affect where it appears on the page?
  specify the distance the element should be from each of the containing elements sides
- How do you constrain an absolutely positioned element to a containing block?
  if the parent container is in a position: static
- What are the four box offset properties?
  top, right, bottom, left

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
