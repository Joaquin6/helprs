var o_keys = (Object.keys || function(obj) {
	var result = [];
	for (var key in obj) {
		if (o_hasOwnProperty.call(obj, key)) {
			result.push(key);
		}
	}

	return result;
});

function _each(collection, iterator) {
	if (collection.constructor === Array) {
		for (var i = 0; i < collection.length; i++) {
			var index = i;
			iterator(collection[i], index, collection);
		}
	}
	if (collection.constructor === Object) {
		for (var key in collection) {
			iterator(collection[key], key, collection);
		}
	}
}
function _copyArray(source, target) {
	for (var i = 0, l = source.length; i < l; i++) {
		target[i] = source[i];
	}
}
function _copyObject(source, target) {
	var keys = o_keys(source);
	var key;

	for (var i = 0, l = keys.length; i < l; i++) {
		key = keys[i];
		target[key] = source[key] || target[key];
	}
}

// Random helper functions
module.exports.initOptions = function(options, defaults) {
	options || (options = {});

	if (defaults) {
		for (var i in defaults) {
			if (typeof options[i] === 'undefined') {
				options[i] = defaults[i];
			}
		}
	}

	return options;
};

module.exports.testRange = function(test, errorMessage) {
	if (test) {
		throw new RangeError(errorMessage);
	}
};

/** Encode the input string with Base64. */
module.exports.base64 = function base64() {
	throw new Error('No Base64 encoder available.');
};

/** Select proper Base64 encoder. */
(function determineBase64Encoder() {
	if (typeof btoa === 'function') {
		base64 = btoa;
	} else if (typeof Buffer === 'function') {
		base64 = function(input) {
			return new Buffer(input).toString('base64');
		};
	}
})();

module.exports._copyObject = _copyObject;

module.exports._copyArray = _copyArray;

module.exports.copyObject = function(source, _target) {
	var isArray = Array.isArray(source);
	var target = _target || (isArray ? new Array(source.length) : {});

	if (isArray) {
		_copyArray(source, target);
	} else {
		_copyObject(source, target);
	}

	return target;
};

module.exports.each = _each;

module.exports.extend = function(obj) {
	_each(arguments, function(argObject) {
		_each(argObject, function(value, key) {
			obj[key] = value;
		});
	});
	return obj;
};