!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(2),n(3),n(4),e.exports=n(5)},function(e,t){function n(e){var t=document.querySelector(e),n=document.querySelector(".overflow"),r=document.querySelector(".modal__btn"),o=document.querySelector(".modal"),i=window.innerWidth-document.documentElement.clientWidth+"px";function d(){setTimeout((function(){document.documentElement.style.overflow="",document.documentElement.style.paddingRight=""}),400)}t.addEventListener("click",(function(){n.classList.remove("visually-hidden"),document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=i})),r.addEventListener("click",(function(){n.classList.add("visually-hidden"),d()})),n.addEventListener("click",(function(e){e.target!==o&&(n.classList.add("visually-hidden"),d())})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(n.classList.add("visually-hidden"),d())}))}n(".header__contact-btn"),n(".contacts__btn")},function(e,t){!function(e){var t=document.querySelectorAll(e);function n(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e.forEach((function(e){e.addEventListener(t,(function(){"add"===r?e.classList.add(n):e.classList.remove(n)}))}))}n(t,"mousedown","slider__btn-click","add"),n(t,"mouseup","slider__btn-click"),n(t,"touchstart","slider__btn-click","add"),n(t,"touchend","slider__btn-click"),n(t,"mouseover","slider__btn-hover","add"),n(t,"mouseout","slider__btn-hover"),n(t,"focus","slider__btn-hover","add"),n(t,"blur","slider__btn-hover")}(".slider__btn")},function(e,t){document.getElementById("logo").addEventListener("click",(function(){location.reload()}))},function(e,t){!function(e){var t=e.prevButton,n=e.nextButton,r=e.slides,o=e.slickSlider,i=function(e){t.attr("disabled",!0).addClass("slider__btn-disabled"),o.on("afterChange",(function(o,i,d){0===d?t.attr("disabled",!0).addClass("slider__btn-disabled"):t.attr("disabled",!1).removeClass("slider__btn-disabled"),d===r.length-e?n.attr("disabled",!0).addClass("slider__btn-disabled"):n.attr("disabled",!1).removeClass("slider__btn-disabled")}))};function d(){window.innerWidth<=767&&i(lastSlide=0),window.innerWidth>=768&&i(lastSlide=1),window.innerWidth>=1280&&i(lastSlide=2)}d(),window.addEventListener("resize",d)}({slickSlider:$(".projects__swiper"),prevButton:$(".projects__prev"),nextButton:$(".projects__next"),slides:$(".projects__swiper-slide")})},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r,o,i;$(".projects__swiper").slick((r={infinite:!0,speed:300,slidesToShow:2,slidesToScroll:1,variableWidth:!0,nextArrow:".projects__next",prevArrow:".projects__prev"},i=!1,(o=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(o="infinite"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,r))}]);