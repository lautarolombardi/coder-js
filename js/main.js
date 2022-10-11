const calc = document.querySelector('#calc');
const btnCalc = document.querySelector('#btnCalc');
const btnStart = document.querySelector('#btnStart');

const usuarios = [];
let usuario;

let nombre;
let dni;
let email;
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

const sendEmail = ()=>{
    const data = {
        service_id: 'default_service',
        template_id: 'template_vf8d421',
        user_id: 'ne6L2MDU8Zm1oZcVn',
    };
    
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type':'application/json',
        }
    });
};

const solicitarCredito = ()=>{
    nombre = document.querySelector('#nombre').value;
    dni = parseInt(document.querySelector('#dni').value);
    email = document.querySelector('#email').value;
    monto = parseInt(document.querySelector('#monto').value);
    cuotas = parseInt(document.querySelector('#cuotas').value);

    calcularMontos();

    const usuariosObtenidos = JSON.parse(sessionStorage.getItem('usuarios'));

    if(nombre !== '' && !isNaN(dni) && !isNaN(monto) && monto >= 5000 && cuotas !== 0){
        if(usuariosObtenidos !== null){
            const yaEstaba = usuariosObtenidos.find(user => user.nombre == nombre && user.dni === dni && user.monto === monto);
            if(yaEstaba){
                setTimeout(()=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Ya iniciaste una solicitud antes por ese monto',
                        timer: 5000
                    });
                }, 500);
                
            } else{
                usuario = {nombre, dni, monto, cuotas, interes, total, montoCuota};
                usuarios.push(usuario);

                sessionStorage.setItem('usuarios', JSON.stringify(usuarios));

                setTimeout(()=>{
                    Swal.fire({
                        icon: 'success',
                        title: 'Felicitaciones',
                        text: 'Iniciaste con éxito la solicitud',
                        timer: 5000
                    });
                }, 500);

                sendEmail();
            }
        } else{
            usuario = {nombre, dni, monto, cuotas, interes, total, montoCuota};
            usuarios.push(usuario);

            sessionStorage.setItem('usuarios', JSON.stringify(usuarios));

            setTimeout(()=>{
                Swal.fire({
                    icon: 'success',
                    title: 'Felicitaciones',
                    text: 'Iniciaste con éxito la solicitud',
                    timer: 5000
                });
            }, 500);

            sendEmail();
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



