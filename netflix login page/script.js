document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email && password) {
        // Your login logic goes here
        console.log('User logged in successfully.');
    } else {
        alert('Please enter your email and password.');
    }
});