# http-messages-recap-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?
  initiate communication sessions with servers through requests. hardware of software that formulates a request
- What is a server?
  await incoming requested, provide the service via a response. hardware or software
- Which HTTP method does a browser issue to a web server when you visit a URL?
  GET method, POST, PUT, PATCH, DELETE. these are semantic names that should do things- just by calling, its not doing things. dont have inherit functionality attached to them
- What is on the first line of an HTTP **request** message?
  the HTTP mthod, the request target, and the HTTP version of the request being made
- What is on the first line of an HTTP **response** message?
  protocol version(HTTP/1.1 or HTTP/1.0), status code (indicates success or failure of request), status text (textual description of the status code)
  ex: HTTP/1.1 404 not found
- What are HTTP headers?
  specify the request to be implemented. a case-insensitive string followed by a colon.. object that allow additional info to be passed along
- Is a body required for a valid HTTP message?
  no its optional. u can pass info along on the body, but don't need to. not required for a request

## Notes

purpose of this exercise is exposure to how to see requests and responses. HTTPIE or HTTP in terminal

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
