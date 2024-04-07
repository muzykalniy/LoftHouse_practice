
/* Nav icon*/

const navBtn = document.querySelector('.nav-icon-btn') // определяем кнопку и ищем по селектору навбатон
const navIcon = document.querySelector('.nav-icon') // находим иконку навайкон
const nav = document.querySelector('.header__top-row') // записываем найденную навигацию в константу

navBtn.onclick = function (){
navIcon.classList.toggle('nav-icon--active'); // добавляем класс в зависимости есть он или нет, 
nav.classList.toggle('header__top-row--mobile'); // добавляем модификатор добавления меню
document.body.style.classList.toggle('.no-scroll'); // обращаемся к боди и отключаем класс скролла
}//добавляем активный класс к иконке, по клику описываем функцию, при нажатии на кнопку меняем активность иконки

/* Phone mask */

mask('[data-tel-input]') // задаем функцию в которой передаем селектор по которому будут выбраны инпут элементы для которых плагин активируется. Начинаем поиск по атрибуту всегда в квадратных скобках


// Удаляем '+' если больше ничего не введено, чтобы показать placeholder

const phoneInputs = document.querySelectorAll('[data-tel-input]'); // находим все phoneInputs на которые вешали этот плагин через querySelectorAll в коллекцию phoneInputs

phoneInputs.forEach((input)=>{ //для каждого делаем действия
	input.addEventListener('input', ()=>{ // как только в этот инпут начинаю вводить что-то (срабатывает событие инпут)
		if (input.value == '+') input.value = ''; // если значение в инпуте только +, то мы сбрасываем значение инпута на пустую строчку input.value = ''
	})
	input.addEventListener('blur', ()=>{
		if (input.value == '+') input.value = ''; // если мы вышли и расфокусились
	})
});