class Rect{

    constructor(x,y,width,height){
     var rect_options ={
        isStatic: true
    }

    this.body = Bodies.rectangle(x,y,width,height, rect_options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);


    }

    display(){
        this.posx = this.body.position.x;
        this.posy = this.body.position.y;
        rectMode(CENTER);
        rect(this.posx,this.posy,this.width,this.height);

    }
}