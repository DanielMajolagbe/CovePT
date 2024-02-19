function $(selector) {
  // This was inspired by jQuery's $ function which is used to select DOM elements using CSS selectors
  return document.querySelector(selector);
}

const hamburgerMenu = $(".hamburger-menu");
const mobileNav = $("#mobile-nav");

function openNav() {
  if (hamburgerMenu.classList.contains("open")) {
    closeNav();
    return;
  }
  hamburgerMenu.classList.add("open");
  mobileNav.style.display = "flex";
  mobileNav.classList.add("slide-in");
  mobileNav.classList.remove("slide-out");
}

function closeNav() {
  hamburgerMenu.classList.remove("open");
  mobileNav.classList.add("slide-out");
  mobileNav.classList.remove("slide-in");
}

const footerDate = $("#date");
if (footerDate) {
  footerDate.textContent = new Date().getFullYear();
}

const contactForm = $("#contact-form");
const contactFormButton = $("#contact-form-btn");
let contactFormFields;
if (contactForm) {
  contactFormFields = contactForm.querySelectorAll("input, textarea");
}

if (contactForm) {
  contactFormFields.forEach(function(field) {
    field.addEventListener("input", function() {
      if (checkAllFieldsPopulated()) {
        contactFormButton.removeAttribute("disabled");
      } else {
        contactFormButton.setAttribute("disabled", "disabled");
      }
    });
  });
}

function checkAllFieldsPopulated() {
  return [...contactFormFields].every((f) => f.value !== "");
}

function handleContactForm(e) {
  e.preventDefault();
  if (!checkAllFieldsPopulated()) return;

  const subject = encodeURIComponent($("input[name='subject']").value);
  const message = encodeURIComponent($("textarea[name='message']").value);

  window.location.href = `mailto:username@domain?subject=${subject}&body=${message}`;
}


document.addEventListener("DOMContentLoaded", function () {
  const gavbar = document.querySelector('.gavbar');
  const gavbarItems = document.querySelectorAll('.gavbar-item');
  const gavbarSlider = document.querySelector('.gavbar-slider');

  function slideSlider(item) {
    const itemRect = item.getBoundingClientRect();
    gavbarSlider.style.width = `${itemRect.width}px`;
    gavbarSlider.style.transform = `translateX(${itemRect.left - gavbar.getBoundingClientRect().left}px)`;
  }

  gavbarItems.forEach(item => {
    item.addEventListener('mouseover', function () {
      slideSlider(item);
    });
    item.addEventListener('mouseout', function () {
      const activeItem = document.querySelector('.gavbar-item.active');
      if (activeItem) {
        slideSlider(activeItem);
      } else {
        gavbarSlider.style.width = '0';
      }
    });
    item.addEventListener('click', function () {
      gavbarItems.forEach(gavbarItem => gavbarItem.classList.remove('active'));
      item.classList.add('active');
      slideSlider(item);
    });
  });
});





document.addEventListener('mousemove', function(e) {
  var cursor = 
  document.querySelector('cursor');
  cursor.style.left = e.clientX - cursor.offsetWidth / 2 + 'px';

  cursor.style.top = e.clientY - cursor.offsetHeight / 2 + 'px'}
);
