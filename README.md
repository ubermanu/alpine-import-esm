# AlpineJS import ES module

Allow the usage of the `$import()` function to load a module default exports into a component x-data.

### Example

```js
// example.mjs
export default {
    name: 'Test'
}
```

```html
<!-- index.html -->
<div x-data="$import('./example.mjs')">
    <p x-text="name"></p>
</div>
```
