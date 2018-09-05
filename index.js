import {render, Module} from "./viz-lite.render.js";

const defaults = {files: [], format: "svg", engine: "dot"};

function Dot(options) {
  const module = Module(options = Object.assign({}, defaults, options));
  return async function dot(strings) {
    let string = strings[0] + "", i = 0, n = arguments.length;
    while (++i < n) string += arguments[i] + "" + strings[i];
    const template = document.createElement("template");
    template.innerHTML = await render(module, string, options);
    const svg = document.importNode(template.content.firstElementChild, true);
    svg.style.maxWidth = "100%";
    svg.style.height = "auto";
    return svg;
  };
}

const dot = Dot({});
dot.options = Dot;
export default dot;
