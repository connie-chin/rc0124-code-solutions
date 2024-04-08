# express-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the significance of an HTTP request's method?
  determines the selected action to perform, signifies the expectations of what should be going on
- What is the significance of an HTTP response's status?
  letting you know whats happening with the request, if its successful or not... info about what happened. w proper status codes, it will let the client know what's wrong w them. if there is something wrong w our server, they only get to know that there was an error (to prevent hacking into database)
- What does the express.json() middleware do and when would you need it?
  parses incoming requests with JSON payloads and is based on body-parser. returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option... when it's called, it returns a function to us. use calls it on each request. if there is json info it converts to what it was before and attaches to the body property. use every time u pass json info

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
