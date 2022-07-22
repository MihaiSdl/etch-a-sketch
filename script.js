const defaultInput = document.getElementById("defaultSizeButton");
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const container = document.getElementById("mainContainer");

sizeSlider.onchange = (e) => updateSize(e.target.value);
sizeSlider.onmousemove = (e) => updateSizeDisplay(e.target.value)


function updateSize(input) {
    clearGrid();
    updateSizeDisplay(input);
    gridCreator(input);
    
}

function updateSizeDisplay(input) {
    sizeValue.textContent = `${input} x ${input}`
}
  
  function clearGrid() {
    container.innerHTML = '';
  }

function gridCreator(squareNumber) {

    container.style.setProperty('--grid-rows', squareNumber);
    container.style.setProperty('--grid-cols', squareNumber);

    for (var i = 0; i < (squareNumber * squareNumber); i++) {
        let cell = document.createElement("div");

        container.appendChild(cell).className = "grid-item";

        cell.addEventListener('mouseover', function handleMouseOver() {
            cell.style.backgroundColor = 'black';
        });

    };
}