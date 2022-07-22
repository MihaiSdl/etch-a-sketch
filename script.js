const defaultInput = document.getElementById("defaultSizeButton");
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const container = document.getElementById("mainContainer");

sizeSlider.onchange = (e) => updateSize(e.target.value);
sizeSlider.onchange = (e) => updateSizeDisplay(e.target.value)


function updateSize(input) {
    clearGrid();
    gridCreator(input);
  }
  
  function clearGrid() {
    container.innerHTML = '';
  }

function gridCreator(squareNumber) {

    container.style.setProperty('--grid-rows', squareNumber);
    container.style.setProperty('--grid-cols', squareNumber);

    for (var i = 0; i < (squareNumber * squareNumber); i++) {
        let cell = document.createElement("div");
        cell.style.borderStyle = "solid";
        cell.style.borderColor = "white";
        container.appendChild(cell).className = "grid-item";

        cell.addEventListener('mouseover', function handleMouseOver() {
            cell.style.backgroundColor = 'red';
        });

    };
}