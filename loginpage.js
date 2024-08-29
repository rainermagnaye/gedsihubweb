document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const generalErrorMessage = document.getElementById('general-error-message');
    const spinner = document.getElementById('spinner');

    let valid = true;

    // Clear previous errors
    usernameError.textContent = '';
    passwordError.textContent = '';
    generalErrorMessage.textContent = '';

    // Validate username
    if (username === '') {
        usernameError.textContent = 'Username is required.';
        valid = false;
    }

    // Validate password
    if (password === '') {
        passwordError.textContent = 'Password is required.';
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        valid = false;
    }

    if (valid) {
        spinner.style.display = 'block';
        setTimeout(() => {
            spinner.style.display = 'none';
            if (username === 'admin' && password === 'password123') {
                // Redirect to an external website after successful login
                window.location.href = 'file:///C:/Users/Rainer%20Richmond/OneDrive/Documents/GEDSI%20Hub/GADO/gado_dashboard.html'; // Replace with the actual website URL
            } else {
                generalErrorMessage.textContent = 'Invalid username or password.';
            }
        }, 2000);
    }
});

// Toggle password visibility
document.getElementById('showPassword').addEventListener('change', function() {
    const passwordInput = document.getElementById('password');
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

// Populate birth date and year dropdowns
window.onload = function() {
    const birthDate = document.getElementById('birthDate');
    const birthYear = document.getElementById('birthYear');

    // Populate day options
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        birthDate.add(option);
    }

    // Populate year options
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        birthYear.add(option);
    }
};
