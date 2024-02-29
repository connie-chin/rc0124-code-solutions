# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  to write asynchronous code as if it were sequential (easier for humans to read)
  async = making it an async function
  await = makes the code wait at that point until the promise is settled, then the fulfilled value of the promise is treated as a return value, or the rejected value is thrown ...
  to indicate that the JavaScript runtime should wait or pause until the asynchronous function completes
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  promise.then and promise.catch are not read sequentially? sounds like they do the same but async/await is cleaner and you don't need a chain of promises
- When do you use `async`?
  when you want to return a promise or use promise chains
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  can only use await inside an async function. await forces async operations to be completed in series. use it if the result of the next operation depends on the result of the last one

don't use await if you need something where all the promises are fulfilled, just promise.all()

use await when you want an async function to run asynchronously, don't use it if you want it to run synchronously

- How do you handle errors with `await`?
  the rejected value is thrown with the try {} catch
- What do `try`, `catch` and `throw` do? When do you use them?
  they are used to handle errors
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the promise is rejected?
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
