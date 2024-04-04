# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is Express middleware?
  a function that fulfills the requested action. like an array of functions held by the Express process..
  functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request response cycle.
- What is Express middleware useful for?
  executing any code, making changes to the request and response objects, end the request-response cycle, call the next middleware function in the stack...
  creating routes, responding
- How do you mount a middleware with an Express application?
  calling a special function, like use or get, which adds the function to the middleware array

app.use([path], callback [callback])... middleware function is executed when the base of the requested path matches the path

the HTTP method and path need to match the HTTP request for the middleware function to be called, if not it skips it and moved onto the next mounted middleware...

can mount when calling the method.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  the request and response objects

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
