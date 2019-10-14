// Оживление мобильного меню
var menu = document.getElementById('menu-mobile');
var menuOpenBtn = document.querySelector('.header__icon-menu a');
var menuCloseBtn = menu.querySelector('.menu-mobile__icon-close');
var menuLinks = menu.querySelectorAll('.menu-mobile__link');

// Открытие мобильного меню
menuOpenBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  menuOpen();
});

// Закрытие мобильного меню кнопкой "Закрыть"
menuCloseBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  menuClose();
});

// Закрытие мобильного меню после клика по ссылке
var addMenuLinksClickHandler = function (menuLink) {
  menuLink.addEventListener('click', function (evt) {
    menuClose();
  });
};

for (var i = 0; i < menuLinks.length; i++) {
  addMenuLinksClickHandler(menuLinks[i]);
}

// Закрытие мобильного меню клавишей ESC
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    // Проверка, открыто ли мобильное меню
    if (menu.classList.contains('menu-mobile--shown')) {
      menuClose();
    }
  }
});

// Открытие мобильного меню
function menuOpen() {
  menu.classList.add('menu-mobile--shown');
}

// Закрытие мобильного меню
function menuClose() {
  // Сброс CSS-анимации
  menu.classList.remove('menu-mobile--shown');
  void menu.offsetWidth;
  menu.classList.add('menu-mobile--shown');

  menu.classList.add('menu-mobile--hide');
  window.setTimeout(function () {
    menu.classList.remove('menu-mobile--shown');
    menu.classList.remove('menu-mobile--hide');
  }, 1000);
}
