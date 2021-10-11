const bullets = document.querySelectorAll('.slider-bullet');
const firstNumber = document.querySelector('.slider-first-number');
const welcomeContainer = document.getElementById('welcome-container');
const backwardArrow = document.querySelector('.arrow-backward');
const forwardArrow = document.querySelector('.arrow-forward');
const imageArray = ['./assets/img/welcome-slider-1.jpeg', './assets/img/welcome-slider-2.jpeg', './assets/img/welcome-slider-3.jpeg',
'./assets/img/welcome-slider-4.jpeg', './assets/img/welcome-slider-5.jpeg'];

// change images by clicking on the bullets
bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    welcomeContainer.style.backgroundImage = `url(${imageArray[index]})`;
    bullets.forEach((element) => {
      element.classList.remove("active")
    })
    bullet.classList.toggle("active");
    firstNumber.innerHTML = `0${index+1}`;
  });
});

// change images backward
function slidingBackward () {
  let nextImageIndex;
  const currentImage = window.getComputedStyle(welcomeContainer).getPropertyValue('background-image');
  let currentImageIndex = parseInt(currentImage.charAt(currentImage.length-8));
  if (currentImageIndex === 1) {
    nextImageIndex = 5;
  } else {
    nextImageIndex = currentImageIndex - 1;
  }
  bullets.forEach((bullet) => {
    bullet.classList.remove("active")
  })  
  welcomeContainer.style.backgroundImage = `url('${imageArray[nextImageIndex-1]}')`;
  firstNumber.innerHTML = `0${nextImageIndex}`;
  bullets.item(nextImageIndex-1).classList.toggle("active");
}

// change images forward
function slidingForward() {
  let nextImageIndex;
  const currentImage = window.getComputedStyle(welcomeContainer).getPropertyValue('background-image');
  let currentImageIndex = parseInt(currentImage.charAt(currentImage.length-8));
  if (currentImageIndex === 5) {
    nextImageIndex = 1;
  } else {
    nextImageIndex = currentImageIndex + 1;
  }   
  bullets.forEach((bullet) => {
    bullet.classList.remove("active")
  })
  welcomeContainer.style.backgroundImage = `url('${imageArray[nextImageIndex-1]}')`;
  firstNumber.innerHTML = `0${nextImageIndex}`;
  bullets.item(nextImageIndex-1).classList.toggle("active");
}

// change images by clicking on the backward arrow
backwardArrow.addEventListener('click', slidingBackward);
// change images by clicking on the forward arrow
forwardArrow.addEventListener('click', slidingForward);

const swipedetect = (el) => {
  
	let surface = el;
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

	surface.addEventListener('mousedown', function(e){
		startX = e.pageX;
		startY = e.pageY;
		startTime = new Date().getTime();
		e.preventDefault();
	}, false);

	surface.addEventListener('mouseup', function(e){
		distX = e.pageX - startX;
		distY = e.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime <= allowedTime){
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
				if ((distX > 0)) {
					if (isEnabled) {
						slidingForward();
					}
				} else {
					if (isEnabled) {
						slidingBackward();
					}
				}
			}
		}
		e.preventDefault();
	}, false);

	surface.addEventListener('touchstart', function(e){
		if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
			if (e.target.classList.contains('left')) {
				if (isEnabled) {
					slidingBackward();
				}
			} else {
				if (isEnabled) {
					slidingForward();
				}
			}
		}
			var touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {
								if (isEnabled) {
									slidingBackward();
								}
							} else {
								if (isEnabled) {
									slidingForward();
								}
							}
					}
			}
			e.preventDefault();
	}, false);
}

var el = document.querySelector('.welcome-container');
swipedetect(el);
