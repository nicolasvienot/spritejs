img = new Image();
img.src = "./common/images/sonic.png";

img.onload = function() {
    init();
};


// let canvas = document.getElementById("sonic");
// let ctx = canvas.getContext('2d');

const scale = .5;
const width = 95;
const height = 120;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY){
    ctx.drawImage(img, frameX*width - 2, frameY*height, width, height,
        canvasX, canvasY, scaledWidth, scaledHeight);
    }
    
    function init() {
        // drawFrame(0, 0, 0, 0);
        // drawFrame(1, 0, scaledWidth, 0);
        // drawFrame(2, 0, scaledWidth*2, 0);
        // drawFrame(3, 0, scaledWidth*3, 0);
        // drawFrame(4, 0, scaledWidth*4, 0);
        // drawFrame(5, 0, scaledWidth*5, 0);

        window.requestAnimationFrame(step);
    }
    
    const cycleLoop = [1, 2, 3, 4];
    let currentLoopIndex = 0;
    let frameCount = 0;
    
    function step() {
        frameCount++;
        if(frameCount < 10){
            window.requestAnimationFrame(step);
            return;
        }
        frameCount=0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
        currentLoopIndex++;
        if (currentLoopIndex >= cycleLoop.length) {
            currentLoopIndex = 0;
        }
        window.requestAnimationFrame(step);
    }
    
