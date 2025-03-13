document.addEventListener("DOMContentLoaded", function() {
  const signupContainer = document.querySelector('.signup-container');
  const loginContainer = document.querySelector('.login-container');
  const switchToLogin = document.getElementById('switchToLogin');
  const switchToSignup = document.getElementById('switchToSignup');
  const container = document.querySelector('.container');

  signupContainer.classList.add('active');

  switchToLogin.addEventListener('click', function(e) {
    e.preventDefault();
    container.classList.add('flip');
    signupContainer.classList.remove('active');
    loginContainer.classList.add('active');
    setTimeout(function() {
      container.classList.remove('flip');
    }, 500);
  });

  switchToSignup.addEventListener('click', function(e) {
    e.preventDefault();
    container.classList.add('flip');
    loginContainer.classList.remove('active');
    signupContainer.classList.add('active');
    setTimeout(function() {
      container.classList.remove('flip');
    }, 500);
  });
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
  
})