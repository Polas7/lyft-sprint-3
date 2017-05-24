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

function borrar(){
/*alert("holi")*/
var eraser = document.getElementsByClassName("auto")[0];
if(eraser.style.display !== "none" && eraser.style.display === ""){
    eraser.style.display = "none";
} 
};
var tablero = document.getElementById("tablero");







    //Defino el tablero
var tablero = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]
//Ingreso el auto en la posicion 3,5
tablero[3][5] = "A";

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