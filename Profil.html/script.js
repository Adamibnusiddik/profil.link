let currentImageIndex = 0;

const images = ["img/kyubee.png", "img/bleach.jpg", "img/onepiece.jpeg"]

function changebodyImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector(
      "body"  
    ).style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

setInterval(changebodyImage,2000);

