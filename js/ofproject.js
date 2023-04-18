(function(){

  ('#main_page').fullpage({
		//options here
    anchors: ['viewport', 'about', 'place', 'contact'],
		autoScrolling:true,
    navigation:true,
    navigationPosition:'right'
	});
});

// viewBox ==============================

const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});
