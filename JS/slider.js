window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__list'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		duration: 1.8,
		draggable: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1,
				duration: 1.8
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				duration: 1.8
			  }
			}
		]
	});
});