const mobileMenu = document.querySelector("#menu-icon")
const mobileNav = document.querySelector("#desk-nav")
const logo = document.querySelector("#logo")
const closeIcon = document.querySelector("#close img")
const menuList = document.querySelectorAll(".desk-nav")
mobileMenu.addEventListener("click", show)
closeIcon.addEventListener("click", close)
menuList.forEach(nav => nav.addEventListener("click",close))
function show(){
    mobileNav.style.display = "flex";   
    mobileMenu.style.display = "none"; 
    logo.style.display = "none"
}
function close(){
    logo.style.display = ""
    mobileMenu.style.display = "";     
    mobileNav.style.display= "none"
}