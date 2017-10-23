
import Beweging from "./beweging.es6"

export default class Speler{
    constructor(x, y, width, height, color,field ){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
       
        this.speedY =0;  //dit gaven ze aan in andere voorbeelden. 
        this.speedX = 0;
        this.gravity = 0.05;
        this.gravitySpeed = 0;

        
        this.draw(field);

       
     }

     draw(field){
        field.fillStyle = this.color;
        field.clearRect(0, 0, this.width, this.height);
        field.fillRect(this.x, this.y, this.width, this.height); 
        
     };

     

    }

