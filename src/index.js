import './style.css';
import ghIcon from './img/gh-icon.png';
import home from './home/home';
import menu from './menu/menu';

const init = (() => {
    const content = document.querySelector('#content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    home();
})();

function createHeader() {
    const header = document.createElement('header');

    const restName = document.createElement('h1');
    restName.textContent = 'Green Pick';

    const headerNav = document.createElement('nav');

    const navUl = document.createElement('ul');

    const liHome = document.createElement('li');
    liHome.classList.add('tab');
    liHome.classList.add('selected');
    liHome.textContent = 'Home';
    liHome.addEventListener('click', setAsSelected);
    liHome.addEventListener('click', home);

    const liMenu = document.createElement('li');
    liMenu.classList.add('tab');
    liMenu.textContent = 'Menu';
    liMenu.addEventListener('click', setAsSelected);
    liMenu.addEventListener('click', menu);

    const liContact = document.createElement('li');
    liContact.classList.add('tab');
    liContact.textContent = 'Contact';
    liContact.addEventListener('click', setAsSelected);

    header.appendChild(restName);
    header.appendChild(headerNav);
    headerNav.appendChild(navUl);
    navUl.appendChild(liHome);
    navUl.appendChild(liMenu);
    navUl.appendChild(liContact);

    return header;
}

function setAsSelected() {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab) => {
        if (tab == this) {
            tab.classList.add('selected');
        } else {
            tab.classList.remove('selected');
        }
    });
}

function createMain() {
    const main = document.createElement('main');

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