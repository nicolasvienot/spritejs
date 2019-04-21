var audio = new Audio('./common/mp3/2006.mp3');
        img = new Image();
        img.src = "./common/images/sonic.png";
        var canvas;
        canvas = document.getElementById("sonic");
		canvas.style.width = '800px';
		canvas.style.background = 'red';
        canvas.style.height = '400px';
        var x = 0;
        var y = 0;
        var ctx = canvas.getContext("2d");
        img.onload = function() {
            init();
        };
        
const scale = .45;
const width = 110;
const height = 75.9;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY){
    ctx.drawImage(img, frameX*width, frameY*height, width, height,
        canvasX, canvasY, scaledWidth, scaledHeight);
    }
    
    function init() {
        window.requestAnimationFrame(step);
    }
    
    const cycleLoop = [2.75, 3.75, 4.75];
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
        drawFrame(cycleLoop[currentLoopIndex], 4.94, x, y);
        currentLoopIndex++;
        if (currentLoopIndex >= cycleLoop.length) {
            currentLoopIndex = 0;
        }
        window.requestAnimationFrame(step);
    }

        // document.addEventListener("keyup", controls);
        // document.addEventListener("keydown", controls);
        document.addEventListener("keypress", controls);
        
        function controls(event) {
        if (event.key == 'a') {
            deplgauche(); }
        if (event.key == 'w') {
            deplhaut(); }
        if (event.key == 'd') {
            depldroite(); }
        if (event.key == 's') {
            deplbas(); }
        }
                    
        function depldroite() {
            if (x <= 280)
            {
                // clear();
                x += 10;
                y += 0;
                display();
            }
            else
            {
                // clear();
                x = -30;
                y += 0;
                display();
            }
        }

        function deplgauche() {
            if (x > -30)
            {
                // clear();
                x -= 10;
                y += 0;
                display();
            }
            else
            {
                // clear();
                x = 290;
                y += 0;
                display();
            }
        }

        function deplhaut() {
            if (y > 0)
            {
                // clear();
                x += 0;
                y -= 10;
                display();
            } 
        }

        function deplbas() {
            if (y <= 80)
            {
                // clear();
                x += 0;
                y += 10;
                display();
            }
        }

        function display() {
            audio.play();
            // drawFrame(0, 0, x, y);
        }

        function clear() {
            ctx.clearRect(x, y, 93, 120);
        }
        