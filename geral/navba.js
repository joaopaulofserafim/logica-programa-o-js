
// home botão 1
const aHome = document.createElement('a');
aHome.setAttribute('href', '../geral/index.html');
aHome.innerHTML = 'Home';


const liHome = document.createElement('li');
liHome.append(aHome);

const aExercicio1 = document.createElement('a');
aExercicio1.setAttribute('href', '../ex1/ex1.html');
aExercicio1.innerHTML = 'Exerc. 1';

document.body.append(aExercicio1);

const liExercicio1 = document.createElement('li');
liExercicio1.appendChild(aExercicio1);

const ulNav = document.createElement('ul');
ulNav.appendChild(liHome, liExercicio1);

const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(ulNav);

const divMenuLogo = document.createElement('div');
divMenuLogo.classList.add('logo-menu');
divMenuLogo.appendChild(nav);

const header = document.createElement('header');
header.appendChild(divMenuLogo);

document.body.insertBefore(header, document.body.firstChild);


const linkNavbar = document.createElement('link')
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '../geral/navbar.css');

document.head.appendChild(linkNavbar);