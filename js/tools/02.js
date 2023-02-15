const container = document.querySelector(".canvasContainer")


const WIDTH = container.clientWidth;
const HEIGHT = container.clientHeight;

let mic;
let time = 0;
const volBar = {
    w: 4,
}

let button;
function setup(){
    const cnv = createCanvas(WIDTH, HEIGHT);
    cnv.parent(container);
   
    mic = new p5.AudioIn();

    background(10,10,100)
    // mic.start();
}

function draw(){
 
    let vol = mic.getLevel();
    let vMap = map(vol, 0, 1, 3, 500);
    
    if(frameCount % ((3 * 1)) === 0){
        rect((time * (volBar.w + 4)) + 50, 250 - vMap/2, volBar.w, vMap);
        time += 1;
    
    }
    button = createButton('Start');
    
    button.position(window.innerWidth/2, window.innerHeight- 50);
    button.mousePressed(playFn);

}

function playFn(){
    console.log("s")
    mic.start();
}   