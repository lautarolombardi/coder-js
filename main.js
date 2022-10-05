const calc = document.querySelector('#calc');
const btnCalc = document.querySelector('#btnCalc');
const btnStart = document.querySelector('#btnStart');

const usuarios = [];
let usuario;

let nombre;
let dni;
let monto;
let cuotas;
let interes;
let total;
let montoCuota;

const calcularMontos = ()=>{
    switch(cuotas){
        case 12: {
            interes = (monto * 15) / 100;
            total = monto + interes;
            montoCuota = Math.round(total / cuotas);

            break;
        }
        case 24: {
            interes = (monto * 30) / 100;
            total = monto + interes;
            montoCuota = Math.round(total / cuotas);

            break;
        }
        case 36: {
            interes = (monto * 45) / 100;
            total = monto + interes;
            montoCuota = Math.round(total / cuotas);

            break;
        }
        case 48: {
            interes = (monto * 60) / 100;
            total = monto + interes;
            montoCuota = Math.round(total / cuotas);

            break;
        }
        case 60: {
            interes = (monto * 75) / 100;
            total = monto + interes;
            montoCuota = Math.round(total / cuotas);

            break;
        }
    }
};

const solicitarCredito = ()=>{
    nombre = document.querySelector('#nombre').value;
    dni = parseInt(document.querySelector('#dni').value);
    monto = parseInt(document.querySelector('#monto').value);
    cuotas = parseInt(document.querySelector('#cuotas').value);

    calcularMontos();

    const usuariosObtenidos = JSON.parse(localStorage.getItem('usuarios'));

    if(nombre !== '' && !isNaN(dni) && !isNaN(monto) && monto >= 5000 && cuotas !== 0){
        if(usuariosObtenidos !== null){
            const yaEstaba = usuariosObtenidos.find(user => user.dni === dni && user.monto === monto);
            if(yaEstaba){
                calc.innerHTML = `<p class="text-danger">Ya iniciaste una solicitud por ese monto</p>`;
            } else{
                usuario = {nombre, dni, monto, cuotas, interes, total, montoCuota};
                usuarios.push(usuario);

                localStorage.setItem('usuarios', JSON.stringify(usuarios));

                calc.innerHTML = `<p class="text-success">La solicitud fue ingresada con exito</p>`;
            }
        } else{
            usuario = {nombre, dni, monto, cuotas, interes, total, montoCuota};
            usuarios.push(usuario);

            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            calc.innerHTML = `<p class="text-success">La solicitud fue ingresada con exito</p>`;
        }
    }
};

form.addEventListener('reset', ()=>{
    calc.innerHTML = '';
    btnCalc.classList.remove('d-none');
    btnStart.classList.add('d-none');
});

btnCalc.addEventListener('click', (e)=>{
    e.preventDefault();

    monto = parseInt(document.querySelector('#monto').value);
    cuotas = parseInt(document.querySelector('#cuotas').value);

    if(monto >= 5000){
        if(cuotas !== 0){
            calcularMontos();

            calc.innerHTML = `<p>El monto total a pagar es <b>$${total}</b><br>En <b>${cuotas}</b> cuotas de <b>$${montoCuota}</b></p>`;

            btnCalc.classList.add('d-none');
            btnStart.classList.remove('d-none');
        } else{
            calc.innerHTML = `<p class="text-danger">Debes seleccionar una opción para las cuotas</p>`;
        }
    } else{
        calc.innerHTML = `<p class="text-danger">El monto debe ser mayor o igual a $5000</p>`;
    }
});

btnStart.addEventListener('click', (e)=>{
    e.preventDefault();

    solicitarCredito();
});



