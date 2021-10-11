let imageToCompare = document.getElementById("explore-painting-renovated");
let slider = document.getElementById("explore-slider");
let paintingWrapper = document.querySelector(".painting-wrapper");

slider.onmousedown = function(event) {
  // prevent selection start (browser action)
  event.preventDefault(); 

  let shiftX = event.clientX - slider.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - paintingWrapper.getBoundingClientRect().left;

    // the slider is out of the paintting - keep the slider within the painting borders
    if (newLeft < -8) {
      newLeft = -8;
    }
    let rightEdge = paintingWrapper.offsetWidth - slider.offsetWidth;
      if (newLeft > rightEdge+8) {
        newLeft = rightEdge+8;
      }

    slider.style.left = newLeft + 'px';
    imageToCompare.style.width = newLeft + 15 + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
};

slider.ondragstart = function() {
  return false;
};
