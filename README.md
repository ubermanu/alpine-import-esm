# AlpineJS import ES module

Allow the usage of the `$import()` function to load a module default exports into a component x-data.

### Install

Node

    npm i alpine-import-esm

Browser

```html
<script src="dist/alpine-import-module.cjs"></script>
```

### Example

Here is a basic example:

```js
// example.mjs
export default {
    name: 'Test'
}
```

The default object will be merged into the component data:

```html
<!-- index.html -->
<div x-data="$import('./example.mjs')">
    <p x-text="name"></p>
</div>
```
