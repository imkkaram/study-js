const images = [
    "0.JPG",
    "1.JPG",
    "2.JPG",
]

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const selectedImage = images[rand(0, images.length-1)];
document.body.style.backgroundImage = `url('img/${selectedImage}')`;
// document.body.style.backgroundSize = 'cover';
// document.body.style.backgroundRepeat = 'no-repeat';
