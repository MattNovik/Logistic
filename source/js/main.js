// import {ieFix} from './utils/ie-fix';
// import {polyfillObjectFit} from './utils/polyfill-object-fit';

import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/modals/init-modals';
import {initPhotosSlider} from './modules/init-slider-photos';
import {initFormValidate} from './modules/init-form-validate';
import {initMoveTo} from './modules/init-move-to';
import {initOpenMenu} from './modules/init-menu-open';
import {initServicesInfo} from './modules/init-services-info';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // только если ie11
  // ieFix();
  // https://github.com/fregante/object-fit-images
  // polyfillObjectFit();

  iosVhFix();
  initPhotosSlider();
  initOpenMenu();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initFormValidate();
    initMoveTo();
    initServicesInfo();
  });
});

// ---------------------------------

// используйте .closest(el)

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// привязывайте js не на бэм, а на data-cookie

// выносим все в data-attr - url до пинов карты, настройки автопрокрутки, url к json и т.д.
