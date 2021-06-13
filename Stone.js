class Stone {
    constructor(x, y) {
      var options = {
        'density':0.8,
        'friction': 0.9,
        'restitution':12
      };
      this.body = Bodies.rectangle(250, 150,200,200, options);
      this.width = 250;
      this.height = 100;
      World.add(world, this.body);
    };
    display(){
     
     
      
      push();

      
      strokeWeight(3);
      stroke('red')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };