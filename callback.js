function agregarHttp(url) {
    return url  // escribí tu código aquí
}


function procesar(arreglo,callback){
    // escribí tu código aquí
    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = "http://" + callback(arreglo[i]);        
    }
    return arreglo;
}
console.log(procesar(["www.google.com","www.yahoo.com"], agregarHttp));