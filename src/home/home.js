import homeImg from './img/home-img.jpg';

function home() {
    const home = document.createElement('div');
    home.classList.add('home');

    const homeTitle = document.createElement('h2');
    homeTitle.textContent = 'Always fresh and delicious';

    const img = document.createElement('img');
    img.src = homeImg;
    img.alt = 'Home Image';


    home.appendChild(homeTitle);
    home.appendChild(img);
    home.appendChild(hours());

    return home;
}

function hours() {
    const hours = document.createElement('div');
    hours.classList.add('hours');

    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Hours';

    const monday = document.createElement('p');
    monday.textContent = 'Monday: 8am - 5pm';

    const tuesday = document.createElement('p');
    tuesday.textContent = 'Tuesday: 8am - 5pm';

    const wednesday = document.createElement('p');
    wednesday.textContent = 'Wednesday: 8am - 5pm';

    const thursday = document.createElement('p');
    thursday.textContent = 'Thursday: 8am - 5pm';

    const friday = document.createElement('p');
    friday.textContent = 'Friday: 8am - 5pm';

    const saturday = document.createElement('p');
    saturday.textContent = 'Saturday: 10am - 4pm';

    const sunday = document.createElement('p');
    sunday.textContent = 'Sunday: 10am - 4pm';

    hours.appendChild(hoursTitle);
    hours.appendChild(monday);
    hours.appendChild(tuesday);
    hours.appendChild(wednesday);
    hours.appendChild(thursday);
    hours.appendChild(friday);
    hours.appendChild(saturday);
    hours.appendChild(sunday);

    return hours;
}

export default function insertHome() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(home());
}