'use strict';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'fetch-polyfill';
import 'es6-promise';
import 'formdata-polyfill';
import elemenyClosest from 'element-closest';
elemenyClosest(window);

import countTimer from './modules/countTimer';
import scrollingAnchor from './modules/scrollingAnchor';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import validation from './modules/validation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

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