# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do?
    executes a provided function once for each array element.
  - What should the callback function do?
    A function to execute for each element in the array. Its return value is discarded.
  - What is `Array.forEach` useful for?
    is to execute side effects at the end of a chain, no way to stop or break a loop other than by throwing an exception. useful when u dont need a return value but want to see each element
- `Array.map`:
  - What does `Array.map` do?
    creates a new array populated with the results of calling a provided function on every element in the calling array
  - What should the callback function return?
    the callback value's return value is added as a single element in the new array. A new array with each element being the result of the callback function. returns the new altered array
  - What is `Array.map` useful for?
    when you want to create a new array with elements from another array (that have been edited or have a relational pattern)
- `Array.find`:
  - What does `Array.find` do?
    it looks for a truthy value
  - What should the callback function return?
    returns the first element in the provided array that satisfies the provided testing function, if no value satisfies the testing function, undefined is returned
  - What is `Array.find` useful for?
    looking for a specific element. the first one that passes the condition
- `Array.filter`:
  - What does `Array.filter` do?
    creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function
  - What should the callback function return?
    a shallow copy of the given array with the elements that passed the test, if none passed, returns empty array
  - What is `Array.filter` useful for?
    filtering out elements with a certain pattern that you want in a new array

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
