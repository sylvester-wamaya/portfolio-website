/* Mobile menu on clicking the humburger */
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

/* Store projects' data in javascript objects */
const projects = [
  {
    id: 1,
    name: ['Multi-Post Stories', 'Keeping track of hundreds  of components website'],
    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.", `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'],
    image: ['media/Img Placeholder.png', 'media/pop.png'],
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails', 'CSS', 'Ruby'],
    liveLink: 'https://sylvester-wamaya.github.io/portfolio-website/',
    sourceLink: 'https://github.com/sylvester-wamaya/portfolio-website',
  },
  {
    id: 2,
    name: ['Multi-Post Stories', 'Keeping track of hundreds  of components website'],
    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'],
    image: ['media/Img Placeholder.png', 'media/pop.png'],
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails', 'Ruby'],
    liveLink: 'https://sylvester-wamaya.github.io/portfolio-website/',
    sourceLink: 'https://github.com/sylvester-wamaya/portfolio-website',
  },
  {
    id: 3,
    name: ['Multi-Post Stories', 'Keeping track of hundreds  of components website'],
    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'],
    image: ['media/Img Placeholder.png', 'media/pop.png'],
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails', 'Ruby'],
    liveLink: 'https://sylvester-wamaya.github.io/portfolio-website/',
    sourceLink: 'https://github.com/sylvester-wamaya/portfolio-website',
  },
  {
    id: 4,
    name: ['Multi-Post Stories', 'Keeping track of hundreds  of components website'],
    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'],
    image: ['media/Img Placeholder.png', 'media/pop.png'],
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails', 'Ruby'],
    liveLink: 'https://sylvester-wamaya.github.io/portfolio-website/',
    sourceLink: 'https://github.com/sylvester-wamaya/portfolio-website',
  },
  {
    id: 5,
    name: ['Multi-Post Stories', 'Keeping track of hundreds  of components website'],
    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'],
    image: ['media/Img Placeholder.png', 'media/pop.png'],
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails', 'Ruby'],
    liveLink: 'https://sylvester-wamaya.github.io/portfolio-website/',
    sourceLink: 'https://github.com/sylvester-wamaya/portfolio-website',
  },
  {
    id: 6,
    name: ['Multi-Post Stories', 'Keeping track of hundreds  of components website'],
    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'],
    image: ['media/Img Placeholder.png', 'media/pop.png'],
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails', 'Ruby'],
    liveLink: 'https://sylvester-wamaya.github.io/portfolio-website/',
    sourceLink: 'https://github.com/sylvester-wamaya/portfolio-website',
  },
  {
    id: 7,
    name: ['Multi-Post Stories', 'Keeping track of hundreds  of components website'],
    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'],
    image: ['media/Img Placeholder.png', 'media/pop.png'],
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails', 'Ruby'],
    liveLink: 'https://sylvester-wamaya.github.io/portfolio-website/',
    sourceLink: 'https://github.com/sylvester-wamaya/portfolio-website',
  },
];

/* Render projects dynamicaaly to the HTML document */

const works = document.querySelector('#project-items');
const articlElement = document.querySelector('article');

articlElement.innerHTML = `
<h2 id="article-h" class="project-title">${projects[0].name[0]}</h2>
<p  class="article-p text">${projects[0].description[0]}</p>
<ul class="btn no-style-deco" id="article-btn">
    <li> <button type="button" class="grey-button">${projects[0].technologies[3]}</button></li>
    <li> <button type="button" class="grey-button">${projects[0].technologies[0]}</button></li>
    <li><button type="button" class="grey-button">${projects[0].technologies[1]}</button></li>
    <li> <button type="button" class="grey-button">${projects[0].technologies[4]}</button></li>
</ul>
<button type="button" class="art-btn link-btn">See project</button>
`;

