img = new Image();
img.src = "./common/images/sonic.png";

img.onload = function() {
    init();
  };
  

let canvas = document.getElementById("sonic");
let ctx = canvas.getContext('2d');

const scale = .5;

function init() {
    ctx.drawImage(img, 0, 0, 90, 120, 0, 0, 90 * scale, 120 * scale);
}
