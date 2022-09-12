let nombre = "";
let opcionCuotas;
let credito = [];

do{
    nombre = prompt(`YOUR CREDIT\n¿Cuál es tu nombre?`);
}while(nombre === "" || nombre === Number)
credito.push(nombre);

let montoSolicitado = parseInt(prompt(`${nombre} ingresa el monto a solicitar`));
credito.push(montoSolicitado);

function calcularCuotas(){
    let interes;
    let total;
    let montoCuota;
    let aceptaCredito;
    switch(opcionCuotas){
        case 1:
            interes = (montoSolicitado * 15) / 100; 
            total = (montoSolicitado + interes);
            montoCuota = Math.round(total / 12);
            aceptaCredito = confirm(`
            El monto total a pagar es $${total}\n
            En 12 cuotas de $${montoCuota}\n
            ¿Deseas continuar?`);
            if(aceptaCredito === true){
                alert('Se ha otorgado el crédito con éxito');
                credito.push(interes);
                credito.push(total);
                credito.push(montoCuota);
                console.log(credito);
            }
            break;
        case 2:
            interes = (montoSolicitado * 30) / 100;
            total = (montoSolicitado + interes);
            montoCuota = Math.round(total / 24);
            aceptaCredito = confirm(`
            El monto total a pagar es $${total}\n
            En 12 cuotas de $${montoCuota}\n
            ¿Deseas continuar?`);
            if(aceptaCredito === true){
                alert('Se ha otorgado el crédito con éxito');
                credito.push(interes);
                credito.push(total);
                credito.push(montoCuota);
                console.log(credito);
            }
            break;
        case 3:
            interes = (montoSolicitado * 45) / 100;
            total = (montoSolicitado + interes);
            montoCuota = Math.round(total / 36);
            aceptaCredito = confirm(`
            El monto total a pagar es $${total}\n
            En 12 cuotas de $${montoCuota}\n
            ¿Deseas continuar?`);
            if(aceptaCredito === true){
                alert('Se ha otorgado el crédito con éxito');
                credito.push(interes);
                credito.push(total);
                credito.push(montoCuota);
                console.log(credito);
            }
            break;
        case 4:
            interes = (montoSolicitado * 60) / 100;
            total = (montoSolicitado + interes);
            montoCuota = Math.round(total / 48);
            aceptaCredito = confirm(`
            El monto total a pagar es $${total}\n
            En 12 cuotas de $${montoCuota}\n
            ¿Deseas continuar?`);
            if(aceptaCredito === true){
                alert('Se ha otorgado el crédito con éxito');
                credito.push(interes);
                credito.push(total);
                credito.push(montoCuota);
                console.log(credito);
            }
            break;
        case 5: 
            interes = (montoSolicitado * 75) / 100;
            total = (montoSolicitado + interes);
            montoCuota = Math.round(total / 60);
            aceptaCredito = confirm(`
            El monto total a pagar es $${total}\n
            En 12 cuotas de $${montoCuota}\n
            ¿Deseas continuar?`);
            if(aceptaCredito === true){
                alert('Se ha otorgado el crédito con éxito');
                credito.push(interes);
                credito.push(total);
                credito.push(montoCuota);
                console.log(credito);
            }
            break;
        default: 
            opcionCuotas = parseInt(prompt(
            `¿En cuántas cuotas?\n
            1. 12 cuotas\n
            2. 24 cuotas\n
            3. 36 cuotas\n
            4. 48 cuotas\n
            5. 60 cuotas`
        ));
    }
}

if(montoSolicitado > 5000 && montoSolicitado < 2000000){
    opcionCuotas = parseInt(prompt(
        `¿En cuántas cuotas?\n
        1. 12 cuotas\n
        2. 24 cuotas\n
        3. 36 cuotas\n
        4. 48 cuotas\n
        5. 60 cuotas`
    ));
    calcularCuotas();
} else{
    montoSolicitado = parseInt(prompt(`
    El monto ingresado debe estar entre $5000 y $2.000.000.\n
    Ingresa el monto a solicitar`));
}











