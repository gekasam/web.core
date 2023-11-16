import './scss/style.scss';
import './assets/images/logo.svg';
import './assets/images/logo-photo.png';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

/* Sidemenu */
let sidebar = document.querySelector('.sidebar');
let buttonSideOpen = document.querySelector('.header__sidebar-open-button');
let buttonSideClose = document.querySelector('.sidebar__sidebar-closer-button');
let pageBlur = document.querySelector('.page-blur');
let sidebarVisible = false;

/* About more */

let moreToggleAbout = document.querySelector('.about__more');

/* Brands more */

let moreToggleBrands = document.querySelector('.brands__more');

/* Equipment-types more */

let moreToggleEq = document.querySelector('.equipment-types__more');

/* Feedback modal */

let feedback = document.querySelector('.feedback');
let feedbackButton = document.querySelectorAll('.chat-button');
let feedbackClose = document.querySelector('.feedback__feedback-closer-button');
let feedbackVisible = false;

/* Call modal */

let call = document.querySelector('.call');
let callButton = document.querySelectorAll('.call-button');
let callClose = document.querySelector('.call__call-closer-button');
let callVisible = false;


/* Sidemenu */

buttonSideOpen.addEventListener('click', () => {
  sidebar.classList.add('sidebar--active');
  pageBlur.classList.add('page-blur--active');
  sidebarVisible = true;
})

buttonSideClose.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--active');
  pageBlur.classList.remove('page-blur--active');
  sidebarVisible = false;
})

/* Page blur */

pageBlur.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--active');
  feedback.classList.remove('feedback--show');
  call.classList.remove('call--show');
  pageBlur.classList.remove('page-blur--active');
  sidebarVisible = false;
  feedbackVisible = false;
  callVisible = false;
});

/* About more */

moreToggleAbout.addEventListener('click', function() {

  document.querySelector('.about__text').classList.toggle('about__text--full-height');

  if (moreToggleAbout.textContent != 'Скрыть') {
    moreToggleAbout.textContent = 'Скрыть';
    moreToggleAbout.classList.toggle('more-reverse');
  } else {
    moreToggleAbout.textContent = 'Показать ещё';
    moreToggleAbout.classList.toggle('more-reverse');
  }
  
});

/* Swiper brands */

if (window.innerWidth < 768) {
  var swiper = new Swiper('.brandsSwiper', {
    slidesPerView: 1.25,
    slidesOffsetAfter: 20,
    spaceBetween: 16,
    modules: [Pagination],
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      768: {
        enabled: false
      },
    },
  });
}

/* Brands more */

moreToggleBrands.addEventListener('click', function() {

  document.querySelector('.brandsSwiper .swiper-wrapper').classList.toggle('services-info--full-height');

  if (moreToggleBrands.textContent != 'Скрыть') {
    moreToggleBrands.textContent = 'Скрыть';
    moreToggleBrands.classList.toggle('more-reverse');
  } else {
    moreToggleBrands.textContent = 'Показать ещё';
    moreToggleBrands.classList.toggle('more-reverse');
  }
  
});

/* Swiper equipment-types */

if (window.innerWidth < 768) {
  var swiper = new Swiper('.equipment-typesSwiper', {
    slidesPerView: 1.25,
    slidesOffsetAfter: 20,
    spaceBetween: 16,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      768: {
        enabled: false
      },
    },
  });
}

/* Equipment-types more */

moreToggleEq.addEventListener('click', function() {

  document.querySelector('.equipment-typesSwiper .swiper-wrapper').classList.toggle('services-info--full-height');

  if (moreToggleEq.textContent != 'Скрыть') {
    moreToggleEq.textContent = 'Скрыть';
    moreToggleEq.classList.toggle('more-reverse');
  } else {
    moreToggleEq.textContent = 'Показать ещё';
    moreToggleEq.classList.toggle('more-reverse');
  }
  
});

/* Swiper prices */

if (window.innerWidth < 768) {
  var swiper = new Swiper('.pricesSwiper', {
    slidesPerView: 1.25,
    slidesOffsetAfter: 20,
    spaceBetween: 16,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      768: {
        enabled: false
      },
    },
  });
}

if (window.innerWidth >= 768) {
  /* Delete individual headers */

  let oldHeaders = document.querySelectorAll('.price-details .price-details__header');
  
  for (let i = 0; i < oldHeaders.length; i++) {
    oldHeaders[i].remove();
  }
  
  /* Create new headers */

  let priceDetails = document.querySelector('.pricesSwiper .swiper-wrapper');
  const priceHeaders = ['Ремонтные услуги', 'Цена', 'Срок', ''];
  let fragmentHeaders = new DocumentFragment();

  let newHeaders = document.createElement('div');
  newHeaders.classList.add('price-details__headers');

  for (const header of priceHeaders) {
    let newHeader = document.createElement('h3');

    newHeader.classList.add('price-details__header');
    newHeader.textContent = header;
    fragmentHeaders.append(newHeader);
  }

  newHeaders.append(fragmentHeaders);
  priceDetails.prepend(newHeaders);
}

/* Feedback modal */

feedbackClose.addEventListener('click', function () {
  feedback.classList.remove('feedback--show');
  if (!sidebarVisible) {
    pageBlur.classList.remove('page-blur--active');
  }
  feedbackVisible = false;
});

let chatHandler = function (button) {
  button.addEventListener('click', function () {
    feedback.classList.add('feedback--show');
    pageBlur.classList.add('page-blur--active');
    feedbackVisible = true;
    if (callVisible) {
      call.classList.remove('call--show');
      callVisible = false;
    }
  });
}

for (let button of feedbackButton) {
  chatHandler(button);
}

/* Call modal */

callClose.addEventListener('click', function () {
  call.classList.remove('call--show');
  if (!sidebarVisible) {
    pageBlur.classList.remove('page-blur--active');
  }
  callVisible = false;
});

let callHandler = function (button) {
  button.addEventListener('click', function () {
    call.classList.add('call--show');
    pageBlur.classList.add('page-blur--active');
    callVisible = true;
    if (feedbackVisible) {
      feedback.classList.remove('feedback--show');
      feedbackVisible = false;
    }
  });
}

for (let button of callButton) {
  callHandler(button);
}

/* Feedback vs Call */