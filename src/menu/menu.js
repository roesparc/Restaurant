import pancakeImg from './img/banana-pancakes.jpg';
import smoothieImg from './img/fruit-smoothie.jpg';
import saladImg from './img/veg-salad.jpg';
import chiliImg from './img/vegan-chili.jpg';

function menu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(pancake());
    menu.appendChild(smoothie());
    menu.appendChild(salad());
    menu.appendChild(chili());

    return menu;
}

function pancake() {
    const wrap = document.createElement('div');

    const info = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = 'Banana Pancakes';

    const descr = document.createElement('p');
    descr.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const img = document.createElement('img');
    img.src = pancakeImg;
    img.alt = 'Banana Pancakes';

    wrap.appendChild(info);
    info.appendChild(title);
    info.appendChild(descr);
    wrap.appendChild(img);

    return wrap;
}

function smoothie() {
    const wrap = document.createElement('div');

    const info = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = 'Granola and Fruit Smoothie';

    const descr = document.createElement('p');
    descr.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const img = document.createElement('img');
    img.src = smoothieImg;
    img.alt = 'Fruit Smoothie';

    wrap.appendChild(img);
    wrap.appendChild(info);
    info.appendChild(title);
    info.appendChild(descr);

    return wrap;
}

function salad() {
    const wrap = document.createElement('div');

    const info = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = 'Veggie Salad';

    const descr = document.createElement('p');
    descr.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const img = document.createElement('img');
    img.src = saladImg;
    img.alt = 'Veggie Salad';

    wrap.appendChild(info);
    info.appendChild(title);
    info.appendChild(descr);
    wrap.appendChild(img);

    return wrap;
}

function chili() {
    const wrap = document.createElement('div');

    const info = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = 'Vegan Chili';

    const descr = document.createElement('p');
    descr.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const img = document.createElement('img');
    img.src = chiliImg;
    img.alt = 'Vegan Chili';

    wrap.appendChild(img);
    wrap.appendChild(info);
    info.appendChild(title);
    info.appendChild(descr);

    return wrap;
}

export default function insertMenu() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(menu());
}