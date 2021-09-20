const btnOpen = document.querySelector('.nav__btn-open');
const btnClose = document.querySelector('.nav__btn-close');
const list = document.querySelector('.nav__list');

const onBtnCloseClick = () => {
  list.classList.remove('nav__list--active');
  btnClose.classList.add('hidden');
  btnOpen.classList.remove('hidden');
  btnClose.removeEventListener('click', onBtnCloseClick);
  btnOpen.addEventListener('click', onBtnOpenClick);
}

const onBtnOpenClick = () => {
  list.classList.add('nav__list--active');
  btnOpen.classList.add('hidden');
  btnClose.classList.remove('hidden');
  btnOpen.removeEventListener('click', onBtnOpenClick);
  btnClose.addEventListener('click', onBtnCloseClick);
};

btnOpen.addEventListener('click', onBtnOpenClick);
