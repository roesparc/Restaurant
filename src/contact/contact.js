import avocadoImg from './img/avocado.jpg';
import peachImg from './img/peach.jpg';
import mapImg from './img/map.png';

function contact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const title = document.createElement('h2');
    title.textContent = 'Contact Us';

    const address = document.createElement('h3');
    address.textContent = 'Banana Boulevard 450, Las Papayas, Apple Country';

    const img = document.createElement('img');
    img.src = mapImg;
    img.alt = 'Map';

    contact.appendChild(title);
    contact.appendChild(avocado());
    contact.appendChild(peach());
    contact.appendChild(address);
    contact.appendChild(img);

    return contact;
}

function avocado() {
    const wrap = document.createElement('div');

    const info = document.createElement('div');

    const name = document.createElement('h3');
    name.textContent = 'Avocado';

    const position = document.createElement('p');
    position.textContent = '"Manager"';

    const phone = document.createElement('p');
    phone.textContent = '123-123-1234';

    const mail = document.createElement('p');
    mail.textContent = 'avocado@realmail.com';

    const img = document.createElement('img');
    img.src = avocadoImg;
    img.alt = 'Avocado Portrait';

    wrap.appendChild(info);
    info.appendChild(name);
    info.appendChild(position);
    info.appendChild(phone);
    info.appendChild(mail);
    wrap.appendChild(img);

    return wrap;
}

function peach() {
    const wrap = document.createElement('div');

    const info = document.createElement('div');

    const name = document.createElement('h3');
    name.textContent = 'Peach';

    const position = document.createElement('p');
    position.textContent = '"Chef"';

    const phone = document.createElement('p');
    phone.textContent = '456-456-4567';

    const mail = document.createElement('p');
    mail.textContent = 'peach@realmail.com';

    const img = document.createElement('img');
    img.src = peachImg;
    img.alt = 'Peach Portrait';

    wrap.appendChild(info);
    info.appendChild(name);
    info.appendChild(position);
    info.appendChild(phone);
    info.appendChild(mail);
    wrap.appendChild(img);

    return wrap;
}

export default function insertContact() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(contact());
}