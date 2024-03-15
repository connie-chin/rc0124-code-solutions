# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  to write asynchronous code as if it were sequential (easier for humans to read)
  async = making it an async function
  await = makes the code wait at that point until the promise is settled, then the fulfilled value of the promise is treated as a return value, or the rejected value is thrown ...
  to indicate that the JavaScript runtime should wait or pause until the asynchronous function completes
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  promise.then and promise.catch are not read sequentially? sounds like they do the same but async/await is cleaner and you don't need a chain of promises. they both use promises but the syntax is different. instead of promise.then, you await the promise. execution appears to pause until the promise resolves. instead of promise.catch, you use the try/catch mechanism since await will cause a failed promise to throw an exception
- When do you use `async`?
  it annotates any function that will be using the await keyword
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  use await when you want to wait for a promise to resolve before executing the next line of code. do not use await if the function being called is not asynchronous(does not return a promise)
- How do you handle errors with `await`?
  the rejected value is thrown with the try {} catch{}
- What do `try`, `catch` and `throw` do? When do you use them?
  they are used to handle errors.
  try= attempts to execute the code in its block
  if the attempt succeeds, execution continues after the try/catch block.
  if the attempt fails because an exception is thrown, execution jumps immediately to the catch block, skipping all statements in the try block.
  throw=used to throw an exception. it indicates that an error happened that is so bad that the execution of the current code block cant continue.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the promise will continue to run asynchronously but you won't pause and wait for it. subsequent code may accidentally access the promise instead of the promise's resolved value. it a promise that is not awaited rejects, it attempts to call the reject handler, but since there isnt one, this will prob lead to unhandled promise rejection exception sometime after the current code block finishes. the catch block will not be executed.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await, once you get them they seem easy to follow

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
