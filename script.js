sonicImage = new Image();
sonicImage.src = "common/image/sonic.png";

let canvas = document.getElementById("sonic");


let sonic = sprite({

    context: canvas.getContext("2d"),
    width: 100,
    heigth: 100,
    Image:sonicImage,
    },
    that.render = function () {
        that.context.drawImage(
            that.Image,
            0,
            0,
            that.width,
            that.height,
            0,
            0,
            that.width,
            that.height);
        }
        )

sonic.render();
    
    