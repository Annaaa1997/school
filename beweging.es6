import Speler from './speler.es6'
export default class Beweging{
    constructor(field, Speler){
            console.log('test');


            field.Speler = Speler; //dit haalt de speler op vanuit de script.es6
            
            this.isUp = false; 
            
         
            this.spring(field); //start de functie spring.
           



        };


    spring(field, Speler){
    console.log('hallo'); //dit laat hij zin in de console.log
    
     window.addEventListener('keydown', function (e) { // wanneer er een willekeurige toets ingedrukt wordt, zou hij omhoog moeten gaan
        console.log('getest'); 
    
        
      if  (this.isUp = true){
        console.log(Speler);
        console.log('hij doet het ')
        
        Speler.x +=  10; //tien omhoog

 

       
      };
     })

    }

       
  
 

}