'use strict';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'fetch-polyfill';
import 'es6-promise';
import 'formdata-polyfill';
import elemenyClosest from 'element-closest';
elemenyClosest(window);


import SliderCourusel from './plugins/sliderCarousel';
import countTimer from './modules/countTimer';
import scrollingAnchor from './modules/scrollingAnchor';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import validation from './modules/validation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import Validator from './plugins/validator';

//Timer
countTimer('30 november 2019');
//scroll
scrollingAnchor();
//Menu
toggleMenu();
//popup
togglePopup();
//Tabs
tabs();
//Slider
slider();
//Validation
validation();
//Calculate
calc(100);
//send-ajax-form
sendForm();

const validateFormOne = new Validator({
  selector: '#form1',
  pattern: {},
  method: {
    'form1-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form1-email': [
      ['notEmpty'],
      ['pattern', 'email']
    ],
    'form1-name': [
      ['notEmpty'],
      ['pattern', 'ruText']
    ]
  }
});
      const validateFormTwo = new Validator({
  selector: '#form2',
  pattern: {},
  method: {
    'form2-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form2-email': [
      ['notEmpty'],
      ['pattern', 'email']
    ],
    'form2-name': [
      ['notEmpty'],
      ['pattern', 'ruText']
    ],
    'form2-message': [
      ['notEmpty'],
      ['pattern', 'ruText']
    ]
  }
});
      const validateFormThree = new Validator({
  selector: '#form3',
  pattern: {},
  method: {
    'form3-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form3-email': [
      ['notEmpty'],
      ['pattern', 'email']
    ],
    'form1-name': [
      ['notEmpty'],
      ['pattern', 'ruText']
    ]
  }
});
validateFormOne.init();
validateFormTwo.init();
validateFormThree.init();
const sliderCourusel = new SliderCourusel({
  main: '.companies-wrapper',
  wrap: '.companies-hor',
  slidesToShow: 4,
  infinity: true,
  responsive: [{
    breakpoint: 1024,
    slidesToShow: 3,
  },
  {
    breakpoint: 768,
    slidesToShow: 2,
  },
  {
    breakpoint: 576,
    slidesToShow: 1,
  }
],
});

sliderCourusel.init();