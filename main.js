let form = document.querySelector('#form');
let simulador = document.querySelector('#simulador');
let btnReset = document.querySelector('#reset');
let btnCalc = document.querySelector('#calc');

let calcAgain = false;

function validarForm(e){
    e.preventDefault();
}
form.addEventListener('submit', validarForm);

function calcularMontos(){
    let montoSolicitado = parseInt(document.querySelector('#monto').value);
    let cuotas = parseInt(document.querySelector('#cuotas').value);

    let interes;
    let total;
    let montoCuota;

    switch(cuotas){
        case 12: {
            interes = (montoSolicitado * 15) / 100;
            total = montoSolicitado + interes;
            montoCuota = Math.round(total / cuotas);

            simulador.innerText = `El monto total a pagar es $${total}\nEn ${cuotas} cuotas de $${montoCuota}`;

            calcAgain = true;
            break;
        }
        case 24: {
            interes = (montoSolicitado * 30) / 100;
            total = montoSolicitado + interes;
            montoCuota = Math.round(total / cuotas);

            simulador.innerText = `El monto total a pagar es $${total}\nEn ${cuotas} cuotas de $${montoCuota}`; 

            calcAgain = true;;
            break;
        }
        case 36: {
            interes = (montoSolicitado * 45) / 100;
            total = montoSolicitado + interes;
            montoCuota = Math.round(total / cuotas);

            simulador.innerText = `El monto total a pagar es $${total}\nEn ${cuotas} cuotas de $${montoCuota}`; 

            calcAgain = true;
            break;
        }
        case 48: {
            interes = (montoSolicitado * 60) / 100;
            total = montoSolicitado + interes;
            montoCuota = Math.round(total / cuotas);

            simulador.innerText = `El monto total a pagar es $${total}\nEn ${cuotas} cuotas de $${montoCuota}`;
            
            calcAgain = true;
            break;
        }
        case 60: {
            interes = (montoSolicitado * 75) / 100;
            total = montoSolicitado + interes;
            montoCuota = Math.round(total / cuotas);

            simulador.innerText = `El monto total a pagar es $${total}\nEn ${cuotas} cuotas de $${montoCuota}`; 

            calcAgain = true;
            break;
        }
    }
}

btnReset.addEventListener('click', (e)=>{
    simulador.innerText = '';
    calcAgain = false;
});

btnCalc.addEventListener('click', (e)=>{
    if(calcAgain === false){
        calcularMontos();
    }  
});


























































/* const nombre = document.getElementById('name');
const dni = document.getElementById('dni');

function simularCredito(){ 
    const usuario = [];
    let credito = {};
    let nombre = '';
    let dni;
    
    function calcularMontos(){
        const montoSolicitado = document.getElementById('monto');
        let opcionCuotas;
        let cuotas;
        let interes;
        let total;
        let montoCuota;
    
        switch(opcionCuotas){
            case 1:
                cuotas = 12;
                interes = (montoSolicitado * 15) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);

                credito = {montoSolicitado, cuotas, interes, total, montoCuota};
                usuario.push(nombre, dni, credito);
                usuarioGuardado = usuario;

                calc.classList = 'my-3'
                calc.innerText += `El monto total a pagar es $${total}\nEn ${cuotas} cuotas de $${montoCuota}`;
                
                break;
            case 2:
                cuotas = 24;
                interes = (montoSolicitado * 30) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);

                credito = {montoSolicitado, cuotas, interes, total, montoCuota};
                usuario.push(nombre, dni, credito);
                usuarioGuardado = usuario;

                calc.classList = 'my-3'
                calc.innerText += `El monto total a pagar es $${total}\nEn ${cuotas} cuotas de $${montoCuota}`;

                break;
            case 3:
                cuotas = 36;
                interes = (montoSolicitado * 45) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);

                credito = {montoSolicitado, cuotas, interes, total, montoCuota};
                usuario.push(nombre, dni, credito);
                usuarioGuardado = usuario;

                calc.classList = 'my-3'
                calc.innerText += `El monto total a pagar es $${total}\nEn ${cuotas} cuotas de $${montoCuota}`;
                
                break;
            case 4:
                cuotas = 48;
                interes = (montoSolicitado * 60) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);

                credito = {montoSolicitado, cuotas, interes, total, montoCuota};
                usuario.push(nombre, dni, credito);
                usuarioGuardado = usuario;

                calc.classList = 'my-3'
                calc.innerText += `El monto total a pagar es $${total}\nEn ${cuotas} cuotas de $${montoCuota}`;

                break;
            case 5:
                cuotas = 60;
                interes = (montoSolicitado * 75) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);

                credito = {montoSolicitado, cuotas, interes, total, montoCuota};
                usuario.push(nombre, dni, credito);
                usuarioGuardado = usuario;

                calc.classList = 'my-3'
                calc.innerText += `El monto total a pagar es $${total}\nEn ${cuotas} cuotas de $${montoCuota}`;

                break;
        }
    }
    calcularMontos();
}

simularCredito(); */
























