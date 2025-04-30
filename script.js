<<<<<<< HEAD

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

// Enhanced Functionality
// document.addEventListener('DOMContentLoaded', () => {
//     // Smooth Scroll
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', (e) => {
//         e.preventDefault();
//         document.querySelector(anchor.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//         });
//       });
//     });
  
//     // Parallax Effect
//     window.addEventListener('scroll', () => {
//       const heroImg = document.querySelector('#heroSection img');
//       heroImg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
//     });
  
//     // Password Visibility Toggle
//     document.querySelectorAll('.password-wrapper input').forEach(input => {
//       const toggle = document.createElement('span');
//       toggle.className = 'toggle-password';
//       toggle.textContent = '👁️';
      
//       toggle.addEventListener('click', () => {
//         const type = input.type === 'password' ? 'text' : 'password';
//         input.type = type;
//         toggle.textContent = type === 'password' ? '👁️' : '👁️';
//       });
      
//       input.parentNode.appendChild(toggle);
//     });
  
//     // Form Validation
//     document.getElementById('signUpForm').addEventListener('submit', (e) => {
//       const pass = document.getElementById('pass').value;
//       const cpass = document.getElementById('Cpass').value;
      
//       if(pass !== cpass) {
//         e.preventDefault();
//         alert('Passwords do not match!');
//       }
//     });
//   });
  
//   // Original Popup Logic (Keep existing code)
=======

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

// Enhanced Functionality
// document.addEventListener('DOMContentLoaded', () => {
//     // Smooth Scroll
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', (e) => {
//         e.preventDefault();
//         document.querySelector(anchor.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//         });
//       });
//     });
  
//     // Parallax Effect
//     window.addEventListener('scroll', () => {
//       const heroImg = document.querySelector('#heroSection img');
//       heroImg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
//     });
  
//     // Password Visibility Toggle
//     document.querySelectorAll('.password-wrapper input').forEach(input => {
//       const toggle = document.createElement('span');
//       toggle.className = 'toggle-password';
//       toggle.textContent = '👁️';
      
//       toggle.addEventListener('click', () => {
//         const type = input.type === 'password' ? 'text' : 'password';
//         input.type = type;
//         toggle.textContent = type === 'password' ? '👁️' : '👁️';
//       });
      
//       input.parentNode.appendChild(toggle);
//     });
  
//     // Form Validation
//     document.getElementById('signUpForm').addEventListener('submit', (e) => {
//       const pass = document.getElementById('pass').value;
//       const cpass = document.getElementById('Cpass').value;
      
//       if(pass !== cpass) {
//         e.preventDefault();
//         alert('Passwords do not match!');
//       }
//     });
//   });
  
//   // Original Popup Logic (Keep existing code)
>>>>>>> 15b02fae3e4dbf8ee2d042ec04c0a02a3b7d179b
//   // ... (Your original popup code remains unchanged)