let estudiantes = [
    { nombre: 'John', promedio: 8.5, aprobado: true },
    { nombre: 'Jane', promedio: 7, aprobado: true },
    { nombre: 'June', promedio: 3, aprobado: false }
]

const aprobados = estudiantes.filter(function (nota) {
    // console.log(nota.promedio);
    return nota.promedio >= 7;
});


for (let i = 0; i < aprobados.length; i++) {
    console.log("Les enviamos un diploma al alumno: " + aprobados[i].nombre + " por aprobar");    
}

const desaprobados = estudiantes.filter(function (nota) {
    return nota.promedio < 7;
});


for (let i = 0; i < desaprobados.length; i++) {
    console.log("Les enviamos un mail al alumno: " + desaprobados[i].nombre + " por desaprobar");    
}


