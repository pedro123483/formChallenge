let ids = (id) => document.getElementById(id);

let firstName = ids('primeiroNome');
let lastName = ids('lastName');
let email = ids('emailAdress');
let password = ids('password');
let botao = ids('botao');




firstName.addEventListener('blur', () =>{

    if(firstName.value.length == ''){

        firstName.setAttribute('class', 'erro');
        
    } else {

        firstName.setAttribute('class', 'ok');
        firstName = true;

    }
})

lastName.addEventListener('blur', () =>{

    if(lastName.value.length == ''){

        lastName.setAttribute('class', 'erro');
    } else {

        lastName.setAttribute('class', 'ok');
        lastName = true;
    }
})


email.addEventListener('blur', () => {

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){

        email.setAttribute('class', 'erro')

    } else {

        email.setAttribute('class', 'ok');
        email = true;
    }
})


password.addEventListener('blur', () =>{

    if(password.value.length == ''){

        password.setAttribute('class', 'erro');
    } else {

        password.setAttribute('class', 'ok');
        password = true
    }

})


botao.addEventListener('click', () => {

    if (firstName == true && lastName == true && email == true & password == true){

        window.alert('Thank you for subscribe!');

    } else {

        window.alert('Check your data!');
    }
})