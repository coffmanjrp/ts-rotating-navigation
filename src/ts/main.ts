const menuOpen = document.getElementById('open') as HTMLButtonElement;
const menuClose = document.getElementById('close') as HTMLButtonElement;
const container = document.querySelector('.container') as HTMLDivElement;

menuOpen.addEventListener('click', () => container.classList.add('show-nav'));
menuClose.addEventListener('click', () =>
  container.classList.remove('show-nav')
);
