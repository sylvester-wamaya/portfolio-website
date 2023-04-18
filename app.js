const mobileMenu = document.querySelector('#menu-icon');
const mobileNav = document.querySelector('#desk-nav');
const logo = document.querySelector('#logo');
const closeIcon = document.querySelector('#close img');
const menuList = document.querySelectorAll('.desk-nav');


function show() {
  mobileNav.style.display = 'flex';
  mobileMenu.style.display = 'none';
  logo.style.display = 'none';
}

function close() {
  logo.style.display = '';
  mobileMenu.style.display = '';
  mobileNav.style.display = 'none';
}

mobileMenu.addEventListener('click', show);
closeIcon.addEventListener('click', close);
menuList.forEach((nav) => nav.addEventListener('click', close));



const projects = [
 {
    id: 1,
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: "media/Img Placeholder.png",
    technologies: ["CSS", "HTML", "Bootstrap", "Ruby"] ,
    liveLink: "https://sylvester-wamaya.github.io/portfolio-website/",
    sourceLink: "https://github.com/sylvester-wamaya/portfolio-website"
 },
 {
    id: 2,
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: "media/Img Placeholder.png",
    technologies: ["HTML", "Bootstrap", "Ruby"] ,
    liveLink: "https://sylvester-wamaya.github.io/portfolio-website/",
    sourceLink: "https://github.com/sylvester-wamaya/portfolio-website"
 },
 {
    id: 3,
    name: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: "media/Img Placeholder.png",
    technologies: ["HTML", "Bootstrap", "Ruby"] ,
    liveLink: "https://sylvester-wamaya.github.io/portfolio-website/",
    sourceLink: "https://github.com/sylvester-wamaya/portfolio-website"
 },
 {
    id: 4,
    name: "Website Portfolio",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: "media/Img Placeholder.png",
    technologies: ["HTML", "Bootstrap", "Ruby"] ,
    liveLink: "https://sylvester-wamaya.github.io/portfolio-website/",
    sourceLink: "https://github.com/sylvester-wamaya/portfolio-website"
 },
 {
    id: 5,
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: "media/Img Placeholder.png",
    technologies: ["HTML", "Bootstrap", "Ruby"] ,
    liveLink: "https://sylvester-wamaya.github.io/portfolio-website/",
    sourceLink: "https://github.com/sylvester-wamaya/portfolio-website"
 },
 {
    id: 6,
    name: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: "media/Img Placeholder.png",
    technologies: ["HTML", "Bootstrap", "Ruby"] ,
    liveLink: "https://sylvester-wamaya.github.io/portfolio-website/",
    sourceLink: "https://github.com/sylvester-wamaya/portfolio-website"
 },
 {
    id: 7,
    name: "Website Portfolio",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: "media/Img Placeholder.png",
    technologies: ["HTML", "Bootstrap", "Ruby"] ,
    liveLink: "https://sylvester-wamaya.github.io/portfolio-website/",
    sourceLink: "https://github.com/sylvester-wamaya/portfolio-website"
 }
]
const works = document.querySelector("#project-items")
const articlElement = document.querySelector("article")

articlElement.innerHTML = 
`
<h2 id="article-h" class="project-title">${projects[0].name}</h2>
<p  class="article-p text">${projects[0].description}</p>
<ul class="btn no-style-deco" id="article-btn">
    <li> <button type="button" class="grey-button">${projects[0].technologies[0]}</button></li>
    <li> <button type="button" class="grey-button">${projects[0].technologies[1]}</button></li>
    <li><button type="button" class="grey-button">${projects[0].technologies[2]}</button></li>
    <li> <button type="button" class="grey-button">${projects[0].technologies[3]}</button></li>
</ul>
<button type="button" class="art-btn">See project</button>
`;

projects.forEach((work, value)=>{
    if (value>0) {
        
  const proj = document.createElement("li")
  proj.classList.add("project-item")
  proj.innerHTML =
    `
    <h2 class="title">${projects[value].name}</h2>
    <p class="text">${projects[value].description}</p>
    <ul class="btn no-style-deco">
        <li> <button type="button" class="grey-button">${projects[value].technologies[0]}</button></li>
        <li> <button type="button" class="grey-button">${projects[value].technologies[1]}</button></li>
        <li><button type="button" class="grey-button">${projects[value].technologies[2]}</button></li>
    </ul>
<button type="button" class="orange-button">See project</button> 
  `;  
  works.appendChild(proj)
}})
