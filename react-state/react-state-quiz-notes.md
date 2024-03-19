# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  a way for state variables to retain the data between renders, and a state setter function to update the variable and trigger React to render the component again//

useState or other functions starting with use, they are special functions that are only available while React is rendering. they let you hook into different React features//

allow us to incorporate some outside functionality.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  hooks (functions starting with use) can only be called at the top level of your components or your own hooks, they are functions, but they are unconditional declarations about your components needs, only called within hooks?
  const [something, setSomething] = useState(0)
- What is the purpose of state in React?
  you're telling React that you want it to remember something between renders//
  keep track of persistent data, and use it to affect the DISPLAY of a component
- Why can't we just maintain state in a local variable?
  by default, data in component local variables does not persist between re-renders//state triggers re renders, local variable does not trigger re render
- What two actions happen when you call a `state setter` function?
  calls the useState function with an initial state value, creates a state variable and assigns it the initial state value,//

state setter updates value, and triggers the rerender

- When does the local `state variable` get updated with the new value?
  when the component rerenders //like when a record plays, it wont stop til its done

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
