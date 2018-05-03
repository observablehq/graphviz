import Viz from "./viz";

export default function dot(strings) {
  let string = strings[0] + "", i = 0, n = arguments.length;
  while (++i < n) string += arguments[i] + "" + strings[i];
  const fragment = html([Viz(string)]);
  const svg = fragment.removeChild(fragment.firstElementChild);
  svg.style.maxWidth = "100%";
  svg.style.height = "auto";
  return svg;
}
