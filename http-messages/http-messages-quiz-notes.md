# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?
  service requesters, waiting on an action from the server
- What is a server?
  provider of a resource or service, returns a response/answer to the client
- Which HTTP method does a browser issue to a web server when you visit a URL?
  GET method, PUT, PATCH, POST, DELETE
- What three things are on the start-line of an HTTP **request** message?
  1)an HTTP method (a verb or a noun) that describes the actions that need to be done
  2)the request target (usually a URL but can also be absolute path, authority componenent of URL, or asterisk form )
  3)the HTTP version

- What three things are on the start-line of an HTTP **response** message?

  1)the protocol version (HTTP/1.1 or HTTP/1.0)
  2)status code that indicates the success or failure of the request(200, 404, 302)
  3)status text, brief informative textual description of the code to help a human understand the HTTP message

- What are HTTP headers?
  specify the request to be implemented, or describe the body in the message.
  a case sensitive string followed by colon and a value whose structure depends on the type of the header
- Where would you go if you wanted to learn more about a specific HTTP Header?
  MDN, dont fully need to understand this
- Is a body required for a valid HTTP request or response message?
  no.. response messages usually have a body

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
