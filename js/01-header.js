
// Show / hide mobile menu 
const mobileMenuIcon = document.querySelector(".header-mobile-menu-icon");
const mobileMenu = document.querySelector(".header__bottom__nav");
const hero = document.querySelector(".hero");

function showHideMobileMenu() {
    mobileMenu.classList.toggle("showMobileMenu");
    headerSearchForm.classList.remove("show-header__search__form");
}

mobileMenuIcon.addEventListener("click", showHideMobileMenu);


// Show / hide header search bar 
const headerSearchIcon = document.querySelector(".header__search__icon");
const headerSearchForm = document.querySelector(".header__search__form");

function showHeaderSearch() {
    headerSearchForm.classList.toggle("show-header__search__form");
    mobileMenu.classList.remove("showMobileMenu");
}

headerSearchIcon.addEventListener("click", showHeaderSearch);


// hide mobile menu and header search bar --> on scroll and on click hero section
function hideMobileMenu_hideHeaderSearchBar() {
    headerSearchForm.classList.remove("show-header__search__form");
    mobileMenu.classList.remove("showMobileMenu");
}

hero.addEventListener("click", hideMobileMenu_hideHeaderSearchBar);
window.addEventListener("scroll", hideMobileMenu_hideHeaderSearchBar);

