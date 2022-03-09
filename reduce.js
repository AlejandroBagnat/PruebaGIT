let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce(function(total, numero) {
    return total + numero;    
});

console.log(totalVueltas);