// Add JavaScript functionality

const showMoreButton = document.getElementById('show-more-button');
const showLessButton = document.getElementById('show-less-button');
const moreInfo = document.getElementById('more-info');

showMoreButton.addEventListener('click', function () {
    showMoreButton.classList.add('hidden');
    moreInfo.classList.remove('hidden');
    showLessButton.classList.remove('hidden');
});

showLessButton.addEventListener('click', function () {
    showLessButton.classList.add('hidden');
    moreInfo.classList.add('hidden');
    showMoreButton.classList.remove('hidden');
});

function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
      });
  }
}
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default behavior of link clicks
        const targetId = link.getAttribute('href');
        smoothScroll(targetId);
    });
});










//functionality


document.addEventListener('DOMContentLoaded'), function () {
  const bookingForm = document.querySelector('#booking-form form')};

  bookingForm.addEventListener('submit'), function (event) {
      event.preventDefault()};
function showAlert() {
  alert("Form submitted! Your snow plow truck is booked.");
  console.log("Hello");
};
function bookTruck() {
  window.location.href = 'booking.html';
}

document.getElementById('bookNowButton').addEventListener('click', bookTruck);




// JavaScript code for making social media links interactive

const socialMediaLinks = document.querySelectorAll('.home-sci a');

socialMediaLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default behavior (navigating to the link)
    const url = link.getAttribute('href');
    window.open(url, 'messug@github.com'); // Open the link in a new tab
  });
});

