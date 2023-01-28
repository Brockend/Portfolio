//new WOW().init();

const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__menu');
const overlay = document.querySelector('.header__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('header__menu_active');
    overlay.classList.toggle('header__overlay_active');
    hamburger.classList.toggle('header__hamburger_active');
    document.querySelector('.body').classList.toggle('body_active');
});

const form = document.querySelector(".contact__form");
const responseContainer = document.getElementById("response");

// Add an event listener to the form
form.addEventListener("submit", function(e) {
  // Prevent the form from submitting
  e.preventDefault();

  // Create a new FormData object
  const formData = new FormData(form);

  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Open a connection to the server
  xhr.open("POST", "sendmail.php", true);

  // Send the form data
  xhr.send(formData);

  // Handle the response
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Update the response container
      responseContainer.innerHTML = xhr.responseText;
    }
  };
});