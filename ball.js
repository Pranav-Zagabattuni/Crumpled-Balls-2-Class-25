class Ball{

    constructor(x, y, radius){
         var options ={

            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
                }
        this.body = Bodies.circle(x, y, radius/3, options)
        this.radius = radius
        this.image = loadImage("paper.png")
        World.add(world,this.body)
    }
    display(){
    push();
   var pos = this.body.position
   imageMode(CENTER)
   image(this.image, pos.x, pos.y, this.radius, this.radius)
   pop();
    }


}
