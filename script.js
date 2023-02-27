const sliderContainer = document.createElement('div');
sliderContainer.classList.add('slider-container');
document.body.appendChild(sliderContainer);

const sliderText = document.createElement('p');
sliderText.classList.add('slider-text');
sliderContainer.appendChild(sliderText);

const pixelSlider= document.createElement('input');
pixelSlider.classList.add('pixel-slider');
pixelSlider.type = "range";
pixelSlider.min = 4;
pixelSlider.max = 64;
pixelSlider.value = 16;
sliderContainer.appendChild(pixelSlider); 
let size = pixelSlider.value;
sliderText.innerHTML = `${size} X ${size}`;

const squareContainer = document.createElement('div');
squareContainer.classList.add('square-container');
document.body.appendChild(squareContainer);

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
document.body.appendChild(buttonContainer);

const resetButton = document.createElement('button');
resetButton.classList.add('button');
resetButton.innerHTML = 'Reset';
buttonContainer.appendChild(resetButton);

const rainbowButton = document.createElement('button');
rainbowButton.classList.add('button');
rainbowButton.innerHTML = 'Rainbow';
buttonContainer.appendChild(rainbowButton);

const grayScaleButton = document.createElement('button');
grayScaleButton.classList.add('button');
grayScaleButton.innerHTML = 'Grayscale';
buttonContainer.appendChild(grayScaleButton);

for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    squareContainer.appendChild(square);
}

const mainCornerSize = squareContainer.clientWidth;
pixelSlider.addEventListener('input', function(e) {
    size = e.target.value;
    let newSquareSize = pixelResize(mainCornerSize, size);
    while (squareContainer.firstChild) {
        squareContainer.removeChild(squareContainer.lastChild);
    }

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        squareContainer.appendChild(square);
        square.style.cssText = `width: ${newSquareSize}px; height: ${newSquareSize}px`;
    }
    sliderText.innerHTML = `${size} X ${size}`;
    squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', function(e) {
            let newColor = randomColor(colorMode);
            square.style.cssText = `width: ${newSquareSize}px; height: ${newSquareSize}px; ${newColor}`;
        })
    })
})

function pixelResize(mainCornerSize, size) {
    let newSquareSize = mainCornerSize / size;
    return newSquareSize;
}



let colorMode;
const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        colorMode = e.target.innerHTML;
        console.log(colorMode);
})
})

function randomColor (colorMode) {
    if (colorMode === "Rainbow") {
        let redIndex = Math.floor(Math.random()*256);
        let greenIndex = Math.floor(Math.random()*256);
        let blueIndex = Math.floor(Math.random()*256);
        return `background-color: rgb(${redIndex}, ${greenIndex}, ${blueIndex})`;
    } else if (colorMode === "Grayscale") {
        let redIndex = Math.floor(Math.random()*150);
        let greenIndex = redIndex;
        let blueIndex = greenIndex;
        return `background-color: rgb(${redIndex}, ${greenIndex}, ${blueIndex})`;
    } else if (colorMode === "Reset") {
        return "#413D3D";
    }
}

squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', function(e) {
            let newColor = randomColor(colorMode);
            e.target.style.cssText = newColor;
        })
    })


