# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  when its first added to the DOM and drawn on the page. two common most times are:
  -1: when running a timer like stopwatch or carousel
  -2: when retrieving data from an API or database
- What is a React Effect?
  when the component mounts and it fetches data from the API asynchronously and displays the data when the API returns it .. used with useEffect hook//
  Effects let you specify side effects that are caused by rendering itself, rather than by a particular event//
  side effect to whatever is going on outside the rendering?
- When should you use an Effect and when should you not use an Effect?
  only use when you want to "step out" of your React code and synchronize with some external system like browser APIs, third party widgets, network, etc.//// only use when want to interact w outside system
  dont use when you just need to adjust some state based on other state
- When do Effects run?
  by default, they run after every render (need to specify the Effect dependencies to change this)... after the screen updates is when effect runs, it will only run again if one of the dependencies changes
- What function is used to declare an Effect?
  useEffect hook(setup, dependencies)... it delays a piece of code from running until that render is reflected on the screen
- What are Effect dependencies and how do you declare them?
  controls when Effect will run (default is after every render, which you dont want)...
  you can tell React to skip unnecessarily re-running the Effect by specifying an array of dependencies as the second argument to the useEffect call.. add an empty array after '},[isPlaying]'.. Effect depends on isPlaying prop so it decides what to do, aka you need to pass it in. sometimes it doesnt matter so nothing needs to be passed in// variables that when changed cause it to run again ... dependency array
- Why would you want to clean up from an Effect?
  to undo what you did. connect needs to disconnect, subscribe needs to unsubscribe, fetch needs to cancel or ignore//
  to reduce memory leaks and make sure effects dont pile on top of eachother ... hey 3rd party api, u connected now u can disconnect
- How do you clean up from an Effect?
  return a cleanup function from your Effect
  useEffect(() => {
  const connection = createConnection();
  connection.connect();
  return () => {
  connection.disconnect();
  };
  //return a function
  }, []);
- When does the cleanup function run?
  each time before the Effect runs again, and one final time when the component unmounts (gets removed)

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
