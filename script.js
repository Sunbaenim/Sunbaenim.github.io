const isUrlRoot = () => {
    let temp = window.location.href.split('/');
    let lastEl = temp[temp.length - 1];
    if (lastEl === '') {
        return true;
    }
}

const changePage = (el) => {
    if (el.className.toLowerCase() === 'presentation') {
        window.location.href = '/';
    }
    if (el.className.toLowerCase() === 'projets') {
        window.location.href = '/#show_projets';
    }
}
const windowScrollTo = (el) => {
    window.scrollTo({
        top: el.offsetTop - 112,
        behavior: 'smooth'
    });
}

const scrollTo = (el) => {
    const hashSplit = window.location.href.split('#')[1];
    if (!isUrlRoot() && hashSplit !== 'show_projets') {
        changePage(el);
    }
    const sectionElement = document.querySelector('#' + el.className);
    windowScrollTo(sectionElement);
}

const navigateToProjects = () => {
    const projectSectionElement = document.querySelector('#projets');
    windowScrollTo(projectSectionElement);
}

window.onload = () => {
    let hashSplit = window.location.href.split('#');
    if (hashSplit[1] !== undefined) {
        const projectElement = document.querySelector('#' + hashSplit[1].split('_')[1]);
        windowScrollTo(projectElement);
    }
}

const navigateTo = (pageName) => {
    window.location.href = `${pageName}.html`;
}

const createNav = () => {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li_1 = document.createElement('li');
    const li_2 = document.createElement('li');
    const li_3 = document.createElement('li');
    const a_1 = document.createElement('a');
    const a_2 = document.createElement('a');
    const a_3 = document.createElement('a');

    a_1.innerText = 'Présentation';
    li_1.className = 'presentation'
    a_2.innerText = 'Projets';
    li_2.className = 'projets';
    a_3.innerText = 'C.V.';
    li_3.className = 'cv';

    li_1.onclick = () => scrollTo(li_1);
    li_2.onclick = () => scrollTo(li_2);
    li_3.onclick = () => navigateTo('cv');
    
    li_1.appendChild(a_1);
    li_2.appendChild(a_2);
    li_3.appendChild(a_3);
    ul.appendChild(li_1);
    ul.appendChild(li_2);
    ul.appendChild(li_3);

    nav.appendChild(ul);
    
    return nav;
}

const createHeader = () => {
    const header = document.createElement('header');

    const headerContent = document.createElement('div');
    headerContent.className = 'header-content';
    header.appendChild(headerContent);

    const logoTitleContainer = document.createElement('div');
    logoTitleContainer.className = 'logo-title-container';
    headerContent.appendChild(logoTitleContainer);

    const logoLink = document.createElement('a');
    logoTitleContainer.appendChild(logoLink);
    
    const logo = document.createElement('img');
    logo.src = './assets/logo.png';
    logo.className = 'logo';
    logoLink.appendChild(logo);
    logo.onclick = () => window.location.href = '/';
    

    const headerTitle = document.createElement('h1');
    headerTitle.innerText = 'Dylan Lootens';
    
    const link = document.createElement('a');
    link.appendChild(headerTitle);
    logoTitleContainer.appendChild(link);

    header.appendChild(createNav());
    document.body.appendChild(header);
    const nav = document.querySelector('header nav');

    const openNav = () => {
        nav.style.maxHeight = nav.scrollHeight + 'px';
        hamburger.style.display = 'none';
        close.style.display = 'block';
    }

    const closeNav = () => {
        nav.style.maxHeight = '0';
        close.style.display = 'none';
        hamburger.style.display = 'block';
    }

    const hamburger = document.createElement('img');
    hamburger.src = '../assets/icon-hamburger.svg';
    hamburger.className = 'hamburger';
    hamburger.onclick = openNav;
    headerContent.appendChild(hamburger);
    
    const close = document.createElement('img');
    close.src = '../assets/icon-close.svg';
    close.className = 'close';
    close.onclick = closeNav;
    headerContent.appendChild(close);
    
    const navLinks = document.querySelectorAll('header nav li a');
    if ((window.innerWidth / 16) < 90) {
        navLinks.forEach(link => {
            link.onclick = closeNav
        });
    }
}

createHeader();
