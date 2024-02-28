# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  world's largest software registry: the website, command line interface (CLI), the registry
- What is a package?
  bits of reusable code, a directory with one or more files in it
- What are some other popular package managers?
  node, react?
- How can you create a `package.json` with `npm`?
  npm init --yes
- What is a dependency and how do you add one to a package?
  a dependency is any specified package, you add one with "npm install"
- What happens when you add a dependency to a package with `npm`?
  it shows up in your package.json
- What is a devDependency and how do you add one to a package?
  packages that are only used during development, like eslint to check code for potential errors. "npm install --save-dev eslint"
- How do you define and run `npm` scripts? Why are these useful?
  used to make command development commands available without the need to remember or type them out, and so you can share them across the team. you do so by adding a scripts object with a hello key to your package.json, and whatever message you want attached
  "scripts": {
  "hello": "echo Hello, LearningFuze"
  }

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
