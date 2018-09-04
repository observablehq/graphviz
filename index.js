import Viz from "./viz.js";
import {render, Module} from "./viz-lite.render.js";

function Dot(options) {
  const viz = new Viz({render, Module: () => Module(options)});
  return async function dot(strings) {
    let string = strings[0] + "", i = 0, n = arguments.length;
    while (++i < n) string += arguments[i] + "" + strings[i];
    const svg = document.importNode(await viz.renderSVGElement(string, options), true);
    svg.style.maxWidth = "100%";
    svg.style.height = "auto";
    return svg;
  };
}

const dot = Dot({});
dot.options = Dot;
export default dot;
