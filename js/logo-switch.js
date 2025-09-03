/**
 * Скрипт для замены логотипа в зависимости от ширины экрана.
 * 
 * Если ширина окна меньше 992px — устанавливается логотип "logo-light.png".
 * При ширине 992px и выше — устанавливается логотип "logo-dark.png".
 * 
 * Скрипт запускается при загрузке страницы и при изменении размера окна.
 */

function updateLogo() {
  const logo = document.querySelector('a.navbar-brand img');
  if (!logo) return;

  if (window.innerWidth < 992) {
    logo.src = 'img/logo-dark.png';
  } else {
    logo.src = 'img/logo-light.png';
  }
}

window.addEventListener('DOMContentLoaded', updateLogo);
window.addEventListener('resize', updateLogo);
