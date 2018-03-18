/*

Metaesquema vibrante
autor: SA
inspirado en 'Metaesquema', Hélio Oiticica, 1958 



y genero el ancho del cuadrado en un cuancho
y al alto del cuadrado le nombro cualto
*/
var cuancho;
var cualto;
var uno;
var contero; 
var encendido;
function setup() {
  createCanvas(690, 690);
  //rWidth=width/2/3;
  rWidth=150;
  rHeigth=rWidth
  rectMode(CORNER);
  frameRate(20);
  uno = -1;
  contero = 0;
  encendido = false
}

function draw() {
  background('red');
  fill('red');
  stroke('white');
	strokeWeight(16);
  //randomSeed(1);
  
  //
  //
  /*cual es la ide del uno?
  
  1.0 la idea es que cada vez que se haga click, cambie de dimensión
  2.0 la idea es que el cambio de dimensión sea intercalado
  3.0 se agranda, y cuando voy a apagar, queda en un estado de shock
  4.0 
   if(rWidth > 200){
          uno = uno * -1;
        
        }
  */
  if(mouseIsPressed){
     
    if(encendido){
      console.log("acaso estoy pasando por aqui?, creo sí");
      //
        rWidth = rWidth - uno;
        rHeigth = rHeigth + uno;
      console.log("viejorecu: - Quíen mierda encendió esto, hay que apagar esta wea!");
      encendido = false;
    }else{
      console.log("si ves esto en el log, es por que estoy muerto. Enciendo la luz");
      rWidth = rWidth + uno;
      rHeigth = rHeigth - uno;
      encendido = true;
    }
    	
      }
  else{
    console.log('es el momento para decirte que haz estado perdiendo el tiempo, todo este tiempo');
    me_agrando();
  }
  console.log("digame cuanto es encendido=" + encendido)
  
  for(var i=0;i<4;i++){
    //rect(0, 0, rWidth*1.9, rHeigth*1.3);
    //if(i%2==0){
    console.log(mouseX);
    rect(0, 0, rWidth*1.8, rHeigth*1.1);
      	rect(rWidth*1.8, 0, rWidth*0.9, rHeigth*1.2);
    		rect(rWidth*1.8, rHeigth*1.2, rWidth*0.4, height/2- rHeigth*1.2);
      	rect(rWidth*1.8 + rWidth*0.9, 0, rWidth*0.67, rHeigth*1.8);
      translate(width,0);
  		rotate(HALF_PI);
      
    //}
    /*else{
      rect(0, 0, rWidth*2.1, rHeigth*1);
      rect(rWidth*2.1, 0, rWidth*0.8, rHeigth*1.2);
      rect(rWidth*2.1 + rWidth*0.8, 0, rWidth*0.8, rHeigth*2.1);
      translate(height,0);
  		rotate(HALF_PI);
    }*/
    
  }
  function enciendoLaWea(){
    
  }
  
  function me_agrando(){
    rWidth = rWidth - uno;
  	rHeigth = rHeigth + uno;
   // rWidth = rWidth + uno;
   // rHeigth = rHeigth - uno;
    print("me agrando");
  }
 
}