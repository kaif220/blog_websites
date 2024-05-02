let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () =>{
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}


function toggleForm() {
  var formContainer = document.querySelector('.form-container');
  var loginForm = document.getElementById('loginForm');
  var signUpForm = document.getElementById('signUpForm');
  
  // Toggle between login and signup forms
  if (loginForm.style.display !== 'none') {
      loginForm.style.display = 'none';
      signUpForm.style.display = 'block';
      formContainer.querySelector('h2').textContent = 'Sign Up';
  } else {
      loginForm.style.display = 'block';
      signUpForm.style.display = 'none';
      formContainer.querySelector('h2').textContent = 'Login';
  }
}