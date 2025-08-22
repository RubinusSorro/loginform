const registerLink = document.querySelector('.register-link a');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const backToLogin = document.getElementById('backToLogin');
togglePassword.style.display = 'none';



registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

backToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});


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