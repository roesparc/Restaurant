import './style.css';
import ghIcon from './img/gh-icon.png';
import home from './home/home';

const init = (() => {
    const content = document.querySelector('#content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
})();

function createHeader() {
    const header = document.createElement('header');

    const restName = document.createElement('h1');
    restName.textContent = 'Green Pick';

    const headerNav = document.createElement('nav');

    const navUl = document.createElement('ul');

    const liHome = document.createElement('li');
    liHome.classList.add('home-tab');
    liHome.textContent = 'Home';

    const liMenu = document.createElement('li');
    liMenu.classList.add('menu-tab');
    liMenu.textContent = 'Menu';

    const liContact = document.createElement('li');
    liContact.classList.add('contact-tab');
    liContact.textContent = 'Contact';

    header.appendChild(restName);
    header.appendChild(headerNav);
    headerNav.appendChild(navUl);
    navUl.appendChild(liHome);
    navUl.appendChild(liMenu);
    navUl.appendChild(liContact);

    return header;
}

function createMain() {
    const main = document.createElement('main');

    main.appendChild(home());

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');

    const by = document.createElement('div');
    by.textContent = 'By ';

    const author = document.createElement('a');
    author.href = 'https://github.com/roesparc/';
    author.textContent = 'roesparc';

    const ghWrap = document.createElement('a');
    ghWrap.href = 'https://github.com/roesparc/';

    const ghImg = document.createElement('img');
    ghImg.src = ghIcon;
    ghImg.alt = 'GitHub Icon';

    footer.appendChild(by);
    by.appendChild(author);
    footer.appendChild(ghWrap);
    ghWrap.appendChild(ghImg);

    return footer;
}