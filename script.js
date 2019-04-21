sonicImage = new Image();
sonicImage.src = "common/image/sonic.png";

let canvas = document.getElementById("sonic");

let sonic = sprite({
    context: canvas.getContext("2d"),
    width: 100,
    heigth: 100,
    Image:sonicImage
})