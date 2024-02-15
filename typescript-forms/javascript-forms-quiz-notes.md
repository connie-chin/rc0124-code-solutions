# javascript-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What event is fired when a user places their cursor in a form control?
  focus event
- What event is fired when a user's cursor leaves a form control?
  blur event
- What event is fired as a user changes the value of a form control?
  input event
- What event is fired when a user clicks the `"submit"` button within a `<form>`?
  submit event
- What does the `event.preventDefault()` method do?
  tells the user agent that if the event doesnt get explicitly handled, its default action should not be taken like it normally is
- What does submitting a form without `event.preventDefault()` do?
  the browser will automatically reload the page with the form's values in the URL
- What property of a form element object contains all of the form's controls.
  .elements property
- What property of a form control object gets and sets its value?
  .value property
- What is one risk of writing a lot of code without checking to see if it works so far?
  you don't know where the code went wrong
- What is an advantage of having your console open when writing a JavaScript program?
  you can see where coding mistakes happen or things don't work as planned, helpful to see the data is changing as you'd expect

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
