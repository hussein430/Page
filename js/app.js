'use strict';

// Nav Section
const toggleMenu = document.querySelector('.toggle-menu');
const navLinks = document.querySelector('header nav ul');

// Toggle menu for small screens
toggleMenu?.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
});

// Language toggle functionality
document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.querySelector(".language-toggle");
    const langToggle2 = document.querySelector(".language-change");
    const languageOptions = document.querySelectorAll(".lang-option");
    const languageOptions2 = document.querySelectorAll(".lang");
    const icon = document.querySelector(".change-language");
    const icon2 = document.querySelector(".change-language-icon");

    // Toggle visibility for language options
    icon?.addEventListener("click", () => {
        langToggle.classList.toggle("show-options");
        icon.style.display = 'none';
    });

    icon2?.addEventListener("click", () => {
        langToggle2.classList.toggle("show-options");
        icon2.style.display = 'none';
    });

    // Update selected language and hide options
    languageOptions.forEach(option => {
        option.addEventListener("click", () => {
            languageOptions.forEach(lang => lang.classList.remove("active"));
            option.classList.add("active");
            icon.style.display = 'inline';
            langToggle.classList.remove("show-options");
        });
    });

    languageOptions2.forEach(option => {
        option.addEventListener("click", () => {
            languageOptions2.forEach(lang => lang.classList.remove("active"));
            option.classList.add("active");
            icon2.style.display = 'inline';
            langToggle2.classList.remove("show-options");
        });
    });

    // Hide options if clicked outside
    document.addEventListener("click", (event) => {
        if (!langToggle.contains(event.target) && event.target !== icon) {
            langToggle.classList.remove("show-options");
            icon.style.display = 'inline';
        }
        if (!langToggle2.contains(event.target) && event.target !== icon2) {
            langToggle2.classList.remove("show-options");
            icon2.style.display = 'inline';
        }
    });
});

// Toggle search category functionality
document.addEventListener("DOMContentLoaded", () => {
    const searchCategory = document.querySelector(".search-category");
    const selectedCategory = document.querySelector(".selected-category");
    const categoryList = document.querySelector(".category-list");

    searchCategory?.addEventListener("click", (event) => {
        searchCategory.classList.toggle("show");
        event.stopPropagation();
    });

    categoryList?.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            selectedCategory.textContent = event.target.textContent;
            searchCategory.classList.remove("show");
        }
    });

    // Close category list if clicked outside
    document.addEventListener("click", () => {
        searchCategory.classList.remove("show");
    });
});
