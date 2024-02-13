# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  its the target element that initiated the event
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  bubbling, when an event happens on an element, it first runs the handlers on it, the its parents, all the way up to its ancestors. events bubble from their inner element all the way up to the surface/ancestors
- What DOM element property tells you what type of element it is?
  this(= event.currentTarget) wherever the handler runs on
- What does the `element.closest()` method take as its argument and what does it return?
  takes selectors in as argument, it returns a string of the closest element name
- How can you remove an element from the DOM?
  element.remove();
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  by adding the event listener to the parent element

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
