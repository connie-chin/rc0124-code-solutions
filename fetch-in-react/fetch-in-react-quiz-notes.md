# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What browser function can be used to make HTTP requests to a server in React?
  Fetch()
- What two things need to be done to properly handle HTTP request errors? Why?
  throwing an error if the response wasn't okay, and adding a catch block that sets the error with an error message?
- How can `useEffect` be used to load data for a component?
  by calling the loading function inside the useEffect's callback function
- How do you use `useEffect` to load component data just once when the component mounts?
  with an empty dependency array
- How do you use `useEffect` to load component data every time the data key changes?
  putting the state variable in the dependency array
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
