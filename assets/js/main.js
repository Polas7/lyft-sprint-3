/*funcion del click*/
var botonStart = document.getElementsByClassName("bton")[0];
botonStart.addEventListener("click", test);

function test(){
/*alert("holi")*/
var juego = document.getElementsByClassName("auto")[0];
if(juego.style.display !== "none" && juego.style.display === ""){
    juego.style.display = "none";
} 
};

/*funcion del click*/
var starGone = document.getElementsByClassName("bton")[0];
starGone.addEventListener("click", borrar);

/*funcion ocutar el tablero*/
function borrar(){
/*alert("holi")*/
var tablero = document.getElementById("tablero");
if(tablero.style.display == "none" && tablero.style.display == ""){
    tablero.style.display = "none";
}else{ 
    mostrartablero();
} 
};



    //Defino el tablero
    function mostrartablero(){
 var tablero = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]
//Ingreso el auto en la posicion 3,5
var auto1 = document.getElementById("auto1").value;
var auto2 = document.getElementById("auto2").value;

/*validacion que no funciono, me boto codigo*/
/* tablero[auto1][auto2] = "<img src='assets/img/car.png' alt='autito' width='25'>";*/
tablero[3][5] = "<img src='assets/img/car.png' alt='autito' width='25'>";

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("tablero");

//Variables temporales
var fila, casilla;

//Recorro el arreglo para dibujar el tablero
for(var i = 0; i<tablero.length; i++){
  fila = document.createElement("div");
  fila.classList.add("fila");
  for(var j = 0; j<tablero[i].length; j++){
    casilla = document.createElement("div");
    casilla.innerHTML = tablero[i][j];
    casilla.classList.add("casilla")
    fila.appendChild(casilla);
  }
  divTablero.appendChild(fila);
    }
};    

/*funciona solo con algunos parametros, sino me borra la tabla*/
/* function validar(){
  var auto1 = document.getElementById("auto1").value;
  var auto2 = document.getElementById("auto2").value; 
  if (auto1 == "" || auto2== ""){
    alert("ingrese datos")
  }
 }   

 botonStart.addEventListener("click", validar);*/

/*constuctor ayuda con la Nat <3 <3 <3 */
/*
 class Auto {

    constructor(posicion_x, posicion_y) {
        this.posicion_x = posicion_x;
        this.posicion_y = posicion_y;
    }
    avanzar() {
        return 'avanzando'
    }

    irIzquierda(tablero) {
        return 'avanzamos a la izquierda';
    }

    irDerecha() {
        return 'avanzamos a la derecha';
    }

    retroceder() {
        return 'retrocediendo';
    }
}*/