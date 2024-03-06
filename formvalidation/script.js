

const name=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');
const form=document.getElementById('form');

const name_error=document.getElementById('name_error');
const email_error=document.getElementById('email_error')
const password_error=document.getElementById('password_error')




form.addEventListener("submit",(e)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(name.value === '' || name.value ==null){
        e.preventDefault();
        name_error.innerHTML="name is required"
    }

     if(!email.value.match(emailRegex)){
        e.preventDefault();
        email_error.innerHTML="email is error"
    }

    if(password.value.length <=6){
        e.preventDefault();
        password_error.innerHTML="password length greather than 6"
    }

    if(password.value,length >=10){
        e.preventDefault();
        password_error.innerHTML="password length less than 10"
    }
})