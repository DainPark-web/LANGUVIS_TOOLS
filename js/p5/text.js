class TextB {
    constructor(text, x, y){
        this.text = text;
        this.x = mouseX;
        this.y = mouseY;
        this.xS = random(-2, 2);
        this.yS = random(-0.2, -4);
        this.acc = random(0.1, 0.2);
        this.op = random(100, 200);
        this.size = random(10, 25);

    }


    draw(){
        push()
        noStroke()
        // strokeWeight(3)
        // stroke(0,0,0, this.op)
        textSize(this.size)
        fill(255,255,255, this.op)
        text(this.text, this.x, this.y)
        pop()

    }
    reset(){
        this.x = mouseX - 20;
        this.y = mouseY;
        this.xS = random(-2, 2);
        this.yS = random(-0.2, -4);
        this.op = random(50, 255);
        this.size = random(10, 25);
        this.text= randomWords[floor(random(randomWords.length))];
    }
    update(){
        
        this.x += this.xS;
        this.y += this.yS;
        // this.op -= 0.5;
    


        if(this.x < -100){
            this.reset()

        }

        if(this.y < -100){
            this.reset()

        }

        if(this.x > width){
            this.reset()
        }

        if (this.y > height){
            this.reset()
        }


        
    }
}