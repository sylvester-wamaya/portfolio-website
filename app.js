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
    name: ['Dr.Globe', 'Dr.Globe Appointments Application'],
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
    name: ['Budget', 'Budget Application'],
    description: ["A mobile web application that users use to manage and track budgets. One can view category lists and transactions.", `A mobile web application that users use to manage and track budgets. A user can add and view category lists of the budget and transactions. The application has authentication functionalities by use of rails devise`, `A mobile web application that users use to manage and track budgets. A user can add and view category lists of the budget and transactions. The application has authentication functionalities by use of rails devise`],
    image: ['media/budget.jpeg', 'media/budget.jpeg'],
    technologies: ['CSS', 'JavaScript', 'Rails'],
    liveLink: 'https://budget-iuue.onrender.com/',
    sourceLink: 'https://github.com/sylvester-wamaya/budget-app',
  },
  {
    id: 4,
    name: ['Recipe', 'Food Recipe Application'],
    description: ["An application that allows users to add food, create recipes, generate shopping lists and modify based on authentication.", `The recipe application allows users to create their own account and manage their recipes. The users can view public recipes and only modify the entries based on the authentication and authorization.`,  `The recipe application allows users to create their own account and manage their recipes. The users can view public recipes and only modify the entries based on the authentication and authorization.`],
    image: ['media/recipe0.png', 'media/recipe.png'],
    technologies: ['CSS', 'JavaScript', 'Rails'],
    liveLink: 'https://recipe-render-3ygr.onrender.com/',
    sourceLink: 'https://github.com/sylvester-wamaya/Capstone-Project-Recipe',
  },
  {
    id: 5,
    name: ['Blog', 'Blog Application'],
    description: ["Blog App is an application that allows users to create posts, read posts, like posts or comments on posts.", `Blog web applications allows users to create posts, read posts, like posts or comment on posts. The application has authentication and users interract in the application guided by the authorization configured.`,  `Blog web applications allows users to create posts, read posts, like posts or comment on posts. The application has authentication and users interract in the application guided by the authorization configured.`],
    image: ['media/blog.png', 'media/blog1.png'],
    technologies: ['CSS', 'JavaScript', 'Rails'],
    liveLink: 'https://rails-c2v3.onrender.com/',
    sourceLink: 'https://github.com/sylvester-wamaya/blog-app',
  },
  {
    id: 6,
    name: ['Space Traveler Hub', 'Space Traveler Hub Application'],
    description: ["The applications connects with Space-X api and allows users to reserve for space exploration ships and join space missions.", `The Space Traveler Hub web application connects to Space-X api and allows users to reserve their slots in the space ships listed and join a space mission. The client can access his/her profile and check the reservations and missions joined.`, `The Space Traveler Hub web application connects to Space-X api and allows users to reserve their slots in the space ships listed and join a space mission. The client can access his/her profile and check the reservations and missions joined.`],
    image: ['media/space.png', 'media/space1.png'],
    technologies:  ['ReactJS', 'Redux','Bootstrap'],
    liveLink: 'https://space-travelers-hub-pair.vercel.app/',
    sourceLink: 'https://github.com/sylvester-wamaya/space-travelers-hub-pair',
  },
  {
    id: 7,
    name: ['Website Portfolio', 'A Portfolio website'],
    description: ["A portfolio website of a software developer showcasing his profile, projects and contact details.", `A portfolio website of a software developer that showcase his experince, projects and promotes his works. The website allows sending a message through a form and email to the developer.`, `A portfolio website of a software developer that showcase his experince, projects and promotes his works. The website allows sending a message through a form and email to the developer.`],
    image: ['media/web.png', 'media/web1.png'],
    technologies:  ['ReactJS', 'Redux','CSS'],
    liveLink: 'https://wamaya.vercel.app/',
    sourceLink: 'https://github.com/sylvester-wamaya/wamaya',
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

    <a href=${projects[index].liveLink} target="_blank">
    <button type="button" class="art-btn link-btn">See live<img class="modal-icon" src="media/Icon-see live.png" alt="icon"></button>    
    </a>
    <a href="${projects[index].sourceLink}" target="_blank">
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
       <a href=${projects[index].liveLink} target="_blank">
         <button type="button" class="art-btn link-btn">See live<img class="modal-icon" src="media/Icon-see live.png" alt="icon"></button>
       <a>
       <a href=${projects[index].sourceLink} target="_blank">
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
