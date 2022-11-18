# @observablehq/graphviz

Convenience methods for using [Graphviz](http://www.graphviz.org/) in [Observable](https://observablehq.com). See this notebook for examples:

https://beta.observablehq.com/@mbostock/graphviz

Usage:

## ESM

```js
import dot from "@observablehq/graphviz";
const svg = dot`graph { n0 -- n1 -- n2 -- n3 -- n0; }`;
document.body.appendChild(svg);
```

## IIFE

```html
<script src="https://cdn.jsdelivr.net/npm/@observablehq/graphviz/dist/graphviz.min.js"></script>
<script>
    O.then(function(dot) {
        var svg = dot`graph { n0 -- n1 -- n2 -- n3 -- n0; }`;
        document.body.appendChild(svg);
    });
</script>
```

## d3-require

```html
<script src="https://cdn.jsdelivr.net/npm/d3-require@1"></script>
<script>
    d3.require("@observablehq/graphviz").then(dot => {
        var svg = dot`graph { n0 -- n1 -- n2 -- n3 -- n0; }`;
        document.body.appendChild(svg);
    });
</script>
```

## RequireJS

```html
<script src="https://cdn.jsdelivr.net/npm/d3-require@1"></script>
<script>
    d3.require("@observablehq/graphviz").then(dot => {
        var svg = dot`graph { n0 -- n1 -- n2 -- n3 -- n0; }`;
        document.body.appendChild(svg);
    });
</script>
```
