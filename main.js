const form = document.querySelector('#form');

let usuario = {};

let nombre = "";
let dni;
let montoSolicitado;
let cuotas;

let calcAgain = true;

const calcularMontos = ()=>{
    let interes;
    let total;
    let montoCuota;

    const calc = document.querySelector('#calc');

    switch(cuotas){
        case 12: {
            interes = (montoSolicitado * 15) / 100;
            total = montoSolicitado + interes;
            montoCuota = Math.round(total / cuotas);

            break;
        }
        case 24: {
            interes = (montoSolicitado * 30) / 100;
            total = montoSolicitado + interes;
            montoCuota = Math.round(total / cuotas);

            break;
        }
        case 36: {
            interes = (montoSolicitado * 45) / 100;
            total = montoSolicitado + interes;
            montoCuota = Math.round(total / cuotas);

            break;
        }
        case 48: {
            interes = (montoSolicitado * 60) / 100;
            total = montoSolicitado + interes;
            montoCuota = Math.round(total / cuotas);

            break;
        }
        case 60: {
            interes = (montoSolicitado * 75) / 100;
            total = montoSolicitado + interes;
            montoCuota = Math.round(total / cuotas);

            break;
        }
    }
    usuario = {nombre, dni, montoSolicitado, cuotas, interes, total, montoCuota};

    const enJSON = JSON.stringify(usuario);
    localStorage.setItem('usuario', enJSON);

    const usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));

    calc.innerHTML += `<p>El monto total a pagar es <b>$${usuarioRecuperado.total}</b><br>En ${usuarioRecuperado.cuotas} cuotas de <b>$${usuarioRecuperado.montoCuota}</b>`;
    calcAgain = false;
};

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(calcAgain){
        const formulario = new FormData(form);

        nombre = formulario.get('nombre');
        dni = parseInt(formulario.get('dni'));
        montoSolicitado = parseInt(formulario.get('monto'));
        cuotas = parseInt(formulario.get('cuotas'));

        if(montoSolicitado > 5000){
            calcularMontos();
        } else{
            calc.innerHTML = `<p>El monto debe ser mayor a <b>$5000</b></p>`;
        }
    }
});

form.addEventListener('reset', ()=>{
    localStorage.clear();
    calc.innerHTML = '';
    calcAgain = true;
});




