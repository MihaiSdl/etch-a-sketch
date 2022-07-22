const defaultInput = document.getElementById("defaultSizeButton");
defaultInput.addEventListener("click", () => gridCreator(8));

const container = document.getElementById("mainContainer");

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

        cell.addEventListener('mouseout', function handleMouseOut() {
            cell.style.backgroundColor = 'black';
        });
    };
}