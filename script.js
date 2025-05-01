
let logButton = document.getElementById('loginButton');
let loginDiv = document.getElementById('login');
let formClose = document.getElementById('formClose');
let loginForm = document.getElementById('loginForm');
// Show login form
logButton.addEventListener('click', (e) => {
    loginDiv.style.zIndex = 10;
    e.stopPropagation(); // prevent it from triggering body click
});

// Close when clicking outside
loginDiv.addEventListener('click', () => {
    loginDiv.style.zIndex = -10;
});

// Prevent body click when clicking inside the login form
loginForm.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close with close button
formClose.addEventListener('click', (e) => {
    loginDiv.style.zIndex = -10;
    e.stopPropagation();
});

let signButton = document.getElementById('signupButton');
let signUpDiv = document.getElementById('signUp');
let signUpForm = document.getElementById('signUpForm');
let formClose2 = document.getElementById('formClose2');

signButton.addEventListener('click', (event) => {
    signUpDiv.style.zIndex = 11;
    event.stopPropagation();
});
signUpDiv.addEventListener('click', () => {
    signUpDiv.style.zIndex = -11;
});
signUpForm.addEventListener('click', (event) => {
    event.stopPropagation();
});
formClose2.addEventListener('click', (event) => {
    signUpDiv.style.zIndex = -11;
    event.stopPropagation();
});


// DeepSeek
// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Close menu when clicking links
document.querySelectorAll('#navLinks a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}));