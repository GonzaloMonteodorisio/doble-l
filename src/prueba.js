function creaFunc() {
    var nombre = "Mozilla";
    function muestraNombre() {
        console.log(nombre);
    }
    return muestraNombre;
}

var miFunc = creaFunc();
console.log(miFunc);
// miFunc(); 