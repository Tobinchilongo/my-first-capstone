const grab = (e, isId = false, qAll = false) => {
  if (isId) {
    return document.getElementById(e);
  } if (qAll) {
    return document.querySelectorAll(`.${e}`);
  }
  return document.querySelector(`.${e}`);
};

// OBJECET OF SPEAKERS

const speakers = [
  {
    image: 'project-images/Alok_Sharma(1).jpg',
    Name: 'Alok Sharma',
    job: 'COP26 President',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolores, voluptate.',
  },
  {
    image: 'project-images/Alok_Sharma(1).jpg',
    Name: 'Alok Sharma',
    job: 'COP26 President',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolores, voluptate.',
  },
  {
    image: 'project-images/Alok_Sharma(1).jpg',
    Name: 'Alok Sharma',
    job: 'COP26 President',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolores, voluptate.',
  },
];

const speakersTwo = [
  {
    image: 'project-images/Alok_Sharma(1).jpg',
    Name: 'Alok Sharma',
    job: 'COP26 President',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolores, voluptate.',
  },
  {
    image: 'project-images/Alok_Sharma(1).jpg',
    Name: 'Alok Sharma',
    job: 'COP26 President',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolores, voluptate.',
  },
  {
    image: 'project-images/Alok_Sharma(1).jpg',
    Name: 'Alok Sharma',
    job: 'COP26 President',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolores, voluptate.',
  },
];
// FIRST SPEAKERS
speakers.forEach((el) => {
  const template = document.createElement('template');

  template.innerHTML = `<li>
  <div class='checked'><imh src="images/cheked.webp"</div>
  <div class='move'>
  <img src="${el.image}" alt="">
  <div class="line-t"></div>
  <div>
    <h2>${el.Name}</h2>
    <span>${el.job}</span>
    <div class="break"></div>
    <p>${el.text}</p>
     </div>
  </div>
<li>`;
  grab('speak', true).appendChild(template.content.firstChild);
});

// SECOND SPEAKERS
speakersTwo.forEach((el) => {
  const template = document.createElement('template');
  template.innerHTML = `<li>
  <div class='checked'><imh src="images/cheked.webp"</div>
  <div class='move'>
  <img src="${el.image}" alt="">
  <div class="line-t"></div>
  <div>
    <h2>${el.Name}</h2>
    <span>${el.job}</span>
    <div class="break"></div>
    <p>${el.text}</p>
     </div>
  </div>
<li>`;

  grab('more', false, false).addEventListener('click', () => {
    const openClose = grab('speaktwo', true);
    openClose.classList.toggle('d-none');
  });

  grab('speaktwo', true).appendChild(template.content.firstChild);
});
// MENU-BAR FUNCTION

grab('fa-bars').addEventListener('click', () => {
  grab('menu-list', false, false).style.display = 'flex';
});

grab('close').addEventListener('click', () => {
  grab('menu-list', false, false).style.display = 'none';
});
