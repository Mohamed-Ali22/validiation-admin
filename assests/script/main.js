
let submitBtn = document.querySelector('input[type="submit"]')
submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    let inputs = document.querySelectorAll('input:not([type="submit"])');
    let username =document.querySelector('input[type="text"]')
    let email = document.querySelector('input[type="email"]')
    let password = document.querySelector('input[type="password"]')
    let password_pattern = /^[0-9]{3,8}$/
    let email_pattern = /^[a-zA-Z]{1,30}@(gmail|yahoo)\.com$/
    let username_pattern = /^[A-Za-z]{1,18}$/
    let error = false
    for (let i = 0; i < inputs.length; i++){
        if(inputs[i].value.length ==0){
            inputs[i].nextElementSibling.innerHTML =`${inputs[i].name} required`
            error=true
        }else{
            inputs[i].nextElementSibling.innerHTML =``
        }
    }
    if(username.value.length !=0){
        if(username_pattern.test(username.value)==false){
            username.nextElementSibling.innerHTML = `Username Not Valid`
            error=true
        }else{
            username.nextElementSibling.innerHTML =``
        }
    }else if(email.value.length !=0){
        if(email_pattern.test(email.value)==false){
            email.nextElementSibling.innerHTML = `Email Not Valid`
            error=true
        }else{
            email.nextElementSibling.innerHTML =``
        }
    }else if(password.value.length !=0){
        if(password_pattern.test(password.value)==false){
            password.nextElementSibling.innerHTML = `Password Not Valid`
            error=true
        }else{
            password.nextElementSibling.innerHTML =``
        }
    }
    if(error == false){
        var userSignUp ={
            name : document.querySelector('input[type="text"]').value,
            email:document.querySelector('input[type="email"]').value,
            password:document.querySelector('input[type="password"]').value
        }
        localStorage.setItem('userform', JSON.stringify(userSignUp))
        window.location.href=`http://127.0.0.1:5500/login.html` 
    }else if(error == true){
        erorr[i].nextElementSibling.innerHTML = `there is a problem`
    }
})