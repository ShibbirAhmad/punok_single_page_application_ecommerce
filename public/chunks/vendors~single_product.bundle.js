(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~single_product"],{

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(window, factory) {
	var lazySizes = factory(window, window.document, Date);
	window.lazySizes = lazySizes;
	if( true && module.exports){
		module.exports = lazySizes;
	}
}(typeof window != 'undefined' ?
      window : {}, 
/**
 * import("./types/global")
 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
 */
function l(window, document, Date) { // Pass in the window Date function also for SSR because the Date class can be lost
	'use strict';
	/*jshint eqnull:true */

	var lazysizes,
		/**
		 * @type { LazySizesConfigPartial }
		 */
		lazySizesCfg;

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			fastLoadedClass: 'ls-is-cached',
			iframeLoadMode: 0,
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = lazySizesDefaults[prop];
			}
		}
	})();

	if (!document || !document.getElementsByClassName) {
		return {
			init: function () {},
			/**
			 * @type { LazySizesConfigPartial }
			 */
			cfg: lazySizesCfg,
			/**
			 * @type { true }
			 */
			noSupport: true,
		};
	}

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	/**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */
	var addEventListener = window[_addEventListener].bind(window);

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	/**
	 * @param elem { Element }
	 * @param name { string }
	 * @param detail { any }
	 * @param noBubbles { boolean }
	 * @param noCancelable { boolean }
	 * @returns { CustomEvent }
	 */
	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	/**
	 *
	 * @param elem { Element }
	 * @param parent { Element }
	 * @param [width] {number}
	 * @returns {number}
	 */
	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesCfg.throttleDelay;
		var rICTimeout = lazySizesCfg.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesCfg.ricTimeout){
					rICTimeout = lazySizesCfg.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if (!defaultExpand) {
						defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
							docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
							lazySizesCfg.expand;

						lazysizes._defEx = defaultExpand;

						preloadExpand = defaultExpand * lazySizesCfg.expFactor;
						hFac = lazySizesCfg.hFac;
						isBodyHidden = null;

						if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
							currentExpand = preloadExpand;
							lowRuns = 0;
						} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
							currentExpand = defaultExpand;
						} else {
							currentExpand = shrinkExpand;
						}
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesCfg.loadedClass);
			removeClass(elem, lazySizesCfg.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			var loadMode = elem.getAttribute('data-load-mode') || lazySizesCfg.iframeLoadMode;

			// loadMode can be also a string!
			if (loadMode == 0) {
				elem.contentWindow.location.replace(src);
			} else if (loadMode == 1) {
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

			if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesCfg.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
				src = elem[_getAttribute](lazySizesCfg.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesCfg.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesCfg.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if( !firesLoad || isLoaded){
					if (isLoaded) {
						addClass(elem, lazySizesCfg.fastLoadedClass);
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
				if (elem.loading == 'lazy') {
					isLoading--;
				}
			}, true);
		});

		/**
		 *
		 * @param elem { Element }
		 */
		var unveilElement = function (elem){
			if (elem._lazyRace) {return;}
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var afterScroll = debounce(function(){
			lazySizesCfg.loadMode = 3;
			throttledCheckElements();
		});

		var altLoadmodeScrollListner = function(){
			if(lazySizesCfg.loadMode == 3){
				lazySizesCfg.loadMode = 2;
			}
			afterScroll();
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}


			isCompleted = true;

			lazySizesCfg.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', altLoadmodeScrollListner, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				addEventListener('pageshow', function (e) {
					if (e.persisted) {
						var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

						if (loadingElements.length && loadingElements.forEach) {
							requestAnimationFrame(function () {
								loadingElements.forEach( function (img) {
									if (img.complete) {
										unveilElement(img);
									}
								});
							});
						}
					}
				});

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement,
			_aLSL: altLoadmodeScrollListner,
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		/**
		 *
		 * @param elem {Element}
		 * @param dataAttr
		 * @param [width] { number }
		 */
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i && document.getElementsByClassName){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	setTimeout(function(){
		if(lazySizesCfg.init){
			init();
		}
	});

	lazysizes = {
		/**
		 * @type { LazySizesConfigPartial }
		 */
		cfg: lazySizesCfg,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));


