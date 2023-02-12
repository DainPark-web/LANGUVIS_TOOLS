const canvasContainer = document.querySelector(".canvasContainer");

const randomWords = [
"תירס",
"פטריה",
"ברוקולי",
"מלפפון",
"פלפל",
"אננס",
"עגבניה",
"אפונה",
"אספרגוס",
"סלרי",
"ذرة",
"فطر",
"بروكلي",
"خيار",
"فلفل",
"أحمر",
"أناناس",
"طماطم",
"البازلاء",
"الهليون",
"كرفس",
"Mais",
"Pilz",
"Brokkoli",
"Gurke",
"Rote", 
"Paprika",
"Ananas",
"Tomate",
"Erbse",
"Spargel",
"Sellerie",
"옥수수",
"버섯",
"브로콜리",
"오이",
"고추",
"파인애플",
"토마토",
"완두콩",
"아스파라거스",
"셀러리",
"Corn",
"Mushroom",
"Broccoli",
"Cucumber",
"Red", 
"pepper",
"Pineapple",
"Tomato",
"Pea",
"Asparagus",
"Celery",
]

let WIDTH = canvasContainer.clientWidth;
let HEIGHT = canvasContainer.clientHeight;

let time = 0;

const textCount = 70;
let textList = [];

function setup(){
    const cnv = createCanvas(WIDTH, HEIGHT);
    cnv.parent(canvasContainer);
    textFont("Source Code Pro");
    textSize(20)
  
    
    // strokeWeight(3);
    
    background(0)
   

    for(let i =0; i < textCount; i++){
        textList.push(new TextB(randomWords[floor(random(randomWords.length))], mouseX, mouseY))
    }

    
    
}


function draw(){
    time += 0.5;
    background(0)
   
    for(let i = 0; i < textCount; i++){
        textList[i].draw();
        textList[i].update();
        push()
        strokeWeight(1)
        stroke(255,255,255,100)
        for(let j = 0; j < textCount; j++){
             if(dist(textList[i].x, textList[i].y, textList[j].x, textList[j].y) < 150){
                push()
                line(textList[i].x, textList[i].y,textList[j].x, textList[j].y)
                pop()
            }

        }
        // if(dist(textList[i].x, textList[i].y, mouseX, mouseY)< 300){

        //     line(textList[i].x, textList[i].y,mouseX, mouseY)
        // }

        pop()
        
    }
}