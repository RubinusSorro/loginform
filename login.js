const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');


togglePassword.style.display = 'none';


password.addEventListener('input', () => {
    if (password.value.length > 0) {
        togglePassword.style.display = 'block';
    } else {
        togglePassword.style.display = 'none';
    }
});

togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    
    togglePassword.classList.toggle('bx-show');
    togglePassword.classList.toggle('bx-hide');
});
