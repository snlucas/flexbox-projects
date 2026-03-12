import { DATA_BAR } from "./data.js";
import "../components/ColorBar.js";

const container = document.querySelector(".container");
DATA_BAR.forEach((data) => {
    const newBar = document.createElement('color-bar');
    newBar.setAttribute('heigh', data.height);
    newBar.setAttribute('color', data.color);
    container.appendChild(newBar);
});