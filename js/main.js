const navBtn = document.querySelector('.nav-icon-btn') // определяем кнопку и ищем по селектору навбатон
const navIcon = document.querySelector('.nav-icon') // находим иконку навайкон
const nav = document.querySelector('.header__top-row') // записываем найденную навигацию в константу

navBtn.onclick = function (){
navIcon.classList.toggle('nav-icon--active'); // добавляем класс в зависимости есть он или нет, 
nav.classList.toggle('header__top-row--mobile'); // добавляем модификатор добавления меню
document.body.style.classList.toggle('.no-scroll'); // обращаемся к боди и отключаем класс скролла
}//добавляем активный класс к иконке, по клику описываем функцию, при нажатии на кнопку меняем активность иконки


