// RGB Colors

var previewWidth = document.getElementById("width-in");
var previewHeight = document.getElementById("height-in");
var redValue = document.getElementById("red-in");
var greenValue = document.getElementById("green-in");
var blueValue = document.getElementById("blue-in");
var previewBtn = document.getElementById("previewBtn");
var displayEl = document.getElementById("display");
var colorText = document.getElementById("display-text");

redValue.addEventListener("input", preview);
greenValue.addEventListener("input", preview);
blueValue.addEventListener("input", preview);

function preview() {
  var red = parseInt(redValue.value);
  var green = parseInt(greenValue.value);
  var blue = parseInt(blueValue.value);

  if (red < 0) {
    red = 0;
    red.value = 0;
  } else if (red > 255) {
    red = 255;
    red.value = 255;
  }

  if (green < 0) {
    green = 0;
    green.value = 0;
  } else if (green > 255) {
    green = 255;
    green.value = 255;
  }

  if (blue < 0) {
    blue = 0;
    blue.value = 0;
  } else if (blue > 255) {
    blue = 255;
    blue.value = 255;
  }

  colorText.innerHTML = `rgb(${red}, ${green}, ${blue})`;
  displayEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

previewWidth.addEventListener("change", changeSize);
previewHeight.addEventListener("change", changeSize);

function changeSize() {
  var width = parseInt(previewWidth.value);
  var height = parseInt(previewHeight.value);

  if (width < 50) {
    width = 50;
    width.value = 50;
  } else if (width > 400) {
    width = 400;
    width.value = 400;
  }

  if (height < 50) {
    height = 50;
    height.value = 50;
  } else if (width > 200) {
    height = 200;
    height.value = 200;
  }

  displayEl.style.width = `${width}px`;
  displayEl.style.height = `${height}px`;
}
