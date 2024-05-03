
// <a> home 
const aHome = document.createElement('a');
aHome.setAttribute('href', '../geral/index.html');
aHome.innerHTML = 'Home';

// <li> do home
const liHome = document.createElement('li');
liHome.append(aHome);

// <a> ex1
const aExercicio1 = document.createElement('a');
aExercicio1.setAttribute('href', '../ex1/ex1.html');
aExercicio1.innerHTML = 'Exerc. 1';

// document.body.append(aExercicio1);

// <li> do exercício 1
const liExercicio1 = document.createElement('li');
liExercicio1.appendChild(aExercicio1);


// <a> do exercício 6
const aExercicio6 = document.createElement('a');
aExercicio6.setAttribute('href', '../ex6/ex6.html');
aExercicio6.innerHTML = 'Exerc. 6';

// <li> do exercício 6
const liExercicio6 = document.createElement('li');
liExercicio6.appendChild(aExercicio6);

// <ul> do menu
const ulNav = document.createElement('ul');
ulNav.appendChild(liHome, liExercicio1, liExercicio6);

// <nav> do menu
const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(ulNav);

const spanLogo = document.createElement('span');
spanLogo.innerHTML = 'Menu & breadcrumbs';



// <div class="logo">
const divLogo = document.createElement('div');
divLogo.classList.add('logo');
divLogo.appendChild(spanLogo);




const divMenuLogo = document.createElement('div');
divMenuLogo.classList.add('logo-menu');
divMenuLogo.appendChild(nav,divLogo);

const header = document.createElement('header');
header.appendChild(divMenuLogo);


document.body.insertBefore(header, document.body.firstChild);


const linkNavbar = document.createElement('link')
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '../geral/navbar.css');

document.head.appendChild(linkNavbar);