'use strict'

// Nav Section

// Select the toggle menu icon and the <ul> element
const toggleMenu = document.querySelector('.toggle-menu');
const navLinks = document.querySelector('header nav ul');

// Add an event listener to the toggle menu icon
toggleMenu.addEventListener('click', () => {
    // Toggle the 'show-menu' class on the <ul> element
    navLinks.classList.toggle('show-menu');
});

// Change the languages in the white box and nav
document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.querySelector(".language-toggle");
    const langToggle2 = document.querySelector(".language-change");
    const languageOptions = document.querySelectorAll(".lang-option");
    const languageOptions2 = document.querySelectorAll(".lang");
    const icon = document.querySelector(".change-language");
    const icon2 = document.querySelector(".change-language-icon");

    // Toggle language options visibility when clicking the icon
    icon.addEventListener("click", () => {
        langToggle.classList.toggle("show-options");
        icon.style.display= 'none'
    });

    icon2.addEventListener("click", () => {
        langToggle2.classList.toggle("show-options");
        icon2.style.display= 'none'
    });

    // Update the selected language and hide options when an option is clicked
    languageOptions.forEach(option => {
        option.addEventListener("click", () => {
            // Remove active class from all options and add it to the selected one
            languageOptions.forEach(lang => lang.classList.remove("active"));
            option.classList.add("active");
            icon.style.display= 'inline'

            // Hide options after selection
            langToggle.classList.remove("show-options");
        });
    });

    languageOptions2.forEach(option => {
        option.addEventListener("click", () => {
            languageOptions2.forEach(lang => lang.classList.remove("active"));
            option.classList.add("active");
            icon2.style.display= 'inline'

            langToggle2.classList.remove("show-options");
        });
    });


    // Hide language options if clicked outside
    document.addEventListener("click", (event) => {
        if (!langToggle.contains(event.target)) {
            langToggle.classList.remove("show-options");
            icon.style.display= 'inline'
        }
    });
    document.addEventListener("click", (event) => {
        if (!langToggle2.contains(event.target)) {
            langToggle2.classList.remove("show-options");
            icon2.style.display= 'inline'
        }
    });
});
