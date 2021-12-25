const grab = (e) => document.querySelector(`.${e}`);

// ABOUT PAGE MENU

grab('fa-bars').addEventListener('click', () => {
  grab('menu-lis', false, false).style.display = 'flex';
});

grab('close').addEventListener('click', () => {
  grab('menu-lis', false, false).style.display = 'none';
});