import terser from "@rollup/plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default [
  {
    input: "index.js",
    plugins: [
      nodeResolve()
    ],
    output: {
      extend: true,
      banner: `// @observablehq/graphviz Copyright ${(new Date).getFullYear()} Observable, Inc.
// @hpcc-js/wasm Copyright © 2019-present hpccsystems.com`,
      file: "dist/graphviz.js",
      format: "es",
    }
  },
  {
    input: "index.js",
    plugins: [
      nodeResolve(),
      replace({
        preventAssignment: false,
        delimiters: ['', ''],
        values:{
          'await Dot': 'Dot'
        }
      }),
      terser({
        output: {
          preamble: `// @observablehq/graphviz Copyright ${(new Date).getFullYear()} Observable, Inc.
// @hpcc-js/wasm Copyright © 2019-present hpccsystems.com`,
        }
      })
    ],
    output: {
      extend: true,
      file: "dist/graphviz.min.js",
      format: "umd",
      name: "O"
    }
  }
];
