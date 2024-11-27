import './style.css'

const dom = {};

const setupDOM = () => {
  dom.slider = document.getElementById("grid-slider");
  dom.sliderValue = document.getElementById("grid-slider-value");
  dom.sketchContainer = document.getElementById("grid-container");

}

const updateGrid = (size) => {
  dom.sketchContainer.innerHTML = "";
  dom.sketchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  dom.sketchContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  const totalCells = size * size;
  for (let i = 0; i < totalCells; i++ ) {
    const cell = document.createElement("div");
    cell.classList.add('grid-item');
    dom.sketchContainer.appendChild(cell);
  }
};





setupDOM();

dom.sliderValue.innerHTML = dom.slider.value;


dom.slider.oninput = function() {
  dom.sliderValue.innerHTML = this.value;

}

dom.slider.onmouseup = () => {
  updateGrid(dom.slider.value);
}


console.log(dom.slider.value)


updateGrid(dom.slider.value)
