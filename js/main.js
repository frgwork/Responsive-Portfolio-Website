/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLinck = document.querySelectorAll('.nav__link');

function linkAction() {
   // const navMenu = document.getElementById('nav-menu');
   navMenu.classList.remove('show-menu');
}
navLinck.forEach((n) => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
   let itemClass = this.parentNode.className;

   for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills__content skills__close';
   }
   if (itemClass === 'skills__content skills__close') {
      this.parentNode.className = 'skills__content skills__open';
   }
}

skillsHeader.forEach((el) => {
   el.addEventListener('click', toggleSkills);
});

// /*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
   tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach(tabContent => {
         tabContent.classList.remove('qualification__active');
      })
      target.classList.add('qualification__active');

      tabs.forEach(tab => {
         tab.classList.remove('qualification__active');
      })
      tab.classList.add('qualification__active');
   })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
   modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
   modalBtn.addEventListener('click', () => {
      modal(i);
   });
});

modalCloses.forEach(modalClose => {
   modalClose.addEventListener('click', () => {
      modalViews.forEach(modalView => {
         modalView.classList.remove('active-modal');
      });
   });
});

/*==================== PORTFOLIO SWIPER  ====================*/
const swiperPortfolio = new Swiper('.portfolio__container', {
   cssMode: true,
   mousewheel: true,

   keyboard: true,
   loop: true,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

// const slider = document.querySelector('.portfolio__container');

// let mySwiper = new Swiper(slider, {
// 	// slidesPerView: 3,
// 	// spaceBetween: 10,
// 	loop: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	},
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// })

/*==================== TESTIMONIAL ====================*/
const swiperTestimonial = new Swiper('.testimonial__container', {
   mousewheel: true,
   keyboard: true,

   loop: true,
   grabCursor: true,
   spaceBetween: 48,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   },
   breakpoints: {
      568: {
         slidesPerView: 2,
      }
   }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
   const scrollY = window.pageYOffset;

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY + sectionHeight) {
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
      } else {
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
   })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
   const nav = document.getElementById('header');

   if (this.scrollY >= 80) nav.classList.add('scroll-header');
   else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
   const scrollUp = document.getElementById('scroll-up');

   if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
   else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
// Ранее выбранная тема (если выбран пользователь)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
// Мы получаем текущую тему, имеющуюся в интерфейсе, путем проверки класса темной темы
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
// Мы проверяем, выбрал ли пользователь ранее тему
if (selectedTheme) {
   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
   // Если проверка выполнена, мы спрашиваем, в чем была проблема, чтобы узнать, активировали ли мы или деактивировали темный
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
   themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
// Активируйте / деактивируйте тему вручную с помощью кнопки
themeButton.addEventListener('click', () => {
   // Add or remove the dark / icon theme
   // Добавьте или удалите тему темных / значков
   document.body.classList.toggle(darkTheme)
   themeButton.classList.toggle(iconTheme)
   // We save the theme and the current icon that the user chose
   // Мы сохраняем тему и текущий значок, выбранный пользователем
   localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentIcon())
})