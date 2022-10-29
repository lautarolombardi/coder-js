const users = [];
let user;

let userName;
let userId;
let email;
let amount;
let months;
let fee;
let total;
let subscription;

const inputs = document.querySelectorAll('.form-control, .form-select');
const calcText = document.querySelector('#calcText');
const btnCalc = document.querySelector('#btnCalc');
const btnStart = document.querySelector('#btnStart');

const isValid = {
    userName: false,
    userId: false,
    email: false,
    amount: false,
    months: false,
};

const regExp = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/
};








const validateFields = (e)=>{
    userName = document.querySelector('#username');
    userId = document.querySelector('#id');
    email = document.querySelector('#email');
    amount = document.querySelector('#amount');
    months = document.querySelector('#months');

    switch(e.target.id){
        
        case 'username': {
            if(regExp.name.test(e.target.value) && (e.target.value) !== ''){
                setTimeout(()=>{
                    userName.classList.add('is-valid');
                    userName.classList.remove('is-invalid');
                }, 1500);
                isValid.userName = true;
            } else{
                setTimeout(()=>{
                    userName.classList.add('is-invalid');
                    userName.classList.remove('is-valid');
                }, 1500);
                isValid.userName = false;
            }

            break;
        }

        case 'id': {
            if(!isNaN(e.target.value) && e.target.value !== ''){
                setTimeout(()=>{
                    userId.classList.add('is-valid');
                    userId.classList.remove('is-invalid');
                }, 1500);
                isValid.userId = true;
            } else{
                setTimeout(()=>{
                    userId.classList.add('is-invalid');
                    userId.classList.remove('is-valid');
                }, 1500);
                isValid.userId = false;
            }

            break;
        }

        case 'email': {
            if(regExp.email.test(e.target.value) && (e.target.value) !== ''){
                setTimeout(()=>{
                    email.classList.add('is-valid');
                    email.classList.remove('is-invalid');
                }, 1500);
                isValid.email = true;
            } else{
                setTimeout(()=>{
                    email.classList.add('is-invalid');
                    email.classList.remove('is-valid');
                }, 1500);
                isValid.email = false;
            }

            break;
        }

        case 'amount': {
            if((e.target.value) > 5000 && (e.target.value) < 5000000 && (e.target.value) !== ''){
                setTimeout(()=>{
                    amount.classList.add('is-valid');
                    amount.classList.remove('is-invalid');
                }, 1500);
                isValid.amount = true;
            } else{
                setTimeout(()=>{
                    amount.classList.add('is-invalid');
                    amount.classList.remove('is-valid');
                }, 1500);
                isValid.amount = false;
            }

            break;
        }

        case 'months': {
            if((e.target.value) != 0){
                setTimeout(()=>{
                    months.classList.add('is-valid');
                    months.classList.remove('is-invalid');
                }, 1500);
                isValid.months = true;
            } else{
                setTimeout(()=>{
                    months.classList.add('is-invalid');
                    months.classList.remove('is-valid');
                }, 1500);
                isValid.months = false;
            }

            break;
        }
    };
};


const calc = ()=>{
    userName = document.querySelector('#username').value;
    userId = parseInt(document.querySelector('#id').value);
    email = document.querySelector('#email').value;
    amount = parseInt(document.querySelector('#amount').value);
    months = parseInt(document.querySelector('#months').value);

    switch(months){
        case 12: {
            fee = (amount * 15) / 100;
            total = amount + fee;
            subscription = Math.round(total / months);

            break;
        }
        case 24: {
            fee = (amount * 30) / 100;
            total = amount + fee;
            subscription = Math.round(total / months);

            break;
        }
        case 36: {
            fee = (amount * 45) / 100;
            total = amount + fee;
            subscription = Math.round(total / months);

            break;
        }
        case 48: {
            fee = (amount * 60) / 100;
            total = amount + fee;
            subscription = Math.round(total / months);

            break;
        }
        case 60: {
            fee = (amount * 75) / 100;
            total = amount + fee;
            subscription = Math.round(total / months);

            break;
        }
    }
};

const getCredit = ()=>{
    calc();

    const obtainedUsers = JSON.parse(sessionStorage.getItem('usuarios'));

    if(obtainedUsers !== null){
        const userRegistered = obtainedUsers.find(us => us.userName == userName && us.userId === userId && us.amount === amount);
        if(userRegistered){
            setTimeout(()=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ya iniciaste una solicitud antes por ese monto',
                    timer: 5000
                });
            }, 1500);
        } else{
            user = {userName, userId, amount, months, fee, total, subscription};
            users.push(user);

            sessionStorage.setItem('usuarios', JSON.stringify(users));

            setTimeout(()=>{
                Swal.fire({
                    icon: 'success',
                    title: 'Felicitaciones',
                    text: 'Iniciaste con éxito la solicitud. Te llegará un mail a tu casilla de correo',
                    timer: 5000
                });
            }, 1500);

            sendEmail();
        }
    } else{
        user = {userName, userId, amount, months, fee, total, subscription};
        users.push(user);

        sessionStorage.setItem('usuarios', JSON.stringify(users));

        setTimeout(()=>{
            Swal.fire({
                icon: 'success',
                title: 'Felicitaciones',
                text: 'Iniciaste con éxito la solicitud. Te llegará un mail a tu casilla de correo',
                timer: 5000
            });
        }, 1500);

        sendEmail();
    }
};




const sendEmail = ()=>{
    const data = {
        service_id: 'default_service',
        template_id: 'template_vf8d421',
        user_id: 'ne6L2MDU8Zm1oZcVn',
        template_params: {
            'to_name': username,
            'to_email': email
        }
    };
    
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type':'application/json',
        }
    });
};






inputs.forEach((input) =>{
    input.addEventListener('keyup', validateFields);
    input.addEventListener('blur', validateFields);
});

form.addEventListener('reset', ()=>{
    calcText.classList.add('d-none');
    calcText.innerHTML = '';
    btnCalc.classList.remove('d-none');
    btnStart.classList.add('d-none');
});

btnCalc.addEventListener('click', (e) => {
    e.preventDefault();

    if(isValid.userName && isValid.userId && isValid.email && isValid.amount && isValid.months){
        calc();

        calcText.classList.remove('d-none');
        calcText.innerHTML = `El monto total a pagar es <b class="text-mainColor">$${total}</b> <br/> En <b class="text-mainColor">${months}</b> cuotas de <b class="text-mainColor">$${subscription}</b>`;
        btnCalc.classList.add('d-none');
        btnStart.classList.remove('d-none');
    }
});

btnStart.addEventListener('click', (e)=>{
    e.preventDefault();

    if(isValid.userName && isValid.userId && isValid.email && isValid.amount && isValid.months){
        calc();

        getCredit();
    }
});



