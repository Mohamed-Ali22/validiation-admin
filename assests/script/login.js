
let eye = document.querySelector('.eye i');
let userform =JSON.parse(localStorage.getItem('userform'));
let email = document.querySelector('form input[type="email"]');
let password = document.querySelector('form input[type="password"]');
let password_pattern = /^[0-9]{3,8}$/
let email_pattern = /^[a-zA-Z]{1,30}@(gmail|yahoo)\.com$/


let show = true;
eye.addEventListener('click',(e)=>{
    if(show == true){
        password.setAttribute('type' , 'text')
        show = false;
    }else if(show == false){
        password.setAttribute('type' , 'password')
        show = true;
    }
})

document.querySelector('input[type="submit"]').addEventListener('click', function(e){
    e.preventDefault()

    var inputs = document.querySelectorAll('input:not([type="submit"])')
    for (var i = 0; i < inputs.length; i++){
        if (inputs[i].value.length ==0){
            inputs[i].nextElementSibling.innerHTML =`${inputs[i].name} required`;
        }else if(email_pattern.test(email.value) == false){
            email.nextElementSibling.innerHTML = `Email Not Valid`
            error=true
        }else if(email.value !== userform.email){
            email.nextElementSibling.innerHTML = `Email not found`
            error=true
        }else if(password_pattern.test(password.value) == false){
            password.nextElementSibling.innerHTML = `Password Not Valid`
            error=true
        }else if(password.value !== userform.password){
            password.nextElementSibling.innerHTML = `Wrong Password`
        }else{
            inputs[i].nextElementSibling.innerHTML =``
        }
    }
    if(email.value == userform.email && password.value == userform.password){
        localStorage.setItem('userLoggedIn',JSON.stringify(userform));
        window.location.href =`http://127.0.0.1:5500/product.html`
    }else if(!error){
        email[i].nextElementSibling.innerHTML = `Email Not Valid`;
        password[i].nextElementSibling.innerHTML = `Password Not Valid`;
    }
})