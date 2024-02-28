# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && true only if all operands are true. returns the first falsy statement, if they are all true, returns the value of the last one. preserves non boolean values and returns them as they are
  || true only if one+ operands is true. outside of if statements, returns first falsy value, if not, returns value of last operand
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  (&&)if the result of one conversion is found to be false, it stops and returns the original value of the falsy operand.
  (||) from left to right, if left is falsy it stops
  test for possible short-circuit evaluations, if it finds something falsy, it stops and doesnt finish
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  returns right hand side operand if left side operand is null or undefined. diff than || because it only cares about null or undefined, vs anything falsy like ||
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  alternative to an if else statement, takes in 3 operands.
  condition ? expression to be evaluated if condition is truthy : expression to be evaluated if condition is falsy. this is concise and has a return value. doesn't execute multiple lines of code
- What is the `?.` (optional chaining) operator? When would you use it?
  accesses an objects property or calls a function, if those are undefined/null, expression short circuits and evaluates to undefined instead of throwing an error, like the dot operator but returns undefined if it can't be found versus an error
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected
- What data types can be spread into an array? Into an object?
  arrays and strings can be spread in array literals and argument lists, arrays and all primitives can be spread into objects
- How does spread syntax differ from rest syntax?
  its the opposite, spread syntax expands an array into its elements , while rest syntax collects multiple elements and "condenses" them into a single element

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
