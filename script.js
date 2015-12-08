

function compteursuper(NomIDparagraphe){
var varJSCpt = document.getElementById("pCpt");

var nombre = parseInt(varJSCpt.innerHTML);
varJSCpt.innerHTML = 1 + nombre;
}
function afficherphoto(obj){
  if ( obj.className == "" ){
    obj.className = "zoomimage";
  }
  else{
    obj.className = "";
  }
}
