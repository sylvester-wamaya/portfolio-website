const mobileMenu = document.querySelector("#menu-icon")
mobileMenu.addEventListener("click", show)
const mobileNav = document.querySelector("#desk-nav")
const logo = document.querySelector("#logo")
function show(){
    mobileNav.style.display = "flex";
    mobileNav.style.top = "0"
    mobileNav.style.height = "100vh" 
    mobileMenu.style.display = "none"; 
    logo.style.display = "none"
}