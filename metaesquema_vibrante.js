/*

Metaesquema vibrante
autor: SA
inspirado en 'Metaesquema', Hélio Oiticica, 1958 



y genero el ancho del cuadrado en un anchocu
y al alto del cuadrado le nombro altocu por alto cu... 
*/
var anchocu;
var altocu;
var uno;
var contero; 
var encendido;
var stop;
var hue;
function setup() {
  createCanvas(690, 690);
  anchocu=150;
  altocu=anchocu
  rectMode(CORNER);
  frameRate(20);
  uno = -1;
  contero = 0;
  encendido = false
  colorMode(HSB,100);
  stop = false;
  hue = 95;
}

function draw() {
  creacion();
  dibujar_la_obra();
  //randomSeed(1);
  
  //
  //
  /*cual es la ide del uno?
  
  1.0 la idea es que cada vez que se haga click, cambie de dimensión
  2.0 la idea es que el cambio de dimensión sea intercalado
  3.0 se agranda, y cuando voy a apagar, queda en un estado de shock
  1.1 aca se pone seria la cosa, y cuando presione una tecla, va realizar la transformación
  1.2 luego de cambiar el estado, pesado, armado, rabioso aireado, con solo tocarlo, 
      ahora agrado y achico el setimiendo de agrado.
  1.3 en el camino del descubrimiento, el movimiento de los cuadrados fluye, 
      también el color.
  
  */
  if(keyIsPressed  === true){
    if(key === 'g'){
      print("consuelo: - hola Guido");
      cambia_el_color();
    }
     console.log("consuelo: - a mover el pavo");
     encendido = muevemueve(encendido);       
     stop = true;
  }
  else{
    if(stop==true){
      print("consuelo: - dance!");
      if(encendido){
        me_agrando();
      }else{
        me_achico();
      }
    }
  }
  console.log("digo la verdad? = " + encendido)
  
  
  
  function me_agrando(){
    anchocu = anchocu - uno;
    altocu = altocu + uno;
    print("me agrando");
  }
  
  function me_achico(){
    anchocu = anchocu + uno;
    altocu = altocu - uno;
    print("me achico");
  }
  /*
    aprendo a mover con el mueve mueve, se te mueve, 9 9, hueve hueve
    treqe treqe, entre que te, se te mete el cete eme verde
  */
  
  function muevemueve(encendido){
    if(encendido){
      console.log("acaso estoy pasando por aqui?, creo sí");
      me_agrando();
      console.log("viejorecu: - Quíen mierda encendió esto, hay que apagar esta wea!");
      encendido = false;
    }else{
      console.log("si ves esto en el log, es por que estoy muerto. Enciendo la luz");
      me_achico()
      encendido = true;
    }
    return encendido;
  }
  
  function dibujar_la_obra(){
    print("dibujante misterioso: - me gusta el dibujo!");
    for(var i=0;i<4;i++){

    rect(0, 0, anchocu*1.8, altocu*1.1);
    rect(anchocu*1.8, 0, anchocu*0.9, altocu*1.2);
    rect(anchocu*1.8, altocu*1.2, anchocu*0.4, height/2- altocu*1.2);
    rect(anchocu*1.8 + anchocu*0.9, 0, anchocu*0.67, altocu*1.8);
    translate(width,0);
    rotate(HALF_PI);
    
  }
  }
  
  function creacion(){
    //el color original de la obra en HSB: 95 = hue, 100 = saturation, 60 =brillo
    background(hue, 100, 60);
    fill(hue, 100, 60);
    stroke('white');
    strokeWeight(16);
  }
  
  function cambia_el_color(){
    var r = random(0,350);
    hue = r;
  
  }
 
}