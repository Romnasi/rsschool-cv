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

console.log(`
Самооценка: 
 
1. Вёрстка валидная "Document checking completed. No errors or warnings to show." +10 
2. Вёрстка семантическая (header,footer, main, nav, section, article, address, time, h1-h5 ) +20
3. Для оформления СV используются css-стили +10 
4. Контент блоке по центру +10 
5. Вёрстка адаптивная +10
6. Адаптивное бургер меню, плавная прокрутка по якорям +10
7. На странице СV есть аватарка +10
8. Kонтакты для связи и перечень навыков оформлены в виде списка ul > li +10
9. CV содержит контакты, о себе, навыки, образовании и уровне английского +10
10. CV содержит пример кода +10
11. CV содержит изображения-ссылки на выполненные проекты +10
12. CV выполнено на английском языке +10
13. Выполнены требования к Pull Request,  выполнена самооценка +10
14. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV +10

Итого: 150
`);