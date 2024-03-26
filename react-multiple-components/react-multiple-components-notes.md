# react-multiple-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the phases in the React design process?
  1)starting from a UI mockup, indetify pieces that would make good components
  2)determine the UI state that must be held in the components and where that state should live.
  3)determine the events(actions) that need to modify state, which child components they originate in, and how parent components should respond to them
- How does data flow in React?
  -state can only flow from parent to child, as props
- How can children components modify state in their parents?
  by calling "event handler props", props start with "on" and are declared in child components, parent pass handler functions to these props and start with "handle",

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
