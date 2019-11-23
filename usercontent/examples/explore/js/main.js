$(document).ready(function () {

	$("#owl-carusel").owlCarousel({

		
		items: 3,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 3]

	});

	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	// Создаем переменые для кнопки и для меню
	var pull = $('#navigation-toggle');
	var menu = $('.navigation ul');

	// Описываем событие при нажатии на кнопку
	$(pull).on("click", function (e) {

		// Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

		// Открываем/Скрываем меню
		menu.slideToggle();

		// Добавляем модификатор --active
		$(this).toggleClass('navigation__toggle-button--active');

	});



	// При изменении размера окна, в большую сторону, если меню было скрыто, показываем его
	// И у кнопки убираем модификатор --active
	$(window).resize(function () {
		var w = $(window).width();
		if (w > 992) {
			menu.removeAttr('style');
			pull.removeClass('navigation__toggle-button--active');
		} else {

		}
	});

	// Скрываем меню при клике на него на смартфоне и планцете
	// По клику на ссылку в меню запускаем ф-ю fnstart();
	$('nav.navigation a').on("click", function () {
		fnstart();
	});

	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
	// тогда убираем класс модификатор --active у кнопки pull
	// и сворачиваем/скрываем меню 
	function fnstart() {
		if ($("#navigation-toggle").hasClass("navigation__toggle-button--active")) {
			pull.toggleClass('navigation__toggle-button--active');
			menu.slideToggle();
		}
	};

	var mixer = mixitup('#mixitup');

});