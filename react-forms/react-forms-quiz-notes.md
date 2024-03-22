# react-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do controlled components differ from uncontrolled components?
  A component is uncontrolled if it manages its own state, whole form is submitted with the submit button.
  A component is controlled if its state is tracked with an useState variable.
- What are some advantages of using uncontrolled components?
  easier to use with smaller projects so you dont have to set up state and event handlers on each input . info is stored in the dom//
  dont need to manually keep track of each input
- What are some advantages of using controlled components?
  react handles form data internally, and these components received the latest changes. gives u more control. its also easier to use state and send that data where ever it needs to go
- Which style do you prefer?
  uncontrolled feels simpler... controlled better for more dynamic forms that need to change the amount of input boxes
- What two props must you pass to an input for it to be "controlled"?
  the current value of the component and an update callback to the component as props

value and onChange

- What are some popular npm packages for creating forms in React?
  react hook form, formik, react final form

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
