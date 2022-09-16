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
                if(confirm(`El monto total a pagar es $${total}\n\nEn ${cuotas} cuotas de $${montoCuota}\n\n¿Desea continuar?`)){
                    credito = {montoSolicitado, cuotas, interes, total, montoCuota};
                    usuario.push(nombre, dni, credito);
                    usuarioGuardado = usuario;
                    console.log(usuario);
                    if(confirm('La solicitud fue ingresada exitosamente. El monto se acreditará en un plazo máximo de 48 hs habiles\n\n¿Desea volver al menú principal?')){
                        simularCredito();
                    }
                }
                break;
            case 2:
                cuotas = 24;
                interes = (montoSolicitado * 30) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);
                if(confirm(`El monto total a pagar es $${total}\n\nEn ${cuotas} cuotas de $${montoCuota}\n\n¿Desea continuar?`)){
                    credito = {montoSolicitado, cuotas, interes, total, montoCuota};
                    usuario.push(nombre, dni, credito);
                    usuarioGuardado = usuario;
                    console.log(usuario);
                    if(confirm('La solicitud fue ingresada exitosamente. El monto se acreditará en un plazo máximo de 48 hs habiles\n\n¿Desea volver al menú principal?')){
                        simularCredito();
                    }
                }
                break;
            case 3:
                cuotas = 36;
                interes = (montoSolicitado * 45) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);
                if(confirm(`El monto total a pagar es $${total}\n\nEn ${cuotas} cuotas de $${montoCuota}\n\n¿Desea continuar?`)){
                    credito = {montoSolicitado, cuotas, interes, total, montoCuota};
                    usuario.push(nombre, dni, credito);
                    usuarioGuardado = usuario;
                    console.log(usuario);
                    if(confirm('La solicitud fue ingresada exitosamente. El monto se acreditará en un plazo máximo de 48 hs habiles\n\n¿Desea volver al menú principal?')){
                        simularCredito();
                    }
                }
                break;
            case 4:
                cuotas = 48;
                interes = (montoSolicitado * 60) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);
                if(confirm(`El monto total a pagar es $${total}\n\nEn ${cuotas} cuotas de $${montoCuota}\n\n¿Desea continuar?`)){
                    credito = {montoSolicitado, cuotas, interes, total, montoCuota};
                    usuario.push(nombre, dni, credito);
                    usuarioGuardado = usuario;
                    console.log(usuario);
                    if(confirm('La solicitud fue ingresada exitosamente. El monto se acreditará en un plazo máximo de 48 hs habiles\n\n¿Desea volver al menú principal?')){
                        simularCredito();
                    }
                }
                break;
            case 5:
                cuotas = 60;
                interes = (montoSolicitado * 75) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);
                if(confirm(`El monto total a pagar es $${total}\n\nEn ${cuotas} cuotas de $${montoCuota}\n\n¿Desea continuar?`)){
                    credito = {montoSolicitado, cuotas, interes, total, montoCuota};
                    usuario.push(nombre, dni, credito);
                    usuarioGuardado = usuario;
                    console.log(usuario);
                    if(confirm('La solicitud fue ingresada exitosamente. El monto se acreditará en un plazo máximo de 48 hs habiles\n\n¿Desea volver al menú principal?')){
                        simularCredito();
                    }
                }
                break;
        }
    }
    calcularMontos();
}

simularCredito();






















