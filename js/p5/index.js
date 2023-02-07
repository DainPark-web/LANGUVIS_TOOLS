const canvasContainer = document.querySelector(".canvasContainer");


let WIDTH = canvasContainer.clientWidth;
let HEIGHT = canvasContainer.clientHeight;

let time = 0;
function setup(){
    const cnv = createCanvas(WIDTH, HEIGHT);
    cnv.parent(canvasContainer);
    
}


function draw(){
    background(255)
    time += 0.5;
    text("dain", mouseX + time, mouseY)
}