projects.forEach((work, value) => {
  if (value > 0) {
    const proj = document.createElement('li');
    proj.classList.add('project-item');
    proj.innerHTML = `
    <h2 class="title">${projects[value].name[0]}</h2>
    <p class="text">${projects[value].description[0]}</p>
    <ul class="btn no-style-deco">
        <li> <button type="button" class="grey-button">${projects[value].technologies[0]}</button></li>
        <li> <button type="button" class="grey-button">${projects[value].technologies[1]}</button></li>
        <li><button type="button" class="grey-button">${projects[value].technologies[3]}</button></li>
        
    </ul>
<button type="button" class="orange-button link-btn">See project</button> 
  `;
    works.appendChild(proj);
  }
});

/* Add modal tot the website upon clicking the projects' link */
const body = document.querySelector('body');

const linkButton = document.querySelectorAll('.link-btn');

linkButton.forEach((par, index) => {
  par.addEventListener('click', () => {
    const modal = document.createElement('div');
    const overlay = document.createElement('div');
    modal.className = 'modal';
    const width = window.innerWidth;
    if (width < 768) {
      modal.innerHTML = `<div class="modal-header">
    <h2 class="project-title">${projects[index].name[0]}</h2>
    <div id="modal-close"><img src="media/Icon.png" alt="close"></div>
    </div>
    <ul class="btn no-style-deco" id="btn-modal">
        <li> <button type="button" class="grey-button modal-btn">${projects[index].technologies[0]}</button></li>
        <li> <button type="button" class="grey-button modal-btn">${projects[index].technologies[1]}</button></li>
        <li><button type="button" class="grey-button modal-btn">${projects[index].technologies[2]}</button></li>        
    </ul>
    <div id="modal-main">
    <img id="image" src="${projects[index].image[1]}" alt="popup image">
    <div class="modal-p">
    <p class="text">${projects[index].description[2]}</p>
   <div id="mod-btn">

    <a href="#">
    <button type="button" class="art-btn link-btn">See live<img class="modal-icon" src="media/Icon-see live.png" alt="icon"></button>    
    </a>
    <a href="#">
    <button type="button" class="art-btn link-btn">See source<img class="modal-icon" src="media/Vector.png" alt="icon"></button>
  </a> 
    </div>
    </div>
    </div>
 `;
    } else {
      modal.innerHTML = `<div class="modal-header">
        <h2 class="project-title">${projects[index].name[1]}</h2>
        <div id="modal-close"><img src="media/Icon.png" alt="close"></div>
        </div>
        <ul class="btn no-style-deco" id="btn-modal">
            <li> <button type="button" class="grey-button modal-btn">${projects[index].technologies[0]}</button></li>
            <li> <button type="button" class="grey-button modal-btn">${projects[index].technologies[1]}</button></li>
            <li><button type="button" class="grey-button modal-btn">${projects[index].technologies[2]}</button></li>        
        </ul>
        <div id="modal-main">
        <img id="image" src="${projects[index].image[1]}" alt="popup image">
        <div class="modal-p">
        <p class="text">${projects[index].description[1]}</p>
       <div id="mod-btn">
       <a href="#">
         <button type="button" class="art-btn link-btn">See live<img class="modal-icon" src="media/Icon-see live.png" alt="icon"></button>
       <a>
       <a href="#">
         <button type="button" class="art-btn link-btn">See source<img class="modal-icon" src="media/Vector.png" alt="icon"></button>
       <a>  
        </div>
        </div>
        </div>
     `;
    }

    body.insertAdjacentElement('afterBegin', modal);
    overlay.className = 'blur';
    body.appendChild(overlay);
    const closeBtn = document.querySelector('#modal-close');
    closeBtn.style.cursor = 'pointer';
    closeBtn.addEventListener('click', () => {
      body.removeChild(modal);
      body.removeChild(overlay);
    });
  });
});

/* Validate form email field by restricting to small letters only */

const form = document.querySelector("#contact-form")
const mail = form.elements["email"]
const container = document.querySelector("#field")
const msg = document.createElement("small")

form.addEventListener("submit", (event)=>{
  const emailRegex = (/^[a-z]+$/)
  if (!emailRegex.test(mail.value)) {
    event.preventDefault();
    msg.innerHTML = "Please enter lowercase letters only in your email."
    mail.style.border = "1px solid red"
   container.appendChild(msg)
  }
})
mail.addEventListener('click', () => container.removeChild(msg));