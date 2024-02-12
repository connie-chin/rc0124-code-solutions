# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to see our code is doing what we want it to do
- What is the purpose of events and event handling?
  events are things that happen in the system you are programming, the system tells you with a signal when it happens, and provides how an action can be taken in response to it.. to react to the event you use event handling. its a block of code that runs in response to the event?
- Are all possible parameters required to use a JavaScript method or function?
  no they are optional
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener?
- What is a callback function?
  a function passed into another function as an argument, which is then invoked inside the outer function to complete some action
- What object is passed into an event listener callback when the event fires?
  event object. the object passed in when it fires
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  its the place the event takes place, you can console.log it, googling event.target for more info on mdn
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  here the handleClick function is not being called, its definition is?, which is correct. being called asynchronously
  ```js
  element.addEventListener('click', handleClick());
  ```
  here the handleClick function is being called, whcih is not correct. both would be called at the same time. doesnt wait for you to click. being called synchronously

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
