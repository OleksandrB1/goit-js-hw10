import menuTmp from './templates/menu-list.hbs';
import menu from './menu.json';

const Theme = {LIGHT: 'light-theme', DARK: 'dark-theme'};
const menuList = document.querySelector('.js-menu');
const themeSwitch = document.querySelector('#theme-switch-toggle');
const backgroundBody = document.querySelector('body');

themeSwitch.addEventListener('change', clickBtn);
if (localStorage.getItem('bgrBody') === Theme.DARK) {
  backgroundBody.classList.add(Theme.DARK);
  themeSwitch.setAttribute('checked', 'true');
}
function clickBtn() {
  if (backgroundBody.classList.contains(Theme.DARK)) {
    backgroundBody.classList.add(Theme.LIGHT);
    backgroundBody.classList.remove(Theme.DARK);
    localStorage.setItem('bgrBody', `${Theme.LIGHT}`);
  } 
else {
    backgroundBody.classList.add(Theme.DARK);
    backgroundBody.classList.remove(Theme.LIGHT);
    localStorage.setItem('bgrBody', `${Theme.DARK}`);
  }
}
menuList.insertAdjacentHTML('afterbegin', menuTmp(menu));