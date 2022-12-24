const inputForm =  document.querySelector(".login-form");
console.log("1", inputForm);

const emailForm = document.querySelector('input[type="email"]');
console.log("2", emailForm);

const passwordForm = document.querySelector('input[type="password"]');
console.log("3", passwordForm);

const submitButton = document.querySelector('button[type="submit"]');
console.log("4", submitButton);

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