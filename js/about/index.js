const canvas = document.querySelector(".canvasContainers")


let WIDTH = canvas.clientWidth;
let HEIGHT = canvas.clientHeight;

let x = 100;
let y = 100;

let xS = 10;
let yS = 10;


let ball1, ball2, ball3;



function setup(){
    const cnv = createCanvas(WIDTH, HEIGHT)
    cnv.parent(canvas)

    ball1 = new Ball(100,100, 0.03, "Nour Al Safadi", "Arabic","#edd189",);
    ball2 = new Ball(-100,100, 0.01, "Oran Almagor", "Hebrew", "#cd4b4a",);
    ball3 = new Ball(0,-100, 0.005, "Dain Park", "Korean", "#67b0a7",);
}

function draw(){
   
    background(10,10,10)
    fill(255)
    textSize(window.innerWidth <= 450 ? 30 : 60)
    text("VISULANG", mouseX - (window.innerWidth <= 450 ? 60 : 130), mouseY + (window.innerWidth <= 450 ? 10 : 30))

    ball1.draw()
    ball1.update()
    ball2.draw()
    ball2.update()
    ball3.draw()
    ball3.update()
    push()
    stroke(255,255,255,100)
    line(mouseX, mouseY, ball1.x, ball1.y)
    line(mouseX, mouseY, ball2.x, ball2.y)
    line(mouseX, mouseY, ball3.x, ball3.y)
    pop();
   
       
  
}