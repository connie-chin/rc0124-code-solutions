# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What browser function can be used to make HTTP requests to a server in React?
  Fetch().. built in javascript function
- What two things need to be done to properly handle HTTP request errors? Why?
  try/catch block. and checking the response.ok property- if we make contact with the server (via the fetch request), it wont throw an error.. the ok property lets us know if our request was fulfilled the way we wanted it to be. this depends on whether the status code coming back was not a 200. if it was then ok, if not, then not ok
- How can `useEffect` be used to load data for a component?
  once the component loads, it will fetch the data that we need. allows us to do something after the component loads.
- How do you use `useEffect` to load component data just once when the component mounts?
  with an empty dependency array
- How do you use `useEffect` to load component data every time the data key changes?
  putting the state variable(in this case) in the dependency array
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  react query and vercel swr

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
