  AOS.init(); //инициализируем AOS

  //!--------------------для форм----------------------//
  //------------------------помощь транспортом----------------//
var modal1 = document.getElementById("modalHelpCar");
var btn1_1 = document.getElementById("BtnHelpCar");
var btn1_2 = document.getElementById("close1");
btn1_1.onclick = function() {
	modal1.style.display = "block";
}
btn1_2.onclick = function() {
modal1.style.display = "none";
}

//------------------------забрать домой----------------//
// Находим модальное окно "modalTakeHome"
var modal2 = document.getElementById("modalTakeHome");
// находим все button-primary у карточек животных (по классу), которые будут открывать данное модальное окно
var btn2_1 = document.querySelectorAll(".animal-сard__button.button-primary");
// Когда пользователь нажимает на кнопку button-primary открывается модальное окно 
btn2_1.forEach (
	element => element.onclick = function () {
		modal2.style.display = "block";
	}
);

//находим элемент с id="close2" (X)
var btn2_2 = document.getElementById("close2");
//Когда пользователь нажимает на (X) закрывается модельное окно 
btn2_2.onclick = function() {
	modal2.style.display = "none";
}

//------------------------забрать на время----------------//
// Находим модальное окно "modalTakeForTime"
var modal3 = document.getElementById("modalTakeForTime");
// находим все button-secondary у карточек животных (по классу), которые будут открывать данное модальное окно
var btn3_1 = document.querySelectorAll(".animal-сard__button.button-secondary");
// Когда пользователь нажимает на кнопку button-secondary открывается модальное окно 
var btn3_2 = document.getElementById("close3");
btn3_1.forEach(
	element => element.onclick = function () {
		modal3.style.display = "block";
	}
);
btn3_2.onclick = function() {
modal3.style.display = "none";
}

//------------------------волонтерство----------------//
var modal4 = document.getElementById("modalHelpHands");
var btn4_1 = document.getElementById("BtnHelpHands");
var btn4_2 = document.getElementById("close4");
btn4_1.onclick = function() {
	modal4.style.display = "block";
}
btn4_2.onclick = function() {
modal4.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
// for oll forms
window.onclick = function(event) {
	if (event.target == modal1) {
		modal1.style.display = "none";
	}
	if (event.target == modal2) {
		modal2.style.display = "none";
	}
	if (event.target == modal3) {
		modal3.style.display = "none";
	}
	if (event.target == modal4) {
		modal4.style.display = "none";
	}
}
  //!--------------------для бургера----------------------//
  //--------------по видео от "фрилансера"-------------//
document.addEventListener("DOMContentLoaded", function (event) {
	document.querySelectorAll('.header__burger,.header-menu__close,.header__link').forEach(
		element => element.onclick = function () {
			document.querySelector('.header').classList.toggle("show");
			document.querySelector('.header__burger').classList.toggle("show");
			document.querySelector('.header__menu').classList.toggle("show");
			document.querySelector('.header-menu__close').classList.toggle("show");
			document.querySelector('body').classList.toggle("lock");
		}
	);
});