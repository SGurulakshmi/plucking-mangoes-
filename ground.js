class Ground
{
    constructor(x,y,length,width)
    {
        var options=
        {
            isStatic:true,
            friction:0.5,
        }
        this.body=Bodies.rectangle(400,550,1000,10,options)
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER);
        fill("violet");
        rect(400,550,1000,25)
    }
}