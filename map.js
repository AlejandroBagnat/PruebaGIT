let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(numero) {
    return numero-1;
})

console.log(horariosAtrasados);    