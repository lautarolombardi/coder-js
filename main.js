let usuarioGuardado = [];

function simularCredito(){ 
    const usuario = [];
    let credito = {};
    let nombre = '';
    let dni; 

    alert('TU CRÉDITO');

    do{
        nombre = prompt('Ingrese tu nombre completo');
    } while(nombre === '' || nombre === null)
    
    do{
        dni = parseInt(prompt('Ingrese su DNI'));
    } while(isNaN(dni))
    
    function calcularMontos(){
        let montoSolicitado;
        let opcionCuotas;
        let cuotas;
        let interes;
        let total;
        let montoCuota;
        let calc = document.getElementById('calc');
    
        do{
            montoSolicitado = parseInt(prompt('Ingrese el monto que desea solicitar'));
        } while(isNaN(montoSolicitado))
        
        while(montoSolicitado < 5000){
            montoSolicitado = parseInt(prompt('El monto solicitado debe ser mayor a $5000'));
        }
        
        while((montoSolicitado % 500) != 0){
            montoSolicitado = parseInt(prompt('El monto solicitado debe ser múltiplo de $500'));
        }

        while(usuarioGuardado.includes(dni) && usuarioGuardado[2].montoSolicitado === montoSolicitado){
            if(confirm('Ya realizó una solicitud recientemente por el mismo importe\n\n¿Desea continuar?')){
            } else{
                simularCredito();
            }
        }
        
        do{
            opcionCuotas = parseInt(prompt('¿En cuántas cuotas?\n\n1. 12 cuotas\n\n2. 24 cuotas\n\n3. 36 cuotas\n\n4. 48 cuotas\n\n5. 60 cuotas'));
        } while(opcionCuotas < 1 || opcionCuotas > 5 || isNaN(opcionCuotas))
    
    
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

simularCredito();
























