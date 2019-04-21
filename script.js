img = new Image();
img.src = "./common/images/sonic.png";

img.onload = function() {
    init();
};


// let canvas = document.getElementById("sonic");
// let ctx = canvas.getContext('2d');

const scale = .5;
const width = 93;
const height = 120;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY){
    ctx.drawImage(img, frameX*width, frameY*height,width, height,
        canvasX, canvasY, scaledWidth, scaledHeight);
}

function init() {
    drawFrame(0, 0, 0, 0);
}
