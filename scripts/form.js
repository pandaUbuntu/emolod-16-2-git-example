const registrationForm = document.getElementById("registrationForm");
const errorMessage = document.getElementById("error-message");


errorMessage.style.color = 'red';

function getValue(selectorName){
    return document.querySelector(selectorName).value.trim();
}

registrationForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    errorMessage.textContent = "";
    
    const username = getValue('#username');
    const email = getValue('#email');
    const password = getValue('#password');
    const repeatPassword = getValue('#repeatPassword');
    const birthDate = new Date(getValue('#birthDate'));
    const role = getValue('#role');
    const agree = getValue('#agree');

    if(username.length < 2) {
        errorMessage.textContent = "Ім'я має бути більше двох символів!"
        return;
    }

    if(!email.includes('@') || !email.includes('.')) {
        errorMessage.textContent = "Неправильний формат імейлу!"
        return;
    }

    if(password.length < 8 || password.length > 16){
        errorMessage.textContent = "Неправильний розмір пароля!"
        return;
    }

    if(password != repeatPassword){
        errorMessage.textContent = "Паролі неспівпадають!"
        return;
    }

    console.log(birthDate);
    if(birthDate.getFullYear() < 1920 || birthDate > Date.now()){
        errorMessage.textContent = "Дата народження невалідна!"
        return;
    }

    if(!agree){
        errorMessage.textContent = "Ви не погодились з обробкою ваших даних.!"
        return;
    }

    errorMessage.style.color = 'green';
    errorMessage.textContent = "Ви успішно зареєстровані!"
})