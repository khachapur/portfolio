/* простой слайдер*/

let offset = 0;
let slider_line = document.querySelector('.slider_line');

let slide_right = document.querySelector('.slide_rigth');
let slide_left = document.querySelector('.slide_left');

slide_right.addEventListener('click', function(){
	offset = offset +375;
	if (offset > 750){
		offset = 0;
	}
	slider_line.style.left = -offset + "px";
});

slide_left.addEventListener('click', function(){
	offset = offset - 375;
	if (offset < -750){
		offset =0;
	}
	slider_line.style.left = offset + "px";
});


/*выпадающее меню навигации с затемнением экрана*/

let menu = document.querySelector('.menu');
let nav = document.querySelector('.nav');
let exit = document.querySelector('.exit');
let wrapperDark = document.querySelector('.wrapperDark');
let navOffset = -166;
let wrapperDarkOffest = -380;

menu.addEventListener('click', openDropDownMenu);
exit.addEventListener('click', closeDropDownMenu);
wrapperDark.addEventListener('click', closeDropDownMenu);

function openDropDownMenu() {
	navOffset = navOffset + 166;
	wrapperDarkOffest = wrapperDarkOffest+ 380;
	nav.style.right = navOffset + 'px';
	wrapperDark.style.right = wrapperDarkOffest + "px"
}
function closeDropDownMenu() {
	navOffset = navOffset - 166;
	wrapperDarkOffest = wrapperDarkOffest - 380;
	nav.style.right = navOffset + 'px';
	wrapperDark.style.right = wrapperDarkOffest + "px"
}
