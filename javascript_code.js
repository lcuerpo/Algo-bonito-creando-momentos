var pasoActual=1;
const ULTIMO_PASO=4
const btnSiguiente = document.getElementById("btn-siguiente");
btnSiguiente.addEventListener(`click`,avanzarPaso);
function avanzarPaso(){
    const categoriaPasoActual="paso-"+ pasoActual;
    const divActual= document.getElementById(categoriaPasoActual);
    divActual.style="display : none";
    pasoActual ++
    const nuevoCategoriaPasoActual="paso-"+pasoActual
    const nuevoDivActual= document.getElementById(nuevoCategoriaPasoActual);
    nuevoDivActual.style.display="";
    if(pasoActual==ULTIMO_PASO)
    deshabilitarBotonSiguiente();
prepararResumen();
function deshabilitarBotonSiguiente(){
    const btnSiguiente= document.getElementById("btn-siguiente");btnSiguiente.disabled = true;
    function prepararResumen(){
        document.getElementById(resumen-categoria);
        document.getElementById(resumen-personaje);
        document.getElementById(resumen-edad);
        resumenCategoria.innertext="categoria:"+ document.getElementById("categoria").value;
        resumenPersonaje.innertext="personaje:"+ document.getElementById("personaje").value;
        resumenEdad.innertext="cedad:"+ document.getElementById("edad").value;
    }
}
}
document.addEventListener( `DOMContentLoaded`,()=>{}),
alert("JUGETES MAGICOS")
let elementosP = document.getElementsByTagName("p")

elementosP[0].style.color = "white"
elementosP[1].style.color = "green"

function funcion1(){ 
    alert("juguete seleccionado")
}





