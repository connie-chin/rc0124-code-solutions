# javascript-functions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a function in JavaScript?
  a way to reuse the same block of code throughout a program... once defined, its just a special kind of object that is callable
- Describe the parts of a function **definition**.
  function keyword, optional name, parentheses to enclose the parameters separted by commas, opening curly brace before the code block, optional return statement, closing curly brace
- Describe the parts of a function **call**.
  function name, with parentheses with arguments inside of it separated by commas if it had parameters
- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?
  function definition defines what code will be executed(it's chunkier) and it says function,
  function call is simpler and you just call the name w the arguments you are passing, it also doesn't say function or the block of code its executing
- What is the difference between a **parameter** and an **argument**?
  a parameter is used when you define the function- its a placeholder bc the value is not known yet, ... define function, declare parameters
  an argument is used when you call the function, its the value that gets put in the parameter's place... call function, pass arguments
- Why are function **parameters** useful?
  it allows us to run the code and modify it with each call?, like w say hello, each time it can be a different name , vs just saying hello world everytime. allows
- What two effects does a `return` statement have on the behavior of a function?
  gives us a value from the function- lets us have the result of calling a function and stores it into a variable outside of the function, and stops the code block from being run. ends the code
  -what is the syntax for defining an arrow function?
  declaring variable name, assignment operator, parameters in parentheses separaated by comma, and arrow, (opening curly brace) <= dont need
  -when an arrow function's body is not surrounded in curly braces (concise body syntax), what changes in its functionality?
  it implicitly returns a value without using return keyword... must have no return statement, no curly brace, and only be 1 line of code

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
