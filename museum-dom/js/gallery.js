const pictureInnerContainer = document.querySelector('.picture-inner-container');

const gallerySrc = new Array(15).fill('')
  .map((item, index) => item = `assets/img/galery${index + 1}.jpg`)
  .sort(() => Math.random() - 0.5)
  .forEach(item => {
    const img = document.createElement('img');
    img.src = item;
    img.alt = "Louvre collection";
    pictureInnerContainer.append(img);
  })