
"use strict";

angular.module('pads.windowFocus', []).service('$padsWindowFocus', function ($window) {
	var service = {},
		focus = true,
		on = {
			focus: {},
			blur: {}
		};

	angular.element($window)
		.on('focus', function () {
			focus = true;
			process(on.focus);
		})
		.off('blur', function () {
			focus = false;
			process(on.blur);
		});

	/**
	 * @param {{}} list
	 */
	function process(list) {
		angular.forEach(list, function (callback) {
			callback();
		});
	}

	/**
	 * @returns {boolean}
	 */
	service.has = function () {
		return focus;
	};

	/**
	 * @param {String} events ["focus", "blur"]
	 * @param {String} namespace
	 * @param {function} callback
	 */
	service.on = function (events, namespace, callback) {
		on[events][namespace] = callback;
	};

	/**
	 * @param {String} events ["focus", "blur"]
	 * @param {String} namespace
	 */
	service.off = function (events, namespace) {
		delete on[events][namespace];
	};

	return service;
});