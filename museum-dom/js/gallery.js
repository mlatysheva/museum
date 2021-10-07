const pictureInnerContainer = document.querySelector('.picture-inner-container');

const img = document.createElement('img');
img.classList.add('gallery-img')
img.src = `assets/img/galery/galery1.jpg`;
img.alt = `galery1`;
pictureInnerContainer.append(img);


function imageCache(base, firstNum, lastNum) {
  this.cache = [];
  var img;
  for (var i = firstNum; i <= lastnum; i++) {
      img = new Image();
      img.src = base + i + ".jpg";
      this.cache.push(img);
  }
}


var myCache = new imageCache("assets/img/gallery", 1, 15);

myCache = shaffle(myCache);

for (var i = 1; i<=myCache.length; i++) {
  const newImg = document.createElement('img');
  newImg.classList.add('gallery-img')
  newImg.src = myCache[i];
  newImg.alt = 'gallery';
  pictureInnerContainer.append(newImg);
}