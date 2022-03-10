// Navbar mobile
const btn_nav = document.querySelector('.btn-menu')
const nav = document.querySelector('nav')

btn_nav.addEventListener('click',()=>{
  nav.classList.toggle('active');

})

//-- Initialize Swiper 

var swiper = new Swiper(".mySwiper", {
  speed:1000,
  loop: true,  
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// opacity 1 al scrollear

window.onscroll = () =>{
	if(window.scrollY > 0){
document.querySelector('header').classList.add('active');
}else{
document.querySelector('header').classList.remove('active');
}
nav.classList.remove('active')
search_form.classList.remove('active') // delete search al scrollear
}

// SEARCH FORM

const btn_search = document.querySelector('.btn-search')
const search_form = document.querySelector('.search-form')

btn_search.addEventListener('click',()=>{
  search_form.classList.toggle('active')
})

// -- boton close

const btn_close = document.querySelector('.btn-close')

btn_close.addEventListener('click',()=>{
  search_form.classList.remove('active')
})

// FEATURES PRODUCTS

var swiper = new Swiper(".mySwiperFeatured", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  speed:1000,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 2,
    },
    // when window width is >= 640px
    811: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    }
    
  }
});

// REVIEW

var swiper = new Swiper(".mySwiperReview", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  speed:1000,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
    // when window width is >= 640px
    811: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    }
    
  }
});

// OUR DAILY POST

var swiper = new Swiper(".mySwiperBlog", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  speed:1000,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
    // when window width is >= 640px
    811: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    }
    
  } 
});

// ADDS

var swiper = new Swiper(".mySwiperAdds", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  speed:1000,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
    // when window width is >= 640px
    811: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    }
    
  } 
});