class Ball {
    constructor(x, y, f, nameT, la, co){
        this.x = x;
        this.y = y;
        this.xS = 0;
        this.yS = 0;
        this.f = f;
        this.name = nameT;
        this.la = la;
        this.co = co;
    }

    draw(){
        push()
        noStroke()
        fill(this.co);
        // circle(this.x, this.y , 10);
        textSize(25)
        text(this.name, this.x - 50, this.y )
        textSize(18)
        text(this.la, this.x - 50, this.y + 25 )
        pop()
    }

    update(){


        if(abs(mouseX - this.x) > 100 || abs(mouseY - this.y > 100)){
            if(mouseX > this.x){
                this.xS = (mouseX - this.x) * this.f;
                
                this.x += this.xS;
                
            }
            if(mouseX < this.x){
                this.xS = abs(mouseX - this.x) * this.f;
                this.x -= this.xS
            }
            if(mouseY > y){
                this.yS = (mouseY - this.y) * this.f;
                this.y += this.yS;
                
            }
            if(mouseY < y){
                this.yS = abs(mouseY - this.y) * this.f;
                this.y -= this.yS
            }
        }
    }
}