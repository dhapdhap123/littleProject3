const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];
const button = document.querySelector("button");
const body = document.querySelector("body");

const colorChanger = (a, b) => {
  const color1 = colors[a];
  const color2 = colors[b];
  body.style.backgroundImage = `linear-gradient(to left, ${color1}, ${color2})`;
};

const colorSellector = () => {
  const colorIndex1 = Math.floor(Math.random() * colors.length);
  let colorIndex2 = Math.floor(Math.random() * colors.length);
  if (colorIndex1 !== colorIndex2) {
    colorChanger(colorIndex1, colorIndex2);
  } else {
    return colorSellector();
  }
};

const onClick = () => {
  colorSellector();
};

button.addEventListener("click", onClick);
