function signup() {
    var registerForm = document.getElementById('register');
    registerForm.style.display = 'block';

    var loginForm = document.getElementById('login');
    loginForm.style.display = 'none';

    var loginForm = document.getElementById('register-after');
    loginForm.style.display = 'block';

    var loginForm = document.getElementById('register-before');
    loginForm.style.display = 'none';
}

function login() {
    var loginForm = document.getElementById('login');
    loginForm.style.display = 'block';

    var registerafter = document.getElementById('register-after');
    registerafter.style.display = 'none';

    var registerForm = document.getElementById('register-before');
    registerForm.style.display = 'block';

    var registerForm = document.getElementById('register');
    registerForm.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerButton').addEventListener('click', signup);
    document.getElementById('loginButton').addEventListener('click', login);
});