/* function simularCredito(){
    const usuario = [];
    let usuario = {};
    let nombre = '';
    let dni;
    let montoSolicitado;
    let opcionCuotas;

    alert('TU CRÉDITO');

    do{
        nombre = prompt('Ingresá tu nombre completo');
    } while(nombre === '' || nombre === null)
    
    do{
        dni = parseInt(prompt('Ingresá tu DNI'));
    } while(isNaN(dni) || dni === '')
    
    do{
        montoSolicitado = parseInt(prompt('Ingresá el monto a solicitar'));
    } while(isNaN(montoSolicitado))
    
    while(montoSolicitado < 5000){
        montoSolicitado = parseInt(prompt('El monto solicitado debe ser mayor a $5000'));
    }
    
    while((montoSolicitado % 500) != 0){
        montoSolicitado = parseInt(prompt('El monto solicitado debe ser múltiplo de $500'));
    }
    
    do{
        opcionCuotas = parseInt(prompt(
            `¿En cuántas cuotas?\n
            1. 12 cuotas\n
            2. 24 cuotas\n
            3. 36 cuotas\n
            4. 48 cuotas\n
            5. 60 cuotas\n
            Seleccioná una opción`
        ));
    } while(opcionCuotas < 1 || opcionCuotas > 5 || isNaN(opcionCuotas))
    
    function calcularMontos(){
        let cuotas;
        let interes;
        let total;
        let montoCuota;
        let aceptaConfirm2;
        let aceptaConfirm3;
        switch(opcionCuotas){
            case 1: {
                cuotas = 12;
                interes = (montoSolicitado * 15) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);
    
                aceptaConfirm2 = confirm(`
                    El total a pagar es ${total}\n
                    En ${cuotas} cuotas de ${montoCuota}\n
                    ¿Deseas continuar?`
                );
                if(aceptaConfirm2){
                    usuario = {nombre, dni, montoSolicitado, cuotas, interes, total, montoCuota};
                    usuario.push(usuario);
                    console.log(usuario);
                    aceptaConfirm3 = confirm('Se te ha otorgado el crédito con éxito\n\n¿Volver a la pantalla de inicio?');
                    if(aceptaConfirm3){
                        simularCredito();
                    }
                } else{
                    aceptaConfirm3 = confirm('Cancelaste la operación\n\n¿Volver a la pantalla de inicio?');
                    if(aceptaConfirm3){
                        simularCredito();
                    }
                }
                break;
            }
            case 2: {
                cuotas = 24;
                interes = (montoSolicitado * 30) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);
    
                aceptaConfirm2 = confirm(`
                    El total a pagar es ${total}\n
                    En ${cuotas} cuotas de ${montoCuota}\n
                    ¿Deseas continuar?`
                );
                if(aceptaConfirm2){
                    usuario = {nombre, dni, montoSolicitado, cuotas, interes, total, montoCuota};
                    usuario.push(usuario);
                    console.log(usuario);
                    aceptaConfirm3 = confirm('Se te ha otorgado el crédito con éxito\n\n¿Volver a la pantalla de inicio?');
                    if(aceptaConfirm3){
                        simularCredito();
                    }
                } else{
                    aceptaConfirm3 = confirm('Cancelaste la operación\n\n¿Volver a la pantalla de inicio?');
                    if(aceptaConfirm3){
                        simularCredito();
                    }
                }
                break;
            }
            case 3: {
                cuotas = 36;
                interes = (montoSolicitado * 45) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);
    
                aceptaConfirm2 = confirm(`
                    El total a pagar es ${total}\n
                    En ${cuotas} cuotas de ${montoCuota}\n
                    ¿Deseas continuar?`
                );
                if(aceptaConfirm2){
                    usuario = {nombre, dni, montoSolicitado, cuotas, interes, total, montoCuota};
                    usuario.push(usuario);
                    console.log(usuario);
                    aceptaConfirm3 = confirm('Se te ha otorgado el crédito con éxito\n\n¿Volver a la pantalla de inicio?');
                    if(aceptaConfirm3){
                        simularCredito();
                    }
                } else{
                    aceptaConfirm3 = confirm('Cancelaste la operación\n\n¿Volver a la pantalla de inicio?');
                    if(aceptaConfirm3){
                        simularCredito();
                    }
                }
                break;
            }
            case 4: {
                cuotas = 48;
                interes = (montoSolicitado * 60) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);
    
                aceptaConfirm2 = confirm(`
                    El total a pagar es ${total}\n
                    En ${cuotas} cuotas de ${montoCuota}\n
                    ¿Deseas continuar?`
                );
                if(aceptaConfirm2){
                    usuario = {nombre, dni, montoSolicitado, cuotas, interes, total, montoCuota};
                    usuario.push(usuario);
                    console.log(usuario);
                    aceptaConfirm3 = confirm('Se te ha otorgado el crédito con éxito\n\n¿Volver a la pantalla de inicio?');
                    if(aceptaConfirm3){
                        simularCredito();
                    }
                } else{
                    aceptaConfirm3 = confirm('Cancelaste la operación\n\n¿Volver a la pantalla de inicio?');
                    if(aceptaConfirm3){
                        simularCredito();
                    }
                }
                break;
            }
            case 5: {
                cuotas = 60;
                interes = (montoSolicitado * 75) / 100;
                total = montoSolicitado + interes;
                montoCuota = Math.round(total / cuotas);
    
                aceptaConfirm2 = confirm(`
                    El total a pagar es ${total}\n
                    En ${cuotas} cuotas de ${montoCuota}\n
                    ¿Deseas continuar?`
                );
                if(aceptaConfirm2){
                    usuario = {nombre, dni, montoSolicitado, cuotas, interes, total, montoCuota};
                    usuario.push(usuario);
                    console.log(usuario);
                    aceptaConfirm3 = confirm('Se te ha otorgado el crédito con éxito\n\n¿Volver a la pantalla de inicio?');
                    if(aceptaConfirm3){
                        simularCredito();
                    }
                } else{
                    aceptaConfirm3 = confirm('Cancelaste la operación\n\n¿Volver a la pantalla de inicio?');
                    if(aceptaConfirm3){
                        simularCredito();
                    }
                }
                break;
            }
        }
    }
    calcularMontos();
}

simularCredito(); */
























