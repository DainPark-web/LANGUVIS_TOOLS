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

const colors = [
    "#4c69a4",
    "#cd4b4a",
    "#67b0a7",
    "#edd189",
    "#35464d",
    "#D90B6B"
]

let time = 0;

const textCount = 50;
let textList = [];

function setup(){
    const cnv = createCanvas(WIDTH, HEIGHT);
    cnv.parent(canvasContainer);
    textFont("Source Code Pro");
    // textSize(20)
  
    
    // strokeWeight(3);
    
    background(0)
   

    for(let i =0; i < textCount; i++){
        textList.push(new TextB(randomWords[floor(random(randomWords.length))], mouseX, mouseY))
    }

    
    
}


function draw(){
    time += 0.5;
    background(10,10,10)
   
    for(let i = 0; i < textCount; i++){
        textList[i].draw();
        textList[i].update();
        push()
        strokeWeight(1)
        stroke(255,255,255,100)
        for(let j = 0; j < textCount; j++){
            const d = dist(textList[i].x, textList[i].y, textList[j].x, textList[j].y)
             if(d < 150){
                push()
              
              
                if(d > 130){
                    stroke(colors[0])
                }
              
                if(d <= 130 && d > 100){
                    stroke(colors[1])
                }
                if(d <= 100 && d > 60){
                    stroke(colors[2])
                }
                if(d <= 60 && d > 30){
                    stroke(colors[3])
                }
                if(d <= 30 && d > 0){
                    stroke(colors[4])
                }

             
              
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