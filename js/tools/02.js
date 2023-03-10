const container = document.querySelector(".canvasContainer")
console.log(container.offsetTop)

const WIDTH = container.clientWidth;
const HEIGHT = container.clientHeight;

let mic;
let time = 0;
const volBar = {
    w: 4,
}

let button;
let start = false;
let start2 = false;

let maxVolume = 0;
let totalVolume = 0;

function setup(){
    const cnv = createCanvas(WIDTH, HEIGHT);
    cnv.parent(container);
   
    mic = new p5.AudioIn();

    background(10,10,10)
    // mic.start();
    button = createButton('Start');
    button.position(window.innerWidth <= 450 ? 20 : 100, container.offsetTop + container.clientHeight + 30);
    button.mousePressed(playFn);
}

function draw(){
 
    let vol = mic.getLevel();
    let vMap = map(vol, 0, 1, 3, 500);
    
    if(start2){

        if(frameCount % ((3 * 1)) === 0 && ((time * (volBar.w + 4)) + 50) < WIDTH - 50){
            maxVolume = maxVolume < vMap ? vMap : maxVolume;
            rect((time * (volBar.w + 4)) + 50, 250 - vMap/2, volBar.w, vMap);
            time += 1;
            totalVolume += vMap;

        
        }
        if(((time * (volBar.w + 4)) + 50) > WIDTH - 50){
            console.log(maxVolume + "max")
            fill(255)
            text(`Max volume: ${floor(maxVolume)}`, 10, 30);
            text(`Average volume: ${floor(totalVolume/101)}`, 10, 60);
            start = false;
            start2 = false;
            time = 0;
            button.removeAttribute('disabled');
            button.html("Start")
            maxVolume = 0;
            totalVolume = 0;
            
            
        }
    }

 
   

}

function playFn(){
    if(!start){
        button.attribute('disabled', '')
        button.html("Recording...")
        background(10,10,100)
        mic.start();
        time = 0;
        start = true;
        start2 = true;
    }
   
}   