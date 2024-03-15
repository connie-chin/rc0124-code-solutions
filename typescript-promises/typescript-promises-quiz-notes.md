# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  when a promise is made, the task is put onto the event queue, synchonous execution of the calling code continues until the end of the function, after the function completes, the event loop runs, promise task is taken from event queue to be executed. after promise task completes , if successfully, then handler is called, if completed w error, catch handler is called, after finally handler is called
- What are the three states a Promise can be in?
  pending (the initial state), fulfilled (operation was completed successfully), and rejected (operation failed)
- How do you handle the fulfillment of a Promise?
  .then
- How do you handle the rejection of a Promise?
  .catch

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
