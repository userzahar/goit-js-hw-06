const inputForm =  document.querySelector(".login-form");

const emailForm = document.querySelector('input[type="email"]');

const passwordForm = document.querySelector('input[type="password"]');

const submitButton = document.querySelector('button[type="submit"]');

inputForm.addEventListener('submit', onButtonSubmitForm );

function onButtonSubmitForm(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') alert('Всі поля повинні бути заповнені')
    else {
        const userRegister = {
        email: email.value,
        password: password.value,
        } 
        console.log(userRegister)
    }
    inputForm.reset();
}