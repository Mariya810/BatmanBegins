class Umbrella {
    constructor(x,y){
        var options = {isStatic:true}
        this.image = loadImage("1.png");
        this.umbrella = Bodies.circle(x,y,60,options);
        World.add(world,this.umbrella);
    }

    showUmbrella(){
        imageMode (CENTER);
        image (this.image, this.umbrella.position.x, this.umbrella.position.y, 300,300);
        
    }
}