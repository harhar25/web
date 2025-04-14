document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;

            // Perform login logic here (e.g., AJAX request to server)
            console.log('Logging in:', username);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = registerForm.username.value;
            const password = registerForm.password.value;
            const email = registerForm.email.value;

            // Perform registration logic here (e.g., AJAX request to server)
            console.log('Registering:', username);
        });
    }
});