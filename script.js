const password = document.getElementById("password");
const confirmPassword = document.getElementById("con-password");
const passwordError = document.getElementById("pass-error");
const button = document.querySelector("button");

const matches = () => {
    return password.value === confirmPassword.value;
}

const updateInputs = (e) => {
    if ([...password.classList].includes('invalid')) {
        if (matches()) {
            password.classList.remove('invalid');
            confirmPassword.classList.remove('invalid');
            passwordError.classList.add('hidden');
            button.removeAttribute('disabled');
        }
    } else {
        if (!matches()) {
            password.classList.add('invalid');
            confirmPassword.classList.add('invalid');
            passwordError.classList.remove('hidden');
            button.setAttribute('disabled', '');
        }
    }
}

password.addEventListener('change', updateInputs);
confirmPassword.addEventListener('change', updateInputs);