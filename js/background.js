const images = ["0.png","1.png","2.png","3.png","4.png","5.png","6.png"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = new Image();
bgImage.src = `img/${choseImage}`;
bgImage.classList.add("bg");

document.body.appendChild(bgImage);