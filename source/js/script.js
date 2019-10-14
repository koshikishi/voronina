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
    evt.preventDefault();
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

// Плавная прокрутка к якорю после клика по ссылке
var sections = {
  header: document.getElementById('header'),
  works: document.getElementById('works'),
  about: document.getElementById('about'),
  price: document.getElementById('price'),
  footer: document.getElementById('footer'),
};
var links = {
  header: document.querySelectorAll('a[href="#header"]'),
  works: document.querySelectorAll('a[href="#works"]'),
  about: document.querySelectorAll('a[href="#about"]'),
  price: document.querySelectorAll('a[href="#price"]'),
  footer: document.querySelectorAll('a[href="#footer"]'),
};

var addLinksClickHandler = function (link, section) {
  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    section.scrollIntoView({behavior: 'smooth'});
  });
};

for (var link in links) {
  for (var j = 0; j < links[link].length; j++) {
    addLinksClickHandler(links[link][j], sections[link]);
  }
}
