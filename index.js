
function evaluarIntereses(){
    let monto = parseFloat(prompt("Ingrese el monto del plazo fijo para saber los intereses que se ganarán"))
    let taza = parseFloat(prompt("Ingrese la taza nominal anual (sin %)"))
    let periodo = parseFloat(prompt("Ingrese el periodo en dias"))
    alert("El interes ganado es de " + (monto*((taza/100)*periodo)/365))

    console.log(monto)
    console.log(taza)
    console.log(periodo)
}


let consulta = true

do {
    evaluarIntereses()
    let confirmacion = prompt("¿Desea evaluar otro valor? si/no")

    if (confirmacion == "no") {
        consulta = false
    } 
    
    console.log(confirmacion)
    console.log(consulta)

    }while (consulta == true)