const container = document.querySelector(".canvasContainert")


const WIDTH = container.clientWidth;
const HEIGHT = container.clientHeight;

let getList = JSON.parse(localStorage.getItem("soundList"))



function setup(){
    const cnv = createCanvas(WIDTH, HEIGHT);
    cnv.parent(container);
   
    background(255)
    fill(0)
    console.log(getList[0].length)
    for(let i = 0; getList[0].length; i++){
        // rect(getList[0][i]["h"], 100, 4)
    }
    rect(40,40,100,100)
}


function draw(){
  
    
   
}