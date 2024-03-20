# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  same as events in JavaScript? allow developers to respond to user interaction. triggered when certain actions occur
- What is an "event handler"? Which component declares the handler?
  a way to let parent components make decisions based on events that happen on child components. event handlers are communication between parent and child components. the child component declares the handler///
  event handlers are your own functions that will be triggered in response to certain interactions (clicking, hovering, focusing form input), declare the event handler inside of the component you want it on.
- How do you pass an event handler to a React component?
  add the proper prop to the element in your JSX and assign it a function that you want it to call when the event happens. //
  add onClick to the button JSX
- What is the naming convention for event handlers?
  start w handle, then capital letter. ex: handleClick
- What is an "event handler prop"? Which component declares the prop?
  in react we give the event handler prop tp the child, so it can communicate with its parent. The child provides a prop like onClick that the parent can assign a handler to
- What are some custom event handler props a component may wish to define?
  onSubmit, className, id, onCLickCapture, onKeyDown, onMouseDown
- What is the naming convention for custom event handler props?
  onXxxx where Xxx is the event.

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
