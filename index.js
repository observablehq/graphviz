import {Graphviz} from "@hpcc-js/wasm/graphviz";

const defaults = {files: [], format: "svg", engine: "dot", images: []};

async function Dot(options) {
  options = Object.assign({}, defaults, options);
  const graphviz = await Graphviz.load();
  return function dot(strings) {
    let string = strings[0] + "", i = 0, n = arguments.length;
    while (++i < n) string += arguments[i] + "" + strings[i];
    const template = document.createElement("template");
    template.innerHTML = graphviz.layout(string, options.format, options.engine, {files: options.files, images: options.images});
    const svg = document.importNode(template.content.firstElementChild, true);
    svg.style.maxWidth = "100%";
    svg.style.height = "auto";
    return svg;
  };
}

const dot = await Dot({});
dot.options = await Dot;
export default dot;