/***/ }),

/***/ "./node_modules/vue-image-zoomer/dist/vueImageZoom.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-image-zoomer/dist/vueImageZoom.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){if(true)module.exports=e();else { var i, o; }}(window,(function(){return function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=15)}([function(t,e,o){var i=o(3);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(5)(i,n);i.locals&&(t.exports=i.locals)},function(t,e,o){"use strict";var i={name:"ImageZoom",directives:{clickOutside:{bind:function(t,e,o){t.clickOutsideEvent=function(i){t==i.target||t.contains(i.target)||o.context[e.expression](i)},document.body.addEventListener("click",t.clickOutsideEvent)},unbind:function(t){document.body.removeEventListener("click",t.clickOutsideEvent)}}},data:function(){return{touch:!1,zoomed:!1,x:0,y:0,touchPosition:0,origX:0,origY:0,offsetLeft:0,offsetTop:0,zoomWidth:0,options:{zoomAmount:0,zoom:!1,zoomWebp:!1},loaded:!1,loading:!1,webp_supported:!1,cx:0,cy:0}},props:{regular:String,regularWebp:String,zoom:String,zoomWebp:String,imgClass:String,alt:String,zoomAmount:{type:Number,default:0},clickZoom:Boolean,hoverMessage:{type:String,default:'<span class="vh--icon">&#9906;</span> Hover to zoom'},touchMessage:{type:String,default:'<span class="vh--icon">&#9906;</span> Tap to zoom'},clickMessage:{type:String,default:'<span class="vh--icon">&#9906;</span> Click to zoom'},closePos:{type:String,default:"top-left"},messagePos:{type:String,default:"bottom"},showMessage:{type:Boolean,default:!0},showMessageTouch:{type:Boolean,default:!0},breakpoints:Array,lazyload:Boolean,lazyloadPlaceholder:{type:String,default:""}},watch:{propChanges:function(){this.get_options()}},computed:{propChanges:function(){return"".concat(this.breakpoints,"|").concat(this.regular,"|").concat(this.regularWebp,"|").concat(this.zoom,"|").concat(this.zoomAmount,"|").concat(this.zoomWebp)}},mounted:function(){var t,e;this.check_webp_feature("lossy",function(t,e){e&&(this.webp_supported=!0)}.bind(this)),this.get_options(),("ontouchstart"in window||navigator.msMaxTouchPoints)&&(this.touch=!0),this.$refs["vue-hover-zs"].addEventListener("touchstart",function(o){if(this.zoomed){o.cancelable&&o.preventDefault();var i=o.changedTouches[0];t=i.pageX-this.cx,e=i.pageY-this.cy}}.bind(this)),this.$refs["vue-hover-zs"].addEventListener("touchmove",function(o){if(this.zoomed){var i=o.changedTouches[0];this.x=i.pageX-t,this.y=i.pageY-e,i.pageX-t<=this.origX-this.zoomWidth&&(this.x=this.origX-this.zoomWidth),i.pageX-t>=0&&(this.x=-1),i.pageY-e<=this.origY-this.options.zoomAmount*this.origY&&(this.y=this.origY-this.options.zoomAmount*this.origY),i.pageY-e>=0&&(this.y=-1),this.touchPosition="translate3d("+this.x+"px,"+this.y+"px,0)"}}.bind(this)),this.$refs["vue-hover-zs"].addEventListener("touchend",function(o){if(this.zoomed){var i=o.changedTouches[0];this.cx=i.pageX-t,this.cy=i.pageY-e}}.bind(this))},created:function(){var t=this;this.breakpoints&&window.addEventListener("resize",this.debounce((function(){t.resize()}),500))},destroyed:function(){this.breakpoints&&window.removeEventListener("resize",this.resize())},methods:{debounce:function(t,e){var o,i=this;return function(){for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];var a=i;clearTimeout(o),o=setTimeout((function(){return t.apply(a,s)}),e)}},get_options:function(){this.options.zoomAmount=this.zoomAmount,this.options.zoom=this.zoom,this.options.zoomWebp=this.zoomWebp,this.zoom||(this.options.zoom=this.regular,this.options.zoomAmount=2),!this.zoomWebp&&this.regularWebp&&(this.options.zoomWebp=this.regularWebp,this.options.zoomAmount=2),this.cx=0,this.cy=0,this.x=0,this.y=0,this.touchPosition="translate3d(0,0,0)",this.resize()},resize:function(){this.loaded=!1},check_webp_feature:function(t,e){var o=new Image;o.onload=function(){var i=o.width>0&&o.height>0;e(t,i)},o.onerror=function(){e(t,!1)},o.src="data:image/webp;base64,"+{lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}[t]},loadImage:function(t,e){var o=new Image;o.onload=e,o.src=t},loadZoom:function(){this.offset(),0!=this.options.zoomAmount&&(this.zoomWidth=this.origX*this.options.zoomAmount),this.loaded?(this.zoomed=!0,0==this.options.zoomAmount&&(this.options.zoomAmount=this.zoomWidth/this.origX)):this.zoomLoad()},zoomLoad:function(){this.loading=!0;var t=this.options.zoom;this.breakpoints&&this.breakpoints.forEach((function(e,o){window.innerWidth>=e.width&&(t=e.zoom?e.zoom:e.regular)})),this.webp_supported&&this.options.zoomWebp&&(t=this.options.zoomWebp,this.breakpoints&&this.breakpoints.forEach((function(e,o){window.innerWidth>=e.width&&(t=e.zoomWebp?e.zoomWebp:e.regularWebp)}))),this.loadImage(t,function(t){0==this.options.zoomAmount&&(this.zoomWidth=t.target.width,this.options.zoomAmount=t.target.width/this.origX),this.loaded=!0,this.loading=!1,this.zoomed=!0}.bind(this))},isZoom:function(t,e){("hover"==e&&!this.clickZoom&&!this.touch||"click"==e&&(this.clickZoom||this.touch)||!e)&&(this.zoomed=!1,1==t&&this.loadZoom())},offset:function(){this.origX=parseFloat(this.$refs["vue-hover-zs"].offsetWidth),this.origY=parseFloat(this.$refs["vue-hover-zs"].offsetHeight)},mousePos:function(t){this.offsetLeft=window.pageXOffset+this.$refs["vue-hover-zs"].getBoundingClientRect().left,this.offsetTop=window.pageYOffset+this.$refs["vue-hover-zs"].getBoundingClientRect().top,this.touch||this.loading||(this.loaded||0!=this.options.zoomAmount?(this.x=(t.pageX-this.offsetLeft)*(this.options.zoomAmount-1),this.y=(t.pageY-this.offsetTop)*(this.options.zoomAmount-1)):(this.offset(),this.zoomLoad()))}}};o(2);var n=function(t,e,o,i,n,s,r,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=o,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=a?function(){n.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(u.functional){u._injectStyles=c;var h=u.render;u.render=function(t,e){return c.call(e),h(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.isZoom,expression:"isZoom"}],staticClass:"vh--outer vh--rel"},[o("div",{ref:"vue-hover-zs",staticClass:"vh--holder vh--rel vh--flex vh--jc",on:{mouseenter:function(e){return t.isZoom(!0,"hover")},mouseleave:function(e){return t.isZoom(!1,"hover")},mousemove:t.mousePos,click:function(e){return t.isZoom(!t.zoomed,"click")}}},[t.lazyload?o("picture",{class:{"vh--none":t.zoomed}},[t._l(t.breakpoints,(function(e){return[e.regularWebp?o("source",{attrs:{"data-srcset":e.regularWebp,type:"image/webp",media:"(min-width:"+e.width+"px)"}}):t._e(),t._v(" "),e.regular?o("source",{attrs:{"data-rcset":e.regular,media:"(min-width:"+e.width+"px)"}}):t._e()]})),t._v(" "),t.regularWebp?o("source",{attrs:{"data-srcset":t.regularWebp,type:"image/webp"}}):t._e(),t._v(" "),o("img",{class:t.imgClass+" lazyload",attrs:{src:t.lazyloadPlaceholder,"data-src":t.regular,alt:t.alt}})],2):o("picture",{class:{"vh--none":t.zoomed}},[t._l(t.breakpoints,(function(e){return[e.regularWebp?o("source",{attrs:{srcset:e.regularWebp,type:"image/webp",media:"(min-width:"+e.width+"px)"}}):t._e(),t._v(" "),e.regular?o("source",{attrs:{srcset:e.regular,media:"(min-width:"+e.width+"px)"}}):t._e()]})),t._v(" "),t.regularWebp?o("source",{attrs:{srcset:t.regularWebp,type:"image/webp"}}):t._e(),t._v(" "),o("img",{class:t.imgClass,attrs:{src:t.regular,alt:t.alt}})],2),t._v(" "),t.zoomed?o("picture",[t._l(t.breakpoints,(function(e){return[e.zoomWebp?o("source",{attrs:{srcset:e.zoomWebp,type:"image/webp",media:"(min-width:"+e.width+"px)"}}):e.regularWebp?o("source",{attrs:{srcset:e.regularWebp,type:"image/webp",media:"(min-width:"+e.width+"px)"}}):t._e(),t._v(" "),e.zoom?o("source",{attrs:{srcset:e.zoom,media:"(min-width:"+e.width+"px)"}}):e.regular?o("source",{attrs:{srcset:e.regular,media:"(min-width:"+e.width+"px)"}}):t._e()]})),t._v(" "),t.options.zoomWebp?o("source",{attrs:{src:"options.zoomWebp",type:"image/webp"}}):t._e(),t._v(" "),t.touch?o("img",{staticClass:"vh--image vh--abs",style:"width:"+t.zoomWidth+"px;transform:"+t.touchPosition,attrs:{src:t.options.zoom}}):o("img",{staticClass:"vh--image vh--abs",style:{width:t.zoomWidth+"px",transform:"translate(-"+t.x+"px,-"+t.y+"px)"},attrs:{src:t.options.zoom}})],2):t._e(),t._v(" "),o("transition",{attrs:{name:"VueHoverfade"}},[t.zoomed||t.loading||t.clickZoom||t.touch||!t.showMessage?t.zoomed||t.loading||t.touch||!t.showMessage?!t.zoomed&&!t.loading&&t.touch&&t.showMessageTouch?o("div",{staticClass:"vh--message vh--abs vh--flex vh--jc vh--ai",class:"vh--message-"+t.messagePos,domProps:{innerHTML:t._s(t.touchMessage)}}):t._e():o("div",{staticClass:"vh--message vh--abs vh--flex vh--jc vh--ai",class:"vh--message-"+t.messagePos,domProps:{innerHTML:t._s(t.clickMessage)}}):o("div",{staticClass:"vh--message vh--abs vh--flex vh--jc vh--ai",class:"vh--message-"+t.messagePos,domProps:{innerHTML:t._s(t.hoverMessage)}})])],1),t._v(" "),o("transition",{attrs:{name:"VueHoverfade"}},[t.touch&&t.zoomed&&t.loaded&&!t.cus?o("div",{staticClass:"vh--close vh--abs vh--flex vh--jc vh--ai",class:"vh--"+t.closePos,domProps:{innerHTML:t._s("&times;")},on:{click:function(e){e.stopPropagation(),t.zoomed=!1}}}):t.loading?o("div",{staticClass:"vh--loading-o vh--abs vh--flex vh--jc vh--ai"},[o("div",{staticClass:"vh--loading",domProps:{innerHTML:t._s("&#9696;")}})]):t._e()])],1)}),[],!1,null,null,null);e.a=n.exports},function(t,e,o){"use strict";var i=o(0);o.n(i).a},function(t,e,o){(t.exports=o(4)(!1)).push([t.i,".VueHoverfade-enter-active,.VueHoverfade-leave-active{transition:opacity .5s}.VueHoverfade-enter,.VueHoverfade-leave-to{opacity:0}.vh--outer[v-cloak]{display:none}.vh--flex{display:flex}.vh--jc{justify-content:center}.vh--ai{align-items:center}.vh--rel{position:relative}.vh--abs{position:absolute}.vh--outer{display:inline-block;line-height:0;font-family:Arial,Helvetica,sans-serif;color:#fff}.vh--holder{overflow:hidden;touch-action:manipulation;cursor:zoom-in;align-items:flex-start}.vh--image{top:0;left:0;pointer-events:none}.vh--message{background-color:rgba(0,0,0,.65);padding:8px 15px;border-radius:50px;text-align:center;line-height:initial}.vh--message-top{top:20px}.vh--message-bottom{bottom:20px}.vh--icon{transform:rotate(-45deg);display:block;font-size:20px;margin-right:5px;line-height:20px}.vh--close{line-height:0;background-color:rgba(0,0,0,.65);border-radius:50px;font-size:23px;cursor:pointer;height:28px;width:28px}.vh--top-left{top:5px;left:5px}.vh--top-right{top:5px;right:5px}.vh--top-center{top:5px;left:50%;transform:translateX(-50%)}.vh--bottom-left{bottom:5px;left:5px}.vh--bottom-right{bottom:5px;right:5px}.vh--bottom-center{bottom:5px;left:50%;transform:translateX(-50%)}.vh--loading-o{top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.65);pointer-events:none}.vh--loading{top:50%;left:50%;font-size:60px;line-height:60px;animation:vuehoverzoomspin 1s linear infinite;width:36px;height:70px}.vh--none{opacity:0}@keyframes vuehoverzoomspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",i=t[3];if(!i)return o;if(e&&"function"==typeof btoa){var n=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),s=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[o].concat(s).concat([n]).join("\n")}var r;return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o})).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var s=this[n][0];"number"==typeof s&&(i[s]=!0)}for(n=0;n<t.length;n++){var r=t[n];"number"==typeof r[0]&&i[r[0]]||(o&&!r[2]?r[2]=o:o&&(r[2]="("+r[2]+") and ("+o+")"),e.push(r))}},e}},function(t,e,o){var i,n,s={},r=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=i.apply(this,arguments)),n}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,o){if("function"==typeof t)return t();if(void 0===e[t]){var i=a.call(this,t,o);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),u=null,h=0,l=[],p=o(6);function f(t,e){for(var o=0;o<t.length;o++){var i=t[o],n=s[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(y(i.parts[r],e))}else{var a=[];for(r=0;r<i.parts.length;r++)a.push(y(i.parts[r],e));s[i.id]={id:i.id,refs:1,parts:a}}}}function d(t,e){for(var o=[],i={},n=0;n<t.length;n++){var s=t[n],r=e.base?s[0]+e.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};i[r]?i[r].parts.push(a):o.push(i[r]={id:r,parts:[a]})}return o}function m(t,e){var o=c(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===t.insertAt)i?i.nextSibling?o.insertBefore(e,i.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),l.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=c(t.insertAt.before,o);o.insertBefore(e,n)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return o.nc}();i&&(t.attrs.nonce=i)}return b(e,t.attrs),m(t,e),e}function b(t,e){Object.keys(e).forEach((function(o){t.setAttribute(o,e[o])}))}function y(t,e){var o,i,n,s;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var r=h++;o=u||(u=g(e)),i=w.bind(null,o,r,!1),n=w.bind(null,o,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),m(t,e),e}(e),i=A.bind(null,o,e),n=function(){v(o),o.href&&URL.revokeObjectURL(o.href)}):(o=g(e),i=_.bind(null,o),n=function(){v(o)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=d(t,e);return f(o,e),function(t){for(var i=[],n=0;n<o.length;n++){var r=o[n];(a=s[r.id]).refs--,i.push(a)}t&&f(d(t,e),e);for(n=0;n<i.length;n++){var a;if(0===(a=i[n]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete s[a.id]}}}};var z,x=(z=[],function(t,e){return z[t]=e,z.filter(Boolean).join("\n")});function w(t,e,o,i){var n=o?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,n);else{var s=document.createTextNode(n),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function _(t,e){var o=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}function A(t,e,o){var i=o.css,n=o.sourceMap,s=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||s)&&(i=p(i)),n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,i=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var n,s=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(n=0===s.indexOf("//")?s:0===s.indexOf("/")?o+s:i+s.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")}))}},,,,,,,,,function(t,e,o){t.exports=o(16)},function(t,e,o){"use strict";o.r(e);var i=o(1);e.default=i.a}])}));

/***/ })

}]);