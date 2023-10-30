/* Mobile menu on clicking the humburger */
const width = window.innerWidth;
const mobileMenu = document.querySelector('#menu-icon');
const mobileNav = document.querySelector('#mobile-nav');
const logo = document.querySelector('#logo');
const closeIcon = document.querySelector('#close img');
const menuList = document.querySelectorAll('.mobile-nav');

function show() {
  mobileNav.style.display = 'flex';
  mobileMenu.style.display = 'none';
  logo.style.display = 'none';
}

function close() {
  if (width < 768) {
    logo.style.display = '';
    mobileMenu.style.display = '';
    mobileNav.style.display = 'none';
  }
}

mobileMenu.addEventListener('click', show);
closeIcon.addEventListener('click', close);
menuList.forEach((nav) => nav.addEventListener('click', close));

/* Store projects' data in javascript objects */
const projects = [
  {
    id: 1,
    name: ['Dr.Globe App', 'Dr.Globe Appointments Application'],
    description: ["A doctors' appointments booking platform that allows users to easily book a appointment with a doctor, either for a diagnosis or for a checkup by including a specified loaction and date.", `Dr.Globe is a medical booking website that allows users to easily book a medical appointment with a doctor either for a diagnosis or for a checkup Dr.Globe provides a seamless and reliable appointment booking experience. The app is developed with React on frontend and rails on backend`, 'Dr.Globe is a medical booking website that allows users to easily book a medical appointment with a doctor either for a diagnosis or for a checkup Dr.Globe provides a seamless and reliable appointment booking experience. The app is developed with React on frontend and rails on backend'],
    image: ['media/doctor.png', 'media/doctor.png'],
    technologies: ['ReactJs', 'Ruby on Rails', 'Bootstrap'],
    liveLink: 'https://unrivaled-toffee-4e98df.netlify.app/',
    sourceLink: 'https://github.com/sylvester-wamaya/doctor-appointment-backend',
  },
  {
    id: 2,
    name: ['Crypto Live', 'Crytptocurrency Live Application'],
    description: ["A mobile design application that users can view a list of coins, their prices and search to view a coin's details.", `A mobile web application that tracks live cryptocurrency coins' statistics. A user can view coins, search and click to view the details of a coin. The application is developed by use of react js, redux, and a cryptocurrency API`, `A mobile web application that tracks live cryptocurrency coins' statistics. A user can view coins, search and click to view the details of a coin. The application is developed by use of react js, redux, and a cryptocurrency API`],
    image: ['media/crypto.png', 'media/crypto.png'],
    technologies: ['ReactJS', 'Redux','CSS'],
    liveLink: 'https://steady-kheer-81bdb4.netlify.app/',
    sourceLink: 'https://github.com/sylvester-wamaya/crypto-live',
  },
  {
    id: 3,
    name: ['A To do App', 'To do List Application'],
    description: ["A to do list application where a user can add tasks edit, mark completed and delete either one by one or all selected items.", `A to do list application where a user can keep track of the to do activities by adding them, editing, marking completed and deleting either one by one or all selected items. Built with Javascript.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'],
    image: ['media/todo.PNG', 'media/pop.png'],
    technologies: ['HTML', 'CSS', 'Ruby on Rails', 'Javascript'],
    liveLink: 'https://sylvester-wamaya.github.io/to-do-list/',
    sourceLink: 'https://github.com/sylvester-wamaya/to-do-list',
  },
  {
    id: 4,
    name: ['Movie Watchlist', 'Movie Application'],
    description: ["The App is a movie Watchlist. A user can add movies to the watchlist, mark watched or unwatched and delete movies.", `The App is a movie Watchlist. A user can add movies to watchlist by searching by movie name. Mark watched or unwatched and delete movies. The project fetches movie inforamtion from API: https://online-movie-database.p.rapidapi.com/ The project is coded by React.js, Js, CSS and HTML.`, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'],
    image: ['media/movie.PNG', 'media/pop.png'],
    technologies: ['HTML', 'CSS', 'Ruby on Rails', 'Javascript'],
    liveLink: 'https://sylvester-wamaya.github.io/phase-2-project/',
    sourceLink: 'https://github.com/sylvester-wamaya/phase-2-project',
  },
  {
    id: 5,
    name: ['Multi-Post Stories', 'Keeping track of hundreds  of components website'],
    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'],
    image: ['media/Img 1.png', 'media/pop.png'],
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails', 'Ruby'],
    liveLink: 'https://sylvester-wamaya.github.io/portfolio-website/',
    sourceLink: 'https://github.com/sylvester-wamaya/portfolio-website',
  },
  {
    id: 6,
    name: ['Data Dashboard Healthcare', 'Keeping track of hundreds  of components website'],
    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'],
    image: ['media/Img 1.png', 'media/pop.png'],
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails', 'Ruby'],
    liveLink: 'https://sylvester-wamaya.github.io/portfolio-website/',
    sourceLink: 'https://github.com/sylvester-wamaya/portfolio-website',
  },
  {
    id: 7,
    name: ['Website Portfolio', 'Keeping track of hundreds  of components website'],
    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.", `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'],
    image: ['media/Img 1.png', 'media/pop.png'],
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
    <li> <button type="button" class="grey-button">${projects[0].technologies[0]}</button></li>
    <li> <button type="button" class="grey-button">${projects[0].technologies[1]}</button></li>
    <li><button type="button" class="grey-button">${projects[0].technologies[2]}</button></li>
    
</ul>
<div>
<button type="button" class="art-btn link-btn">See project</button>
</div>
`;

projects.forEach((work, value) => {
  if (value > 0) {
    const proj = document.createElement('li');
    proj.classList.add('project-item');
    proj.innerHTML = `
    <img class="proj-img"src="${projects[value].image[0]}" alt="projects">
    <h2 class="title">${projects[value].name[0]}</h2>
    <p class="text">${projects[value].description[0]}</p>
    <ul class="btn no-style-deco">
        <li> <button type="button" class="grey-button">${projects[value].technologies[0]}</button></li>
        <li> <button type="button" class="grey-button">${projects[value].technologies[1]}</button></li>
        <li><button type="button" class="grey-button">${projects[value].technologies[2]}</button></li>
        
    </ul>
<button type="button" class="orange-button link-btn">See project</button> 
  `;
    works.appendChild(proj);
  }
});

/* Add modal to the website upon clicking the projects' link */
const body = document.querySelector('body');

const linkButton = document.querySelectorAll('.link-btn');

linkButton.forEach((par, index) => {
  par.addEventListener('click', () => {
    const modal = document.createElement('div');
    const overlay = document.createElement('div');
    modal.className = 'modal';
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

    <a href=${projects[index].liveLink}>
    <button type="button" class="art-btn link-btn">See live<img class="modal-icon" src="media/Icon-see live.png" alt="icon"></button>    
    </a>
    <a href="${projects[index].sourceLink}">
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
       <a href=${projects[index].liveLink}>
         <button type="button" class="art-btn link-btn">See live<img class="modal-icon" src="media/Icon-see live.png" alt="icon"></button>
       <a>
       <a href=${projects[index].sourceLink}>
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

const form = document.querySelector('#contact-form');
const mail = form.elements.email;
const container = document.querySelector('#field');
const msg = document.createElement('small');

form.addEventListener('submit', (event) => {
  const emailRegex = (/[A-Z]/);
  if (emailRegex.test(mail.value)) {
    event.preventDefault();
    msg.innerHTML = 'Please enter lowercase letters only in your email.';
    mail.style.border = '1px solid red';
    container.appendChild(msg);
  }
});
mail.addEventListener('click', () => container.removeChild(msg));

const fName = form.elements.fname;
const lName = form.elements.lname;
const mInput = form.elements.messege;

const data = JSON.parse(localStorage.getItem('formData'));

if (data) {
  fName.value = data.fname;
  lName.value = data.lname;
  mail.value = data.email;
  mInput.value = data.messege;
}
form.addEventListener('input', () => {
  const formData = {
    fname: fName.value,
    lname: lName.value,
    email: mail.value,
    messege: mInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});
