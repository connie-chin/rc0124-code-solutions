# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  same as events in JavaScript? allow developers to respond to user interaction. triggered when certain actions occur
- What is an "event handler"? Which component declares the handler?
  component thats passed into an event prop.. the parent/one who passed it is the one who declares it. here app.tsx has and made the event handler
- How do you pass an event handler to a React component?
  add the proper prop to the element in your JSX and assign it a function that you want it to call when the event happens. //
  add onClick to the button JSX//
  on the app page, pass it on props.
- What is the naming convention for event handlers?
  start w handle, then capital letter. ex: handleClick
- What is an "event handler prop"? Which component declares the prop?
  onButtonClick is the event handler prop. the parent is the one who declares/defines it
- What are some custom event handler props a component may wish to define?
  onSubmit, className, id, onCLickCapture, onKeyDown, onMouseDown.... names that we use to pass the event handler down on. aka onButtonClick
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
