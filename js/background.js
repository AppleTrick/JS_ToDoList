const images = ["0.png","1.png","2.png"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${choseImage}`;
bgImage.width = 1000;

document.body.appendChild(bgImage);