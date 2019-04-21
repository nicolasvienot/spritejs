img = new Image();
img.src = "./common/images/sonic.png";

img.onload = function() {
    init();
};


// let canvas = document.getElementById("sonic");
// let ctx = canvas.getContext('2d');

const scale = .5;
const width = 110;
const height = 120;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function init() {
    ctx.drawImage(img, 0, 0, width, height, 0, 0, scaledWidth, scaledHeight);
    ctx.drawImage(img, width, 0, width, height, scaledWidth, 0, scaledWidth, scaledHeight);
    ctx.drawImage(img, width*2, 0, width, height, scaledWidth*2, 0, scaledWidth, scaledHeight);
    ctx.drawImage(img, width*3, 0, width, height, scaledWidth*3, 0, scaledWidth, scaledHeight);
    ctx.drawImage(img, width*4, 0, width, height, scaledWidth*4, 0, scaledWidth, scaledHeight);
    ctx.drawImage(img, width*5, 0, width, height, scaledWidth*5, 0, scaledWidth, scaledHeight);
}
