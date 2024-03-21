# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to dynamically create a list of React components?
  when you have a list of content that differ in data
- Why is it important for React components to be data-driven?

- Where in the component code would a list of React components typically be built?
  where you return in JSX
- What `Array` method is commonly used to create a list of React components?
  maps and filter
- Why do components in a list need to have unique keys?
  because keys tell React which array item each component corresponds to, so that it can match it up later. important for when you move , insert, or delete array items
- What is the best value to use as a "key" prop when rendering lists?
  database Keys/IDs, or locally generated data- use a counter ( crypto.randomUUID() or a package like uuid when creating items.)

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
