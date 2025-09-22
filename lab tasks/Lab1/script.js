document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');
    const errorMsg = document.getElementById('password-error');

    form.addEventListener('submit', function(event) {
        if (password.value !== confirmPassword.value) {
            event.preventDefault();
            errorMsg.style.display = 'inline';
            confirmPassword.focus();
        } else {
            errorMsg.style.display = 'none';
        }
    });
});
