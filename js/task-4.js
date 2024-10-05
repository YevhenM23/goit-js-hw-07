const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const emails = elements.email.value.trim();
    const passwords = elements.password.value.trim();
    if (emails && passwords) {
       const resultForm = {
        email: emails,
        password: passwords
    }
    console.log(resultForm);
    } else {
        alert ('All form fields must be filled in');
    }
     event.target.reset();
}





























