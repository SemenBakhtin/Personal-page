$(document).ready(function () {

	$("#owl-carusel").owlCarousel({

		
		items: 3,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 3]

	});

	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,footer a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
		highlightSelector: "nav a"
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

	// Анимированная иконка
	var menulink = $('.menu-link');
	var pull = $('#navigation-toggle');
	var menu = $('.navigation ul');
	
	menulink.click(function () {

	menulink.toggleClass('active');
	menu.slideToggle('active');

	pull.toggleClass('navigation__toggle-button--active');
	return false;

	});

	// Фильтр для блока карточек
	var mixer = mixitup('#mixitup');

});