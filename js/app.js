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

// data featured products

const products = [
  {
    img:'./images/product-1.png',
    nombre:'survival kit',
    precio:'usd 20',
  },
  {
    img:'./images/product-2.png',
    nombre:'navaja mod.3',
    precio:'usd 12',
  },
  {
    img:'./images/product-3.png',
    nombre:'gafas snow',
    precio:'usd 22',
  },
  {
    img:'./images/product-4.png',
    nombre:'botas de trekking',
    precio:'usd 120',
  },
  {
    img:'./images/product-5.png',
    nombre:'gancho de seguridad',
    precio:'usd 18',
  },
  {
    img:'./images/product-6.png',
    nombre:'asador portatil',
    precio:'usd 50',
  },
];

const listaProductos = products.map(function(e) {
  return(
    `
    <div class="swiper-slide">
      <img src=${e.img} alt=${e.nombre}>
      <h3>${e.nombre}</h3>
      <p>${e.precio}</p>
      <div>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star-half'></i>
      </div>
    </div>
    `)
});

document.querySelector("#slideProduct").innerHTML = listaProductos.join('')

//

// data popular packages

const packages = [
  {
    img:'./images/img-1.jpg',
    titulo:'Kayak en lago esmeralda',
    descripcion:'Navega por el mitico lago esmeralda',
    precioDesde:'$150',
    precioHasta:'$200',
  },
  {
    img:'./images/img-2.jpg',
    titulo:'Isla Bonita',
    descripcion:'Visita la bella isla y tomate grandes fotos',
    precioDesde:'$250',
    precioHasta:'$300',
  },
  {
    img:'./images/img-3.jpg',
    titulo:'Trekking por lago esmeralda',
    descripcion:'Disfruta de los senderos mas famosos de Argentina para hacer trekking',
    precioDesde:'$100',
    precioHasta:'$150',
  },
  {
    img:'./images/img-4.jpg',
    titulo:'El Chalten',
    descripcion:'Conoce la capitalnacional de trekking',
    precioDesde:'$350',
    precioHasta:'$400',
  },
  {
    img:'./images/img-5.jpg',
    titulo:'Costa piedras',
    descripcion:'Las mejores olas del atlantico',
    precioDesde:'$100',
    precioHasta:'$120',
  },
  {
    img:'./images/img-6.jpg',
    titulo:'Mountain Bike por las Sierras',
    descripcion:'Para conocer Cordoba de una manera distinta',
    precioDesde:'$50',
    precioHasta:'$100',
  },
  
];

const listaPackages = packages.map(function(e) {
  return(
    `
    <div>
      <img src=${e.img} alt=${e.titulo}>
      <h3>${e.titulo}</h3>
      <p>${e.descripcion}</p>
      <p>${e.precioDesde} - ${e.precioHasta}</p>
      <a href="#">Explore Now</a>
    </div>
    `)
});

document.querySelector("#dataPackages").innerHTML = listaPackages.join('')
