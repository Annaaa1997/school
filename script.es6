
const canvas = document.getElementById("veld");
const field = canvas.getContext("2d");


import Speler from '../speler.es6';
import Beweging from '../beweging.es6';

let beweging = new Beweging(field, Speler);
let speler1 = new Speler(250, 250 , 30 , 30, "Red",field); //speler1 
