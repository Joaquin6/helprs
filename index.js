/*!
 * Copyright (c) 2017 Joaquin Briceno <joaquinbriceno1@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var _rdm = require("./util/rdm"),
	_data = require("./util/data"),
	_blueImpMD5 = require("./util/blueimp"),
	_mersenneTwister = require("./util/mtwist");

/**
 * ===========
 * GLOBAL VARS
 * ===========
 */

var uuid = {
	3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
	4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/** @type {Array} Cached array helpers */
var slice = Array.prototype.slice;
var default_email_options = {
	allow_display_name: false,
	require_display_name: false,
	allow_utf8_local_part: true,
	require_tld: true
};
var default_fqdn_options = {
	require_tld: true,
	allow_underscores: false,
	allow_trailing_dot: false
};
var default_currency_options = {
	symbol: '$',
	require_symbol: false,
	allow_space_after_symbol: false,
	symbol_after_digits: false,
	allow_negatives: true,
	parens_for_negatives: false,
	negative_sign_before_digits: false,
	negative_sign_after_digits: false,
	allow_negative_sign_placeholder: false,
	thousands_separator: ',',
	decimal_separator: '.',
	allow_space_after_digits: false
};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
	return typeof obj;
} : function(obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})|62[0-9]{14}$/;
var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];
var issn = '^\\d{4}-?\\d{3}[\\dX]$';
var phones = {
	'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
	'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
	'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
	'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
	'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
	'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
	'da-DK': /^(\+?45)?(\d{8})$/,
	'el-GR': /^(\+?30)?(69\d{8})$/,
	'en-AU': /^(\+?61|0)4\d{8}$/,
	'en-GB': /^(\+?44|0)7\d{9}$/,
	'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
	'en-IN': /^(\+?91|0)?[789]\d{9}$/,
	'en-NZ': /^(\+?64|0)2\d{7,9}$/,
	'en-ZA': /^(\+?27|0)\d{9}$/,
	'en-ZM': /^(\+?26)?09[567]\d{7}$/,
	'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
	'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,
	'fr-FR': /^(\+?33|0)[67]\d{8}$/,
	'he-IL': /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,
	'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
	'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
	'ja-JP': /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
	'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
	'nb-NO': /^(\+?47)?[49]\d{7}$/,
	'nl-BE': /^(\+?32|0)4?\d{8}$/,
	'nn-NO': /^(\+?47)?[49]\d{7}$/,
	'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
	'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
	'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
	'ru-RU': /^(\+?7|8)?9\d{9}$/,
	'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
	'tr-TR': /^(\+?90|0)?5\d{9}$/,
	'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
	'zh-CN': /^(\+?0?86\-?)?1[345789]\d{9}$/,
	'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
// aliases
phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
var notBase64 = /[^A-Z0-9+\/=]/i;
var dataURI = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i; // eslint-disable-line max-len
var default_normalize_email_options = {
	// The following options apply to all email addresses
	// Lowercases the local part of the email address.
	// Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
	// The domain is always lowercased, as per RFC 1035
	all_lowercase: true,

	// The following conversions are specific to GMail
	// Lowercases the local part of the GMail address (known to be case-insensitive)
	gmail_lowercase: true,
	// Removes dots from the local part of the email address, as that's ignored by GMail
	gmail_remove_dots: true,
	// Removes the subaddress (e.g. "+foo") from the email address
	gmail_remove_subaddress: true,
	// Conversts the googlemail.com domain to gmail.com
	gmail_convert_googlemaildotcom: true,

	// The following conversions are specific to Outlook.com / Windows Live / Hotmail
	// Lowercases the local part of the Outlook.com address (known to be case-insensitive)
	outlookdotcom_lowercase: true,
	// Removes the subaddress (e.g. "+foo") from the email address
	outlookdotcom_remove_subaddress: true,

	// The following conversions are specific to Yahoo
	// Lowercases the local part of the Yahoo address (known to be case-insensitive)
	yahoo_lowercase: true,
	// Removes the subaddress (e.g. "-foo") from the email address
	yahoo_remove_subaddress: true,

	// The following conversions are specific to iCloud
	// Lowercases the local part of the iCloud address (known to be case-insensitive)
	icloud_lowercase: true,
	// Removes the subaddress (e.g. "+foo") from the email address
	icloud_remove_subaddress: true
};
// List of domains used by iCloud
var icloud_domains = ['icloud.com', 'me.com'];
// List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com'];
// List of domains used by Yahoo Mail
// This list is likely incomplete
var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com'];

/**
 * ================
 * GLOBAL FUNCTIONS
 * ================
 */

/**
 * Represents the Helprs Class.
 * @constructor
 * @param {Function} seed - Initial settings.
 */
function Helprs(seed) {
	if (!(this instanceof Helprs)) {
		return seed == null ? new Helprs() : new Helprs(seed);
	}
	// if user has provided a function, use that as the generator
	if (typeof seed === 'function') {
		this.random = seed;
		return this;
	}
	if (arguments.length) {
		// set a starting value of zero so we can add to it
		this.seed = 0;
	}
	// otherwise, leave this.seed blank so that MT will receive a blank
	for (var i = 0; i < arguments.length; i++) {
		var seedling = 0;
		if (Object.prototype.toString.call(arguments[i]) === '[object String]') {
			for (var j = 0; j < arguments[i].length; j++) {
				// create a numeric hash for each argument, add to seedling
				var hash = 0;
				for (var k = 0; k < arguments[i].length; k++) {
					hash = arguments[i].charCodeAt(k) + (hash << 6) + (hash << 16) - hash;
				}
				seedling += hash;
			}
		} else {
			seedling = arguments[i];
		}
		this.seed += (arguments.length - i) * seedling;
	}
	// If no generator function was provided, use our MT
	this.mt = this.mersenne_twister(this.seed);
	this.bimd5 = this.blueimp_md5();
	this.random = function() {
		return this.mt.random(this.seed);
	};
	return this;
}

function assertString(input) {
	if (typeof input !== 'string') {
		throw new TypeError('This input must be a string!');
	}
}

function merge() {
	var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var defaults = arguments[1];

	for (var key in defaults) {
		if (typeof obj[key] === 'undefined') {
			obj[key] = defaults[key];
		}
	}
	return obj;
}

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
	assertString(str);
	var min = void 0;
	var max = void 0;
	if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
		min = options.min || 0;
		max = options.max;
	} else {
		// backwards compatibility: isByteLength(str, min [, max])
		min = arguments[1];
		max = arguments[2];
	}
	var len = encodeURI(str).split(/%..|./).length - 1;
	return len >= min && (typeof max === 'undefined' || len <= max);
}

function isFDQN(str, options) {
	assertString(str);
	options = merge(options, default_fqdn_options);

	/* Remove the optional trailing dot before checking validity */
	if (options.allow_trailing_dot && str[str.length - 1] === '.') {
		str = str.substring(0, str.length - 1);
	}
	var parts = str.split('.');
	if (options.require_tld) {
		var tld = parts.pop();
		if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
			return false;
		}
	}
	for (var part, i = 0; i < parts.length; i++) {
		part = parts[i];
		if (options.allow_underscores) {
			part = part.replace(/_/g, '');
		}
		if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
			return false;
		}
		if (/[\uff01-\uff5e]/.test(part)) {
			// disallow full-width chars
			return false;
		}
		if (part[0] === '-' || part[part.length - 1] === '-') {
			return false;
		}
	}
	return true;
}

function toString(input) {
	if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input !== null) {
		if (typeof input.toString === 'function') {
			input = input.toString();
		} else {
			input = '[object Object]';
		}
	} else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
		input = '';
	}
	return String(input);
}

function isCreditCard(str) {
	assertString(str);
	var sanitized = str.replace(/[^0-9]+/g, '');
	if (!creditCard.test(sanitized)) {
		return false;
	}
	var sum = 0;
	var digit = void 0;
	var tmpNum = void 0;
	var shouldDouble = void 0;
	for (var i = sanitized.length - 1; i >= 0; i--) {
		digit = sanitized.substring(i, i + 1);
		tmpNum = parseInt(digit, 10);
		if (shouldDouble) {
			tmpNum *= 2;
			if (tmpNum >= 10) {
				sum += tmpNum % 10 + 1;
			} else {
				sum += tmpNum;
			}
		} else {
			sum += tmpNum;
		}
		shouldDouble = !shouldDouble;
	}
	return !!(sum % 10 === 0 ? sanitized : false);
}

/**
 * ======
 * BASICS
 * ======
 */

/**
 *  Return a random bool, either true or false
 *
 *  @param {Object} [options={ likelihood: 50 }] alter the likelihood of
 *    receiving a true or false value back.
 *  @throws {RangeError} if the likelihood is out of bounds
 *  @returns {Bool} either true or false
 */
Helprs.prototype.bool = function(options) {
	// likelihood of success (true)
	options = _rdm.initOptions(options, {
		likelihood: 50
	});

	// Note, we could get some minor perf optimizations by checking range
	// prior to initializing defaults, but that makes code a bit messier
	// and the check more complicated as we have to check existence of
	// the object then existence of the key before checking constraints.
	// Since the options initialization should be minor computationally,
	// decision made for code cleanliness intentionally. This is mentioned
	// here as it's the first occurrence, will not be mentioned again.
	_rdm.testRange(
		options.likelihood < 0 || options.likelihood > 100,
		"Helprs: Likelihood accepts values from 0 to 100."
	);

	return this.random() * 100 < options.likelihood;
};

/**
 *  Return a random character.
 *
 *  @param {Object} [options={}] can specify a character pool, only alpha,
 *    only symbols, and casing (lower or upper)
 *  @returns {String} a single random character
 *  @throws {RangeError} Can only specify alpha or symbols, not both
 */
Helprs.prototype.character = function(options) {
	options = _rdm.initOptions(options);
	_rdm.testRange(
		options.alpha && options.symbols,
		"Helprs: Cannot specify both alpha and symbols."
	);

	var symbols = "!@#$%^&*()[]",
		letters, pool;

	if (options.casing === 'lower') {
		letters = _data.CHARS_LOWER;
	} else if (options.casing === 'upper') {
		letters = _data.CHARS_UPPER;
	} else {
		letters = _data.CHARS_LOWER + _data.CHARS_UPPER;
	}

	if (options.pool) {
		pool = options.pool;
	} else if (options.alpha) {
		pool = letters;
	} else if (options.symbols) {
		pool = symbols;
	} else {
		pool = letters + _data.NUMBERS + symbols;
	}

	return pool.charAt(this.natural({
		max: (pool.length - 1)
	}));
};

/**
 * Return a random floating point number
 *
 * NOTE: fixed means N OR LESS digits after the decimal. This because
 * It could be 14.9000 but in JavaScript, when this is cast as a number,
 * the trailing zeroes are dropped. Left to the consumer if trailing zeroes are
 * needed
 *
 * @param 	{Object} 		[options={}] can specify a fixed precision, min, max
 * @returns {Number} 		a single floating point number
 * @throws 	{RangeError} 	Can only specify fixed or precision, not both. Also
 *          				min cannot be greater than max
 */
Helprs.prototype.floating = function(options) {
	options = _rdm.initOptions(options, {
		fixed: 4
	});
	_rdm.testRange(
		options.fixed && options.precision,
		"Helprs: Cannot specify both fixed and precision."
	);

	var num;
	var fixed = Math.pow(10, options.fixed);

	var max = _data.MAX_INT / fixed;
	var min = -max;

	_rdm.testRange(
		options.min && options.fixed && options.min < min,
		"Helprs: Min specified is out of range with fixed. Min should be, at least, " + min
	);
	_rdm.testRange(
		options.max && options.fixed && options.max > max,
		"Helprs: Max specified is out of range with fixed. Max should be, at most, " + max
	);

	options = _rdm.initOptions(options, {
		min: min,
		max: max
	});

	// Todo - Make this work!
	// options.precision = (typeof options.precision !== "undefined") ? options.precision : false;

	num = this.integer({
		min: options.min * fixed,
		max: options.max * fixed
	});
	var num_fixed = (num / fixed).toFixed(options.fixed);

	return parseFloat(num_fixed);
};

/**
 *  Return a random integer
 *
 *  NOTE: the max and min are INCLUDED in the range. So:
 *  Helprs.integer({min: 1, max: 3});
 *  would return either 1, 2, or 3.
 *
 *  @param {Object} [options={}] can specify a min and/or max
 *  @returns {Number} a single random integer number
 *  @throws {RangeError} min cannot be greater than max
 */
Helprs.prototype.integer = function(options) {
	// 9007199254740992 (2^53) is the max integer number in JavaScript
	// See: http://vq.io/132sa2j
	options = _rdm.initOptions(options, {
		min: _data.MIN_INT,
		max: _data.MAX_INT
	});
	_rdm.testRange(options.min > options.max, "Helprs: Min cannot be greater than Max.");

	return Math.floor(this.random() * (options.max - options.min + 1) + options.min);
};

/**
 *  Return a random natural
 *
 *  NOTE: the max and min are INCLUDED in the range. So:
 *  helprs.natural({min: 1, max: 3});
 *  would return either 1, 2, or 3.
 *
 *  @param {Object} [options={}] can specify a min and/or max
 *  @returns {Number} a single random integer number
 *  @throws {RangeError} min cannot be greater than max
 */
Helprs.prototype.natural = function(options) {
	options = _rdm.initOptions(options, {
		min: 0,
		max: _data.MAX_INT
	});
	_rdm.testRange(options.min < 0, "Helprs: Min cannot be less than zero.");
	return this.integer(options);
};

/**
 *  Return a random string
 *
 *  @param {Object} [options={}] can specify a length
 *  @returns {String} a string of random length
 *  @throws {RangeError} length cannot be less than zero
 */
Helprs.prototype.string = function(options) {
	options = _rdm.initOptions(options, {
		length: this.natural({
			min: 5,
			max: 20
		})
	});
	_rdm.testRange(options.length < 0, "Helprs: Length cannot be less than zero.");
	var length = options.length,
		text = this.n(this.character, length, options);

	return text.join("");
};

/**
 * Return a random decimal value
 *  Return the rounded decimal value
 *
 *  NOTE: the max and min are INCLUDED in the range. So:
 *  helprs.round({min: 1, max: 3});
 *  would return either 1, 2, or 3.
 *
 *  @param {Object} [options={}] can specify a min, max, fixed and/or val
 *  @returns {Number} a single random decimal
 *  @throws {RangeError} min cannot be greater than max
 */
Helprs.prototype.round = function(options) {
	options = _rdm.initOptions(options, {
		min: _data.MIN_INT,
		max: _data.MAX_INT,
		fixed: 2
	});

	_rdm.testRange(options.min > options.max, "Helprs: Min cannot be greater than Max.");

	if (!options.val)
		options.val = Math.floor(this.random() * (options.max - options.min + 1) + options.min);

	return parseFloat(Math.round(options.val * 100) / 100).toFixed(options.fixed);
};

/**
 * =======
 * HELPERS
 * =======
 */

Helprs.prototype.capitalize = function(word) {
	return word.charAt(0).toUpperCase() + word.substr(1);
};
Helprs.prototype.mixin = function(obj) {
	for (var func_name in obj) {
		Helprs.prototype[func_name] = obj[func_name];
	}
	return this;
};
/**
 *  Given a function that generates something random and a number of items to generate,
 *    return an array of items where none repeat.
 *
 *  @param {Function} fn the function that generates something random
 *  @param {Number} num number of terms to generate
 *  @param {Object} options any options to pass on to the generator function
 *  @returns {Array} an array of length `num` with every item generated by `fn` and unique
 *
 *  There can be more parameters after these. All additional parameters are provided to the given function
 */
Helprs.prototype.unique = function(fn, num, options) {
	_rdm.testRange(
		typeof fn !== "function",
		"Helprs: The first argument must be a function."
	);

	var comparator = function(arr, val) {
		return arr.indexOf(val) !== -1;
	};

	if (options) {
		comparator = options.comparator || comparator;
	}

	var arr = [],
		count = 0,
		result, MAX_DUPLICATES = num * 50,
		params = slice.call(arguments, 2);

	while (arr.length < num) {
		var clonedParams = JSON.parse(JSON.stringify(params));
		result = fn.apply(this, clonedParams);
		if (!comparator(arr, result)) {
			arr.push(result);
			// reset count when unique found
			count = 0;
		}

		if (++count > MAX_DUPLICATES) {
			throw new RangeError("Helprs: num is likely too large for sample set");
		}
	}
	return arr;
};
/**
 *  Gives an array of n random terms
 *
 *  @param {Function} fn the function that generates something random
 *  @param {Number} n number of terms to generate
 *  @returns {Array} an array of length `n` with items generated by `fn`
 *
 *  There can be more parameters after these. All additional parameters are provided to the given function
 */
Helprs.prototype.n = function(fn, n) {
	_rdm.testRange(
		typeof fn !== "function",
		"Helprs: The first argument must be a function."
	);

	if (typeof n === 'undefined') {
		n = 1;
	}
	var i = n,
		arr = [],
		params = slice.call(arguments, 2);

	// Providing a negative count should result in a noop.
	i = Math.max(0, i);

	for (null; i--; null) {
		arr.push(fn.apply(this, params));
	}

	return arr;
};
// H/T to SO for this one: http://vq.io/OtUrZ5
Helprs.prototype.pad = function(number, width, pad) {
	// Default pad to 0 if none provided
	pad = pad || '0';
	// Convert number to a string
	number = number + '';
	return number.length >= width ? number : new Array(width - number.length + 1).join(pad) + number;
};
// Given an array, returns a single random element
Helprs.prototype.pickone = function(arr) {
	if (arr.length === 0) {
		throw new RangeError("Helprs: Cannot pickone() from an empty array");
	}
	return arr[this.natural({
		max: arr.length - 1
	})];
};
// Given an array, returns a random set with 'count' elements
Helprs.prototype.pickset = function(arr, count) {
	if (count === 0) {
		return [];
	}
	if (arr.length === 0) {
		throw new RangeError("Helprs: Cannot pickset() from an empty array");
	}
	if (count < 0) {
		throw new RangeError("Helprs: count must be positive number");
	}
	if (!count || count === 1) {
		return [this.pickone(arr)];
	} else {
		return this.shuffle(arr).slice(0, count);
	}
};
Helprs.prototype.shuffle = function(arr) {
	var old_array = arr.slice(0),
		new_array = [],
		j = 0,
		length = Number(old_array.length);

	for (var i = 0; i < length; i++) {
		// Pick a random index from the array
		j = this.natural({
			max: old_array.length - 1
		});
		// Add it to the new array
		new_array[i] = old_array[j];
		// Remove that element from the original array
		old_array.splice(j, 1);
	}

	return new_array;
};
// Returns a single item from an array with relative weighting of odds
Helprs.prototype.weighted = function(arr, weights, trim) {
	if (arr.length !== weights.length) {
		throw new RangeError("Helprs: length of array and weights must match");
	}

	// scan weights array and sum valid entries
	var sum = 0;
	var val;
	for (var weightIndex = 0; weightIndex < weights.length; ++weightIndex) {
		val = weights[weightIndex];
		if (val > 0) {
			sum += val;
		}
	}

	if (sum === 0) {
		throw new RangeError("Helprs: no valid entries in array weights");
	}

	// select a value within range
	var selected = this.random() * sum;

	// find array entry corresponding to selected value
	var total = 0;
	var lastGoodIdx = -1;
	var chosenIdx;
	for (weightIndex = 0; weightIndex < weights.length; ++weightIndex) {
		val = weights[weightIndex];
		total += val;
		if (val > 0) {
			if (selected <= total) {
				chosenIdx = weightIndex;
				break;
			}
			lastGoodIdx = weightIndex;
		}

		// handle any possible rounding error comparison to ensure something is picked
		if (weightIndex === (weights.length - 1)) {
			chosenIdx = lastGoodIdx;
		}
	}

	var chosen = arr[chosenIdx];
	trim = (typeof trim === 'undefined') ? false : trim;
	if (trim) {
		arr.splice(chosenIdx, 1);
		weights.splice(chosenIdx, 1);
	}

	return chosen;
};
/**
 * @param   {Array|Object}  collection  Accepts both arrays and objects.
 * @param   {Function}  	iterator    Call iterator(value, key, collection) for each element of collection.
 *
 * Note: _.each does not have a return value, but rather simply runs the
 * iterator function over each item in the input collection.
 */
Helprs.prototype.each = function(collection, iterator) {
	_rdm.each(collection, iterator);
};
/**
 * Extend a given object with all the properties of the passed in object(s).
 *
 * @example <caption>Example:</caption>
 * var obj1 = {key1: "something"};
 * 	_.extend(obj1, {
 *     	key2: "something new",
 *      key3: "something else new"
 *  }, {
 * 		bla: "even more stuff"
 * 	}); // obj1 now contains key1, key2, key3 and bla
 */
Helprs.prototype.extend = function(obj) {
	return _rdm.extend(obj);
};
/**
 * Creates a error object extended with custom properties
 * @param {String} message - the error message
 * @param {Object} properties - custom properties to assign to the error
 * @returns {Object} err
 */
Helprs.prototype.err = function(message, properties) {
	var err;

	if (!message) {
		throw new Error('message argument missing');
	}

	err = new Error(message);
	properties = properties || {};

	Object.keys(properties).forEach(function(name) {
		err[name] = properties[name];
	});

	return err;
};

/**
 * ====
 * TEXT
 * ====
 */

Helprs.prototype.paragraph = function(options) {
	options = _rdm.initOptions(options);

	var sentences = options.sentences || this.natural({
			min: 3,
			max: 7
		}),
		sentence_array = this.n(this.sentence, sentences);

	return sentence_array.join(' ');
};

// Could get smarter about this than generating random words and
// chaining them together. Such as: http://vq.io/1a5ceOh
Helprs.prototype.sentence = function(options) {
	options = _rdm.initOptions(options);

	var words = options.words || this.natural({
			min: 12,
			max: 18
		}),
		punctuation = options.punctuation,
		text, word_array = this.n(this.word, words);

	text = word_array.join(' ');

	// Capitalize first letter of sentence
	text = this.capitalize(text);

	// Make sure punctuation has a usable value
	if (punctuation !== false && !/^[\.\?;!:]$/.test(punctuation)) {
		punctuation = '.';
	}

	// Add punctuation mark
	if (punctuation) {
		text += punctuation;
	}

	return text;
};

Helprs.prototype.syllable = function(options) {
	options = _rdm.initOptions(options);

	var length = options.length || this.natural({
			min: 2,
			max: 3
		}),
		consonants = 'bcdfghjklmnprstvwz', // consonants except hard to speak ones
		vowels = 'aeiou', // vowels
		all = consonants + vowels, // all
		text = '',
		chr;

	// I'm sure there's a more elegant way to do this, but this works
	// decently well.
	for (var i = 0; i < length; i++) {
		if (i === 0) {
			// First character can be anything
			chr = this.character({
				pool: all
			});
		} else if (consonants.indexOf(chr) === -1) {
			// Last character was a vowel, now we want a consonant
			chr = this.character({
				pool: consonants
			});
		} else {
			// Last character was a consonant, now we want a vowel
			chr = this.character({
				pool: vowels
			});
		}

		text += chr;
	}

	if (options.capitalize) {
		text = this.capitalize(text);
	}

	return text;
};

Helprs.prototype.word = function(options) {
	options = _rdm.initOptions(options);

	_rdm.testRange(
		options.syllables && options.length,
		"Helprs: Cannot specify both syllables AND length."
	);

	var syllables = options.syllables || this.natural({
			min: 1,
			max: 3
		}),
		text = '';

	if (options.length) {
		// Either bound word by length
		do {
			text += this.syllable();
		} while (text.length < options.length);
		text = text.substring(0, options.length);
	} else {
		// Or by number of syllables
		for (var i = 0; i < syllables; i++) {
			text += this.syllable();
		}
	}

	if (options.capitalize) {
		text = this.capitalize(text);
	}

	return text;
};

Helprs.prototype.contains = function(str, elem) {
	assertString(str);
	return str.indexOf(toString(elem)) >= 0;
};

/**
 * ======
 * PERSON
 * ======
 */

Helprs.prototype.age = function(options) {
	options = _rdm.initOptions(options);
	var ageRange;

	switch (options.type) {
		case 'child':
			ageRange = {
				min: 0,
				max: 12
			};
			break;
		case 'teen':
			ageRange = {
				min: 13,
				max: 19
			};
			break;
		case 'adult':
			ageRange = {
				min: 18,
				max: 65
			};
			break;
		case 'senior':
			ageRange = {
				min: 65,
				max: 100
			};
			break;
		case 'all':
			ageRange = {
				min: 0,
				max: 100
			};
			break;
		default:
			ageRange = {
				min: 18,
				max: 65
			};
			break;
	}

	return this.natural(ageRange);
};

Helprs.prototype.birthday = function(options) {
	var age = this.age(options);
	var currentYear = new Date().getFullYear();

	if (options && options.type) {
		var min = new Date();
		var max = new Date();
		min.setFullYear(currentYear - age - 1);
		max.setFullYear(currentYear - age);

		options = _rdm.initOptions(options, {
			min: min,
			max: max
		});
	} else {
		options = _rdm.initOptions(options, {
			year: currentYear - age
		});
	}

	return this.date(options);
};

// CPF; ID to identify taxpayers in Brazil
Helprs.prototype.cpf = function(options) {
	options = _rdm.initOptions(options, {
		formatted: true
	});

	var n = this.n(this.natural, 9, {
		max: 9
	});
	var d1 = n[8] * 2 + n[7] * 3 + n[6] * 4 + n[5] * 5 + n[4] * 6 + n[3] * 7 + n[2] * 8 + n[1] * 9 + n[0] * 10;
	d1 = 11 - (d1 % 11);
	if (d1 >= 10) {
		d1 = 0;
	}
	var d2 = d1 * 2 + n[8] * 3 + n[7] * 4 + n[6] * 5 + n[5] * 6 + n[4] * 7 + n[3] * 8 + n[2] * 9 + n[1] * 10 + n[0] * 11;
	d2 = 11 - (d2 % 11);
	if (d2 >= 10) {
		d2 = 0;
	}
	var cpf = '' + n[0] + n[1] + n[2] + '.' + n[3] + n[4] + n[5] + '.' + n[6] + n[7] + n[8] + '-' + d1 + d2;
	return options.formatted ? cpf : cpf.replace(/\D/g, '');
};

// CNPJ: ID to identify companies in Brazil
Helprs.prototype.cnpj = function(options) {
	options = _rdm.initOptions(options, {
		formatted: true
	});

	var n = this.n(this.natural, 12, {
		max: 12
	});
	var d1 = n[11] * 2 + n[10] * 3 + n[9] * 4 + n[8] * 5 + n[7] * 6 + n[6] * 7 + n[5] * 8 + n[4] * 9 + n[3] * 2 + n[2] * 3 + n[1] * 4 + n[0] * 5;
	d1 = 11 - (d1 % 11);
	if (d1 < 2) {
		d1 = 0;
	}
	var d2 = d1 * 2 + n[11] * 3 + n[10] * 4 + n[9] * 5 + n[8] * 6 + n[7] * 7 + n[6] * 8 + n[5] * 9 + n[4] * 2 + n[3] * 3 + n[2] * 4 + n[1] * 5 + n[0] * 6;
	d2 = 11 - (d2 % 11);
	if (d2 < 2) {
		d2 = 0;
	}
	var cnpj = '' + n[0] + n[1] + '.' + n[2] + n[3] + n[4] + '.' + n[5] + n[6] + n[7] + '/' + n[8] + n[9] + n[10] + n[11] + '-' + d1 + d2;
	return options.formatted ? cnpj : cnpj.replace(/\D/g, '');
};

Helprs.prototype.first = function(options) {
	options = _rdm.initOptions(options, {
		gender: this.gender(),
		nationality: 'en'
	});
	return this.pick(this.get("firstNames")[options.gender.toLowerCase()][options.nationality.toLowerCase()]);
};

Helprs.prototype.gender = function(options) {
	options = _rdm.initOptions(options, {
		extraGenders: []
	});
	return this.pick(['Male', 'Female'].concat(options.extraGenders));
};

Helprs.prototype.last = function(options) {
	options = _rdm.initOptions(options, {
		nationality: 'en'
	});
	return this.pick(this.get("lastNames")[options.nationality.toLowerCase()]);
};

Helprs.prototype.israelId = function() {
	var x = this.string({
		pool: '0123456789',
		length: 8
	});
	var y = 0;
	for (var i = 0; i < x.length; i++) {
		var thisDigit = x[i] * (i / 2 === parseInt(i / 2) ? 1 : 2);
		thisDigit = this.pad(thisDigit, 2).toString();
		thisDigit = parseInt(thisDigit[0]) + parseInt(thisDigit[1]);
		y = y + thisDigit;
	}
	x = x + (10 - parseInt(y.toString().slice(-1))).toString().slice(-1);
	return x;
};

Helprs.prototype.mrz = function(options) {
	var checkDigit = function(input) {
		var alpha = "<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(''),
			multipliers = [7, 3, 1],
			runningTotal = 0;

		if (typeof input !== 'string') {
			input = input.toString();
		}

		input.split('').forEach(function(character, idx) {
			var pos = alpha.indexOf(character);

			if (pos !== -1) {
				character = pos === 0 ? 0 : pos + 9;
			} else {
				character = parseInt(character, 10);
			}
			character *= multipliers[idx % multipliers.length];
			runningTotal += character;
		});
		return runningTotal % 10;
	};
	var generate = function(opts) {
		var pad = function(length) {
			return new Array(length + 1).join('<');
		};
		var number = ['P<',
			opts.issuer,
			opts.last.toUpperCase(),
			'<<',
			opts.first.toUpperCase(),
			pad(39 - (opts.last.length + opts.first.length + 2)),
			opts.passportNumber,
			checkDigit(opts.passportNumber),
			opts.nationality,
			opts.dob,
			checkDigit(opts.dob),
			opts.gender,
			opts.expiry,
			checkDigit(opts.expiry),
			pad(14),
			checkDigit(pad(14))
		].join('');

		return number +
			(checkDigit(number.substr(44, 10) +
				number.substr(57, 7) +
				number.substr(65, 7)));
	};

	var that = this;

	options = _rdm.initOptions(options, {
		first: this.first(),
		last: this.last(),
		passportNumber: this.integer({
			min: 100000000,
			max: 999999999
		}),
		dob: (function() {
			var date = that.birthday({
				type: 'adult'
			});
			return [date.getFullYear().toString().substr(2),
				that.pad(date.getMonth() + 1, 2),
				that.pad(date.getDate(), 2)
			].join('');
		}()),
		expiry: (function() {
			var date = new Date();
			return [(date.getFullYear() + 5).toString().substr(2),
				that.pad(date.getMonth() + 1, 2),
				that.pad(date.getDate(), 2)
			].join('');
		}()),
		gender: this.gender() === 'Female' ? 'F' : 'M',
		issuer: 'GBR',
		nationality: 'GBR'
	});
	return generate(options);
};

Helprs.prototype.name = function(options) {
	options = _rdm.initOptions(options);

	var first = this.first(options),
		last = this.last(options),
		name;

	if (options.middle) {
		name = first + ' ' + this.first(options) + ' ' + last;
	} else if (options.middle_initial) {
		name = first + ' ' + this.character({
			alpha: true,
			casing: 'upper'
		}) + '. ' + last;
	} else {
		name = first + ' ' + last;
	}

	if (options.prefix) {
		name = this.prefix(options) + ' ' + name;
	}

	if (options.suffix) {
		name = name + ' ' + this.suffix(options);
	}

	return name;
};

// Return the list of available name prefixes based on supplied gender.
// @todo introduce internationalization
Helprs.prototype.name_prefixes = function(gender) {
	gender = gender || "all";
	gender = gender.toLowerCase();

	var prefixes = [{
		name: 'Doctor',
		abbreviation: 'Dr.'
	}];

	if (gender === "male" || gender === "all") {
		prefixes.push({
			name: 'Mister',
			abbreviation: 'Mr.'
		});
	}

	if (gender === "female" || gender === "all") {
		prefixes.push({
			name: 'Miss',
			abbreviation: 'Miss'
		});
		prefixes.push({
			name: 'Misses',
			abbreviation: 'Mrs.'
		});
	}

	return prefixes;
};

// Alias for name_prefix
Helprs.prototype.prefix = function(options) {
	return this.name_prefix(options);
};

Helprs.prototype.name_prefix = function(options) {
	options = _rdm.initOptions(options, {
		gender: "all"
	});
	return options.full ?
		this.pick(this.name_prefixes(options.gender)).name :
		this.pick(this.name_prefixes(options.gender)).abbreviation;
};
//Hungarian ID number
Helprs.prototype.HIDN = function() {
	//Hungarian ID nuber structure: XXXXXXYY (X=number,Y=Capital Latin letter)
	var idn_pool = "0123456789";
	var idn_chrs = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ";
	var idn = "";
	idn += this.string({
		pool: idn_pool,
		length: 6
	});
	idn += this.string({
		pool: idn_chrs,
		length: 2
	});
	return idn;
};


Helprs.prototype.ssn = function(options) {
	options = _rdm.initOptions(options, {
		ssnFour: false,
		dashes: true
	});
	var ssn_pool = "1234567890",
		ssn,
		dash = options.dashes ? '-' : '';

	if (!options.ssnFour) {
		ssn = this.string({
				pool: ssn_pool,
				length: 3
			}) + dash +
			this.string({
				pool: ssn_pool,
				length: 2
			}) + dash +
			this.string({
				pool: ssn_pool,
				length: 4
			});
	} else {
		ssn = this.string({
			pool: ssn_pool,
			length: 4
		});
	}
	return ssn;
};

// Return the list of available name suffixes
// @todo introduce internationalization
Helprs.prototype.name_suffixes = function() {
	var suffixes = [{
		name: 'Doctor of Osteopathic Medicine',
		abbreviation: 'D.O.'
	}, {
		name: 'Doctor of Philosophy',
		abbreviation: 'Ph.D.'
	}, {
		name: 'Esquire',
		abbreviation: 'Esq.'
	}, {
		name: 'Junior',
		abbreviation: 'Jr.'
	}, {
		name: 'Juris Doctor',
		abbreviation: 'J.D.'
	}, {
		name: 'Master of Arts',
		abbreviation: 'M.A.'
	}, {
		name: 'Master of Business Administration',
		abbreviation: 'M.B.A.'
	}, {
		name: 'Master of Science',
		abbreviation: 'M.S.'
	}, {
		name: 'Medical Doctor',
		abbreviation: 'M.D.'
	}, {
		name: 'Senior',
		abbreviation: 'Sr.'
	}, {
		name: 'The Third',
		abbreviation: 'III'
	}, {
		name: 'The Fourth',
		abbreviation: 'IV'
	}, {
		name: 'Bachelor of Engineering',
		abbreviation: 'B.E'
	}, {
		name: 'Bachelor of Technology',
		abbreviation: 'B.TECH'
	}];
	return suffixes;
};

// Alias for name_suffix
Helprs.prototype.suffix = function(options) {
	return this.name_suffix(options);
};

Helprs.prototype.name_suffix = function(options) {
	options = _rdm.initOptions(options);
	return options.full ?
		this.pick(this.name_suffixes()).name :
		this.pick(this.name_suffixes()).abbreviation;
};

Helprs.prototype.nationalities = function() {
	return this.get("nationalities");
};

// Generate random nationality based on json list
Helprs.prototype.nationality = function() {
	var nationality = this.pick(this.nationalities());
	return nationality.name;
};

/**
 * ======
 * MOBILE
 * ======
 */

// Android GCM Registration ID
Helprs.prototype.android_id = function() {
	return "APA91" + this.string({
		pool: "0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",
		length: 178
	});
};

// Apple Push Token
Helprs.prototype.apple_token = function() {
	return this.string({
		pool: "abcdef1234567890",
		length: 64
	});
};

// Windows Phone 8 ANID2
Helprs.prototype.wp8_anid2 = function() {
	return _rdm.base64(this.hash({
		length: 32
	}));
};

// Windows Phone 7 ANID
Helprs.prototype.wp7_anid = function() {
	return 'A=' + this.guid().replace(/-/g, '').toUpperCase() + '&E=' + this.hash({
		length: 3
	}) + '&W=' + this.integer({
		min: 0,
		max: 9
	});
};

// BlackBerry Device PIN
Helprs.prototype.bb_pin = function() {
	return this.hash({
		length: 8
	});
};

/**
 * ===
 * WEB
 * ===
 */

Helprs.prototype.avatar = function(options) {
	var url = null;
	var URL_BASE = '//www.gravatar.com/avatar/';
	var PROTOCOLS = {
		http: 'http',
		https: 'https'
	};
	var FILE_TYPES = {
		bmp: 'bmp',
		gif: 'gif',
		jpg: 'jpg',
		png: 'png'
	};
	var FALLBACKS = {
		'404': '404', // Return 404 if not found
		mm: 'mm', // Mystery man
		identicon: 'identicon', // Geometric pattern based on hash
		monsterid: 'monsterid', // A generated monster icon
		wavatar: 'wavatar', // A generated face
		retro: 'retro', // 8-bit icon
		blank: 'blank' // A transparent png
	};
	var RATINGS = {
		g: 'g',
		pg: 'pg',
		r: 'r',
		x: 'x'
	};
	var opts = {
		protocol: null,
		email: null,
		fileExtension: null,
		size: null,
		fallback: null,
		rating: null
	};

	if (!options) {
		// Set to a random email
		opts.email = this.email();
		options = {};
	} else if (typeof options === 'string') {
		opts.email = options;
		options = {};
	} else if (typeof options !== 'object') {
		return null;
	} else if (options.constructor === 'Array') {
		return null;
	}

	opts = _rdm.initOptions(options, opts);

	if (!opts.email) {
		// Set to a random email
		opts.email = this.email();
	}

	// Safe checking for params
	opts.protocol = PROTOCOLS[opts.protocol] ? opts.protocol + ':' : '';
	opts.size = parseInt(opts.size, 0) ? opts.size : '';
	opts.rating = RATINGS[opts.rating] ? opts.rating : '';
	opts.fallback = FALLBACKS[opts.fallback] ? opts.fallback : '';
	opts.fileExtension = FILE_TYPES[opts.fileExtension] ? opts.fileExtension : '';

	url =
		opts.protocol +
		URL_BASE +
		this.bimd5.md5(opts.email) +
		(opts.fileExtension ? '.' + opts.fileExtension : '') +
		(opts.size || opts.rating || opts.fallback ? '?' : '') +
		(opts.size ? '&s=' + opts.size.toString() : '') +
		(opts.rating ? '&r=' + opts.rating : '') +
		(opts.fallback ? '&d=' + opts.fallback : '');

	return url;
};

/**
 * #Description:
 * ===============================================
 * Generate random color value base on color type:
 * -> hex
 * -> rgb
 * -> rgba
 * -> 0x
 * -> named color
 *
 * #Examples:
 * ===============================================
 * * Geerate random hex color
 * helprs.color() => '#79c157' / 'rgb(110,52,164)' / '0x67ae0b' / '#e2e2e2' / '#29CFA7'
 *
 * * Generate Hex based color value
 * helprs.color({format: 'hex'})    => '#d67118'
 *
 * * Generate simple rgb value
 * helprs.color({format: 'rgb'})    => 'rgb(110,52,164)'
 *
 * * Generate Ox based color value
 * helprs.color({format: '0x'})     => '0x67ae0b'
 *
 * * Generate graiscale based value
 * helprs.color({grayscale: true})  => '#e2e2e2'
 *
 * * Return valide color name
 * helprs.color({format: 'name'})   => 'red'
 *
 * * Make color uppercase
 * helprs.color({casing: 'upper'})  => '#29CFA7'
 *
 * @param  [object] options
 * @return [string] color value
 */
Helprs.prototype.color = function(options) {

	function gray(value, delimiter) {
		return [value, value, value].join(delimiter || '');
	}

	function rgb(hasAlpha) {

		var rgbValue = (hasAlpha) ? 'rgba' : 'rgb';
		var alphaChanal = (hasAlpha) ? (',' + this.floating({
			min: 0,
			max: 1
		})) : "";
		var colorValue = (isGrayscale) ? (gray(this.natural({
			max: 255
		}), ',')) : (this.natural({
			max: 255
		}) + ',' + this.natural({
			max: 255
		}) + ',' + this.natural({
			max: 255
		}));

		return rgbValue + '(' + colorValue + alphaChanal + ')';
	}

	function hex(start, end, withHash) {

		var simbol = (withHash) ? "#" : "";
		var expression = (isGrayscale ? gray(this.hash({
			length: start
		})) : this.hash({
			length: end
		}));
		return simbol + expression;
	}

	options = _rdm.initOptions(options, {
		format: this.pick(['hex', 'shorthex', 'rgb', 'rgba', '0x', 'name']),
		grayscale: false,
		casing: 'lower'
	});

	var isGrayscale = options.grayscale;
	var colorValue;

	if (options.format === 'hex') {
		colorValue = hex.call(this, 2, 6, true);
	} else if (options.format === 'shorthex') {
		colorValue = hex.call(this, 1, 3, true);
	} else if (options.format === 'rgb') {
		colorValue = rgb.call(this, false);
	} else if (options.format === 'rgba') {
		colorValue = rgb.call(this, true);
	} else if (options.format === '0x') {
		colorValue = '0x' + hex.call(this, 2, 6);
	} else if (options.format === 'name') {
		return this.pick(this.get("colorNames"));
	} else {
		throw new RangeError('Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".');
	}

	if (options.casing === 'upper') {
		colorValue = colorValue.toUpperCase();
	}

	return colorValue;
};

Helprs.prototype.domain = function(options) {
	options = _rdm.initOptions(options);
	return this.word() + '.' + (options.tld || this.tld());
};

Helprs.prototype.email = function(options) {
	options = _rdm.initOptions(options);
	return this.word({
		length: options.length
	}) + '@' + (options.domain || this.domain());
};

Helprs.prototype.fbid = function() {
	return parseInt('10000' + this.natural({
		max: 100000000000
	}), 10);
};

Helprs.prototype.google_analytics = function() {
	var account = this.pad(this.natural({
		max: 999999
	}), 6);
	var property = this.pad(this.natural({
		max: 99
	}), 2);

	return 'UA-' + account + '-' + property;
};

Helprs.prototype.hashtag = function() {
	return '#' + this.word();
};

Helprs.prototype.ip = function() {
	// Todo: This could return some reserved IPs. See http://vq.io/137dgYy
	// this should probably be updated to account for that rare as it may be
	return this.natural({
			min: 1,
			max: 254
		}) + '.' +
		this.natural({
			max: 255
		}) + '.' +
		this.natural({
			max: 255
		}) + '.' +
		this.natural({
			min: 1,
			max: 254
		});
};

Helprs.prototype.ipv6 = function() {
	var ip_addr = this.n(this.hash, 8, {
		length: 4
	});

	return ip_addr.join(":");
};

Helprs.prototype.klout = function() {
	return this.natural({
		min: 1,
		max: 99
	});
};

Helprs.prototype.semver = function(options) {
	options = _rdm.initOptions(options, {
		include_prerelease: true
	});

	var range = this.pickone(["^", "~", "<", ">", "<=", ">=", "="]);
	if (options.range) {
		range = options.range;
	}

	var prerelease = "";
	if (options.include_prerelease) {
		prerelease = this.weighted(["", "-dev", "-beta", "-alpha"], [50, 10, 5, 1]);
	}
	return range + this.rpg('3d10').join('.') + prerelease;
};

Helprs.prototype.tlds = function() {
	return ['com', 'org', 'edu', 'gov', 'co.uk', 'net', 'io', 'ac', 'ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'an', 'ao', 'aq', 'ar', 'as', 'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt', 'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cu', 'cv', 'cw', 'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'eh', 'er', 'es', 'et', 'eu', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'ga', 'gb', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie', 'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly', 'ma', 'mc', 'md', 'me', 'mg', 'mh', 'mk', 'ml', 'mm', 'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np', 'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'su', 'sv', 'sx', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tp', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'uk', 'us', 'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws', 'ye', 'yt', 'za', 'zm', 'zw'];
};

Helprs.prototype.tld = function() {
	return this.pick(this.tlds());
};

Helprs.prototype.twitter = function() {
	return '@' + this.word();
};

Helprs.prototype.url = function(options) {
	options = _rdm.initOptions(options, {
		protocol: "http",
		domain: this.domain(options),
		domain_prefix: "",
		path: this.word(),
		extensions: []
	});

	var extension = options.extensions.length > 0 ? "." + this.pick(options.extensions) : "";
	var domain = options.domain_prefix ? options.domain_prefix + "." + options.domain : options.domain;

	return options.protocol + "://" + domain + "/" + options.path + extension;
};

/**
 * ========
 * LOCATION
 * ========
 */

Helprs.prototype.address = function(options) {
	options = _rdm.initOptions(options);
	return this.natural({
		min: 5,
		max: 2000
	}) + ' ' + this.street(options);
};

Helprs.prototype.altitude = function(options) {
	options = _rdm.initOptions(options, {
		fixed: 5,
		min: 0,
		max: 8848
	});
	return this.floating({
		min: options.min,
		max: options.max,
		fixed: options.fixed
	});
};

Helprs.prototype.areacode = function(options) {
	options = _rdm.initOptions(options, {
		parens: true
	});
	// Don't want area codes to start with 1, or have a 9 as the second digit
	var areacode = this.natural({
			min: 2,
			max: 9
		}).toString() +
		this.natural({
			min: 0,
			max: 8
		}).toString() +
		this.natural({
			min: 0,
			max: 9
		}).toString();

	return options.parens ? '(' + areacode + ')' : areacode;
};

Helprs.prototype.city = function() {
	return this.capitalize(this.word({
		syllables: 3
	}));
};

Helprs.prototype.coordinates = function(options) {
	return this.latitude(options) + ', ' + this.longitude(options);
};

Helprs.prototype.countries = function(options) {
	if (options && options.arrayOfISO3)
		return this.get("countriesISO3");
	return this.get("countries");
};

Helprs.prototype.country = function(options) {
	options = _rdm.initOptions(options);
	var country = this.pick(this.countries());
	return options.full ? country.name : country.abbreviation;
};

Helprs.prototype.depth = function(options) {
	options = _rdm.initOptions(options, {
		fixed: 5,
		min: -10994,
		max: 0
	});
	return this.floating({
		min: options.min,
		max: options.max,
		fixed: options.fixed
	});
};

Helprs.prototype.geohash = function(options) {
	options = _rdm.initOptions(options, {
		length: 7
	});
	return this.string({
		length: options.length,
		pool: '0123456789bcdefghjkmnpqrstuvwxyz'
	});
};

Helprs.prototype.geojson = function(options) {
	return this.latitude(options) + ', ' + this.longitude(options) + ', ' + this.altitude(options);
};

Helprs.prototype.latitude = function(options) {
	options = _rdm.initOptions(options, {
		fixed: 5,
		min: -90,
		max: 90
	});
	return this.floating({
		min: options.min,
		max: options.max,
		fixed: options.fixed
	});
};

Helprs.prototype.longitude = function(options) {
	options = _rdm.initOptions(options, {
		fixed: 5,
		min: -180,
		max: 180
	});
	return this.floating({
		min: options.min,
		max: options.max,
		fixed: options.fixed
	});
};

Helprs.prototype.phone = function(options) {
	var self = this,
		numPick,
		ukNum = function(parts) {
			var section = [];
			//fills the section part of the phone number with random numbers.
			parts.sections.forEach(function(n) {
				section.push(self.string({
					pool: '0123456789',
					length: n
				}));
			});
			return parts.area + section.join(' ');
		};
	options = _rdm.initOptions(options, {
		formatted: true,
		country: 'us',
		mobile: false
	});
	if (!options.formatted) {
		options.parens = false;
	}
	var phone;
	switch (options.country) {
		case 'fr':
			if (!options.mobile) {
				numPick = this.pick([
					// Valid zone and département codes.
					'01' + this.pick(['30', '34', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '53', '55', '56', '58', '60', '64', '69', '70', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83']) + self.string({
						pool: '0123456789',
						length: 6
					}),
					'02' + this.pick(['14', '18', '22', '23', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '40', '41', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '56', '57', '61', '62', '69', '72', '76', '77', '78', '85', '90', '96', '97', '98', '99']) + self.string({
						pool: '0123456789',
						length: 6
					}),
					'03' + this.pick(['10', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '39', '44', '45', '51', '52', '54', '55', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90']) + self.string({
						pool: '0123456789',
						length: 6
					}),
					'04' + this.pick(['11', '13', '15', '20', '22', '26', '27', '30', '32', '34', '37', '42', '43', '44', '50', '56', '57', '63', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '88', '89', '90', '91', '92', '93', '94', '95', '97', '98']) + self.string({
						pool: '0123456789',
						length: 6
					}),
					'05' + this.pick(['08', '16', '17', '19', '24', '31', '32', '33', '34', '35', '40', '45', '46', '47', '49', '53', '55', '56', '57', '58', '59', '61', '62', '63', '64', '65', '67', '79', '81', '82', '86', '87', '90', '94']) + self.string({
						pool: '0123456789',
						length: 6
					}),
					'09' + self.string({
						pool: '0123456789',
						length: 8
					}),
				]);
				phone = options.formatted ? numPick.match(/../g).join(' ') : numPick;
			} else {
				numPick = this.pick(['06', '07']) + self.string({
					pool: '0123456789',
					length: 8
				});
				phone = options.formatted ? numPick.match(/../g).join(' ') : numPick;
			}
			break;
		case 'uk':
			if (!options.mobile) {
				numPick = this.pick([
					//valid area codes of major cities/counties followed by random numbers in required format.
					{
						area: '01' + this.character({
							pool: '234569'
						}) + '1 ',
						sections: [3, 4]
					}, {
						area: '020 ' + this.character({
							pool: '378'
						}),
						sections: [3, 4]
					}, {
						area: '023 ' + this.character({
							pool: '89'
						}),
						sections: [3, 4]
					}, {
						area: '024 7',
						sections: [3, 4]
					}, {
						area: '028 ' + this.pick(['25', '28', '37', '71', '82', '90', '92', '95']),
						sections: [2, 4]
					}, {
						area: '012' + this.pick(['04', '08', '54', '76', '97', '98']) + ' ',
						sections: [6]
					}, {
						area: '013' + this.pick(['63', '64', '84', '86']) + ' ',
						sections: [6]
					}, {
						area: '014' + this.pick(['04', '20', '60', '61', '80', '88']) + ' ',
						sections: [6]
					}, {
						area: '015' + this.pick(['24', '27', '62', '66']) + ' ',
						sections: [6]
					}, {
						area: '016' + this.pick(['06', '29', '35', '47', '59', '95']) + ' ',
						sections: [6]
					}, {
						area: '017' + this.pick(['26', '44', '50', '68']) + ' ',
						sections: [6]
					}, {
						area: '018' + this.pick(['27', '37', '84', '97']) + ' ',
						sections: [6]
					}, {
						area: '019' + this.pick(['00', '05', '35', '46', '49', '63', '95']) + ' ',
						sections: [6]
					}
				]);
				phone = options.formatted ? ukNum(numPick) : ukNum(numPick).replace(' ', '', 'g');
			} else {
				numPick = this.pick([{
					area: '07' + this.pick(['4', '5', '7', '8', '9']),
					sections: [2, 6]
				}, {
					area: '07624 ',
					sections: [6]
				}]);
				phone = options.formatted ? ukNum(numPick) : ukNum(numPick).replace(' ', '');
			}
			break;
		case 'us':
			var areacode = this.areacode(options).toString();
			var exchange = this.natural({
					min: 2,
					max: 9
				}).toString() +
				this.natural({
					min: 0,
					max: 9
				}).toString() +
				this.natural({
					min: 0,
					max: 9
				}).toString();
			var subscriber = this.natural({
				min: 1000,
				max: 9999
			}).toString(); // this could be random [0-9]{4}
			phone = options.formatted ? areacode + ' ' + exchange + '-' + subscriber : areacode + exchange + subscriber;
	}
	return phone;
};

Helprs.prototype.postal = function() {
	// Postal District
	var pd = this.character({
		pool: "XVTSRPNKLMHJGECBA"
	});
	// Forward Sortation Area (FSA)
	var fsa = pd + this.natural({
		max: 9
	}) + this.character({
		alpha: true,
		casing: "upper"
	});
	// Local Delivery Unut (LDU)
	var ldu = this.natural({
		max: 9
	}) + this.character({
		alpha: true,
		casing: "upper"
	}) + this.natural({
		max: 9
	});

	return fsa + " " + ldu;
};

Helprs.prototype.counties = function(options) {
	options = _rdm.initOptions(options, {
		country: 'uk'
	});
	return this.get("counties")[options.country.toLowerCase()];
};

Helprs.prototype.county = function(options) {
	return this.pick(this.counties(options)).name;
};

Helprs.prototype.provinces = function(options) {
	options = _rdm.initOptions(options, {
		country: 'ca'
	});
	return this.get("provinces")[options.country.toLowerCase()];
};

Helprs.prototype.province = function(options) {
	return (options && options.full) ?
		this.pick(this.provinces(options)).name :
		this.pick(this.provinces(options)).abbreviation;
};

Helprs.prototype.state = function(options) {
	return (options && options.full) ?
		this.pick(this.states(options)).name :
		this.pick(this.states(options)).abbreviation;
};

Helprs.prototype.states = function(options) {
	options = _rdm.initOptions(options, {
		country: 'us',
		usStatesAndDC: true
	});

	var states;

	switch (options.country.toLowerCase()) {
		case 'us':
			var usStatesAndDC = this.get("usStatesAndDC"),
				territories = this.get("territories"),
				armed_forces = this.get("armed_forces");

			states = [];

			if (options.usStatesAndDC) {
				states = states.concat(usStatesAndDC);
			}
			if (options.territories) {
				states = states.concat(territories);
			}
			if (options.armed_forces) {
				states = states.concat(armed_forces);
			}
			break;
		case 'it':
			states = this.get("country_regions")[options.country.toLowerCase()];
			break;
		case 'uk':
			states = this.get("counties")[options.country.toLowerCase()];
			break;
		case 'ca':
			states = this.get("provinces")[options.country.toLowerCase()];
			break;
		case 'can':
			states = this.get("canadianProvinces");
			break;
	}

	return states;
};

Helprs.prototype.street = function(options) {
	options = _rdm.initOptions(options, {
		country: 'us',
		syllables: 2
	});
	var street;

	switch (options.country.toLowerCase()) {
		case 'us':
			street = this.word({
				syllables: options.syllables
			});
			street = this.capitalize(street);
			street += ' ';
			street += options.short_suffix ?
				this.street_suffix(options).abbreviation :
				this.street_suffix(options).name;
			break;
		case 'it':
			street = this.word({
				syllables: options.syllables
			});
			street = this.capitalize(street);
			street = (options.short_suffix ?
				this.street_suffix(options).abbreviation :
				this.street_suffix(options).name) + " " + street;
			break;
	}
	return street;
};

Helprs.prototype.street_suffix = function(options) {
	options = _rdm.initOptions(options, {
		country: 'us'
	});
	return this.pick(this.street_suffixes(options));
};

Helprs.prototype.street_suffixes = function(options) {
	options = _rdm.initOptions(options, {
		country: 'us'
	});
	// These are the most common suffixes.
	return this.get("street_suffixes")[options.country.toLowerCase()];
};

Helprs.prototype.countryToISO3 = function(iso2Country, options) {
	iso2Country = iso2Country.toUpperCase();
	if (!this._isISO2Country(iso2Country))
		return iso2Country;
	var responseCountry = {
		iso2: iso2Country,
		iso3: null
	};
	var toISO3Countries = _data.toISO3Countries;
	for (country in toISO3Countries) {
		if (toISO3Countries.hasOwnProperty(country)) {
			var rightStandard = toISO3Countries[country];
			if (rightStandard !== iso2Country)
				continue;
			responseCountry.iso3 = rightStandard;
			break;
		}
	}
	return responseCountry;
};

// Note: only returning US zip codes, internationalization will be a whole
// other beast to tackle at some point.
Helprs.prototype.zip = function(options) {
	var zip = this.n(this.natural, 5, {
		max: 9
	});

	if (options && options.plusfour === true) {
		zip.push('-');
		zip = zip.concat(this.n(this.natural, 4, {
			max: 9
		}));
	}

	return zip.join("");
};

/**
 * ====
 * TIME
 * ====
 */

Helprs.prototype.ampm = function() {
	return this.bool() ? 'am' : 'pm';
};

Helprs.prototype.date = function(options) {
	var date_string, date;

	// If interval is specified we ignore preset
	if (options && (options.min || options.max)) {
		options = _rdm.initOptions(options, {
			american: true,
			string: false
		});
		var min = typeof options.min !== "undefined" ? options.min.getTime() : 1;
		// 100,000,000 days measured relative to midnight at the beginning of 01 January, 1970 UTC. http://es5.github.io/#x15.9.1.1
		var max = typeof options.max !== "undefined" ? options.max.getTime() : 8640000000000000;

		date = new Date(this.integer({
			min: min,
			max: max
		}));
	} else {
		var m = this.month({
			raw: true
		});
		var daysInMonth = m.days;

		if (options && options.month) {
			// Mod 12 to allow months outside range of 0-11 (not encouraged, but also not prevented).
			daysInMonth = this.get('months')[((options.month % 12) + 12) % 12].days;
		}

		options = _rdm.initOptions(options, {
			year: parseInt(this.year(), 10),
			// Necessary to subtract 1 because Date() 0-indexes month but not day or year
			// for some reason.
			month: m.numeric - 1,
			day: this.natural({
				min: 1,
				max: daysInMonth
			}),
			hour: this.hour({
				twentyfour: true
			}),
			minute: this.minute(),
			second: this.second(),
			millisecond: this.millisecond(),
			american: true,
			string: false
		});

		date = new Date(options.year, options.month, options.day, options.hour, options.minute, options.second, options.millisecond);
	}

	if (options.american) {
		// Adding 1 to the month is necessary because Date() 0-indexes
		// months but not day for some odd reason.
		date_string = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
	} else {
		date_string = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
	}

	return options.string ? date_string : date;
};

Helprs.prototype.hammertime = function(options) {
	return this.date(options).getTime();
};

Helprs.prototype.hour = function(options) {
	options = _rdm.initOptions(options, {
		min: options && options.twentyfour ? 0 : 1,
		max: options && options.twentyfour ? 23 : 12
	});

	_rdm.testRange(options.min < 0, "Helprs: Min cannot be less than 0.");
	_rdm.testRange(options.twentyfour && options.max > 23, "Helprs: Max cannot be greater than 23 for twentyfour option.");
	_rdm.testRange(!options.twentyfour && options.max > 12, "Helprs: Max cannot be greater than 12.");
	_rdm.testRange(options.min > options.max, "Helprs: Min cannot be greater than Max.");

	return this.natural({
		min: options.min,
		max: options.max
	});
};

Helprs.prototype.millisecond = function() {
	return this.natural({
		max: 999
	});
};

Helprs.prototype.minute = Helprs.prototype.second = function(options) {
	options = _rdm.initOptions(options, {
		min: 0,
		max: 59
	});

	_rdm.testRange(options.min < 0, "Helprs: Min cannot be less than 0.");
	_rdm.testRange(options.max > 59, "Helprs: Max cannot be greater than 59.");
	_rdm.testRange(options.min > options.max, "Helprs: Min cannot be greater than Max.");

	return this.natural({
		min: options.min,
		max: options.max
	});
};

Helprs.prototype.month = function(options) {
	options = _rdm.initOptions(options, {
		min: 1,
		max: 12
	});

	_rdm.testRange(options.min < 1, "Helprs: Min cannot be less than 1.");
	_rdm.testRange(options.max > 12, "Helprs: Max cannot be greater than 12.");
	_rdm.testRange(options.min > options.max, "Helprs: Min cannot be greater than Max.");

	var month = this.pick(this.months().slice(options.min - 1, options.max));
	return options.raw ? month : month.name;
};

Helprs.prototype.months = function() {
	return this.get("months");
};

Helprs.prototype.second = function() {
	return this.natural({
		max: 59
	});
};

Helprs.prototype.timestamp = function() {
	return this.natural({
		min: 1,
		max: parseInt(new Date().getTime() / 1000, 10)
	});
};

Helprs.prototype.weekday = function(options) {
	options = _rdm.initOptions(options, {
		weekday_only: false
	});
	var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	if (!options.weekday_only) {
		weekdays.push("Saturday");
		weekdays.push("Sunday");
	}
	return this.pickone(weekdays);
};

Helprs.prototype.year = function(options) {
	// Default to current year as min if none specified
	options = _rdm.initOptions(options, {
		min: new Date().getFullYear()
	});

	// Default to one century after current year as max if none specified
	options.max = (typeof options.max !== "undefined") ? options.max : options.min + 100;

	return this.natural(options).toString();
};

/**
 * =======
 * FINANCE
 * =======
 */

Helprs.prototype.cc = function(options) {
	options = _rdm.initOptions(options);

	var type, number, to_generate;

	type = (options.type) ?
		this.cc_type({
			name: options.type,
			raw: true
		}) :
		this.cc_type({
			raw: true
		});

	number = type.prefix.split("");
	to_generate = type.length - type.prefix.length - 1;

	// Generates n - 1 digits
	number = number.concat(this.n(this.integer, to_generate, {
		min: 0,
		max: 9
	}));

	// Generates the last digit according to Luhn algorithm
	number.push(this.luhn_calculate(number.join("")));

	return number.join("");
};

Helprs.prototype.cc_types = function() {
	// http://en.wikipedia.org/wiki/Bank_card_number#Issuer_identification_number_.28IIN.29
	return this.get("cc_types");
};

Helprs.prototype.cc_type = function(options) {
	options = _rdm.initOptions(options);
	var types = this.cc_types(),
		type = null;

	if (options.name) {
		for (var i = 0; i < types.length; i++) {
			// Accept either name or short_name to specify card type
			if (types[i].name === options.name || types[i].short_name === options.name) {
				type = types[i];
				break;
			}
		}
		if (type === null) {
			throw new RangeError("Credit card type '" + options.name + "'' is not supported");
		}
	} else {
		type = this.pick(types);
	}

	return options.raw ? type : type.name;
};

//return all world currency by ISO 4217
Helprs.prototype.currency_types = function() {
	return this.get("currency_types");
};

//return random world currency by ISO 4217
Helprs.prototype.currency = function() {
	return this.pick(this.currency_types());
};

//return all timezones availabel
Helprs.prototype.timezones = function() {
	return this.get("timezones");
};

//return random timezone
Helprs.prototype.timezone = function() {
	return this.pick(this.timezones());
};

//Return random correct currency exchange pair (e.g. EUR/USD) or array of currency code
Helprs.prototype.currency_pair = function(returnAsString) {
	var currencies = this.unique(this.currency, 2, {
		comparator: function(arr, val) {

			return arr.reduce(function(acc, item) {
				// If a match has been found, short circuit check and just return
				return acc || (item.code === val.code);
			}, false);
		}
	});

	if (returnAsString) {
		return currencies[0].code + '/' + currencies[1].code;
	} else {
		return currencies;
	}
};

Helprs.prototype.dollar = function(options) {
	// By default, a somewhat more sane max for dollar than all available numbers
	options = _rdm.initOptions(options, {
		max: 10000,
		min: 0
	});

	var dollar = this.floating({
			min: options.min,
			max: options.max,
			fixed: 2
		}).toString(),
		cents = dollar.split('.')[1];

	if (cents === undefined) {
		dollar += '.00';
	} else if (cents.length < 2) {
		dollar = dollar + '0';
	}

	if (dollar < 0) {
		return '-$' + dollar.replace('-', '');
	} else {
		return '$' + dollar;
	}
};

Helprs.prototype.euro = function(options) {
	return Number(this.dollar(options).replace("$", "")).toLocaleString() + "€";
};

Helprs.prototype.exp = function(options) {
	options = _rdm.initOptions(options);
	var exp = {};

	exp.year = this.exp_year();

	// If the year is this year, need to ensure month is greater than the
	// current month or this expiration will not be valid
	if (exp.year === (new Date().getFullYear()).toString()) {
		exp.month = this.exp_month({
			future: true
		});
	} else {
		exp.month = this.exp_month();
	}

	return options.raw ? exp : exp.month + '/' + exp.year;
};

Helprs.prototype.exp_month = function(options) {
	options = _rdm.initOptions(options);
	var month, month_int,
		// Date object months are 0 indexed
		curMonth = new Date().getMonth() + 1;

	if (options.future && (curMonth !== 12)) {
		do {
			month = this.month({
				raw: true
			}).numeric;
			month_int = parseInt(month, 10);
		} while (month_int <= curMonth);
	} else {
		month = this.month({
			raw: true
		}).numeric;
	}

	return month;
};

Helprs.prototype.exp_year = function() {
	var curMonth = new Date().getMonth() + 1,
		curYear = new Date().getFullYear();

	return this.year({
		min: ((curMonth === 12) ? (curYear + 1) : curYear),
		max: (curYear + 10)
	});
};

Helprs.prototype.cvc = function(options) {
	return this.natural({
		min: 100,
		max: 999
	});
};

Helprs.prototype.vat = function(options) {
	options = _rdm.initOptions(options, {
		country: 'it'
	});
	switch (options.country.toLowerCase()) {
		case 'it':
			return this.it_vat();
	}
};

/**
 * Return a random tax amount.
 * By default returns tax amount no larger than 9 and no smaller than 1.
 * Optionally specify the min and max to make it larger (or smaller).
 * @param   {Object}  options  Object containing Options properties.
 * @return  {Number}           Return a number decimal tax amount value.
 */
Helprs.prototype.tax = function(options) {
	options = _rdm.initOptions(options, {
		max: 9,
		min: 1
	});

	var tax = this.floating({
			min: options.min,
			max: options.max,
			fixed: 2
		});

	return tax;
};
/**
 * Return a random shorthand dollar value
 * Used to convert your currency value to shorthand.
 * @param   {[type]}  val        [description]
 * @param   {[type]}  precision  [description]
 * @return  {[type]}             [description]
 */
Helprs.prototype.nFormatter = function(val, precision) {
	options = _rdm.initOptions(options, {
		min: _data.MIN_INT,
		max: _data.MAX_INT,
		fixed: 2
	});

	_rdm.testRange(options.min > options.max, "Helprs: Min cannot be greater than Max.");

	if (!options.val)
		options.val = Math.floor(this.random() * (options.max - options.min + 1) + options.min);

	if (val >= 1000000000) {
		return (val / 1000000000).toFixed(fixed).replace(/\.0$/, '') + 'G';
	}
	if (val >= 1000000) {
		return (val / 1000000).toFixed(fixed).replace(/\.0$/, '') + 'M';
	}
	if (val >= 1000) {
		return (val / 1000).toFixed(fixed).replace(/\.0$/, '') + 'K';
	}
	return val;
};

/**
 * ========
 * REGIONAL
 * ========
 */

Helprs.prototype.it_vat = function() {
	var it_vat = this.natural({
		min: 1,
		max: 1800000
	});

	it_vat = this.pad(it_vat, 7) + this.pad(this.pick(this.provinces({
		country: 'it'
	})).code, 3);
	return it_vat + this.luhn_calculate(it_vat);
};

/*
 * this generator is written following the official algorithm
 * all _data can be passed explicitely or randomized by calling helprs.cf() without options
 * the code does not check that the input _data is valid (it goes beyond the scope of the generator)
 *
 * @param  [Object] options = { first: first name,
 *                              last: last name,
 *                              gender: female|male,
                                birthday: JavaScript date object,
                                city: string(4), 1 letter + 3 numbers
                               }
 * @return [string] codice fiscale
 *
 */
Helprs.prototype.cf = function(options) {
	options = options || {};
	var gender = !!options.gender ? options.gender : this.gender(),
		first = !!options.first ? options.first : this.first({
			gender: gender,
			nationality: 'it'
		}),
		last = !!options.last ? options.last : this.last({
			nationality: 'it'
		}),
		birthday = !!options.birthday ? options.birthday : this.birthday(),
		city = !!options.city ? options.city : this.pickone(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'Z']) + this.pad(this.natural({
			max: 999
		}), 3),
		cf = [],
		name_generator = function(name, isLast) {
			var temp,
				return_value = [];

			if (name.length < 3) {
				return_value = name.split("").concat("XXX".split("")).splice(0, 3);
			} else {
				temp = name.toUpperCase().split('').map(function(c) {
					return ("BCDFGHJKLMNPRSTVWZ".indexOf(c) !== -1) ? c : undefined;
				}).join('');
				if (temp.length > 3) {
					if (isLast) {
						temp = temp.substr(0, 3);
					} else {
						temp = temp[0] + temp.substr(2, 2);
					}
				}
				if (temp.length < 3) {
					return_value = temp;
					temp = name.toUpperCase().split('').map(function(c) {
						return ("AEIOU".indexOf(c) !== -1) ? c : undefined;
					}).join('').substr(0, 3 - return_value.length);
				}
				return_value = return_value + temp;
			}

			return return_value;
		},
		date_generator = function(birthday, gender, that) {
			var lettermonths = ['A', 'B', 'C', 'D', 'E', 'H', 'L', 'M', 'P', 'R', 'S', 'T'];

			return birthday.getFullYear().toString().substr(2) +
				lettermonths[birthday.getMonth()] +
				that.pad(birthday.getDate() + ((gender.toLowerCase() === "female") ? 40 : 0), 2);
		},
		checkdigit_generator = function(cf) {
			var range1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
				range2 = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ",
				evens = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
				odds = "BAKPLCQDREVOSFTGUHMINJWZYX",
				digit = 0;


			for (var i = 0; i < 15; i++) {
				if (i % 2 !== 0) {
					digit += evens.indexOf(range2[range1.indexOf(cf[i])]);
				} else {
					digit += odds.indexOf(range2[range1.indexOf(cf[i])]);
				}
			}
			return evens[digit % 26];
		};

	cf = cf.concat(name_generator(last, true), name_generator(first), date_generator(birthday, gender, this), city.toUpperCase().split("")).join("");
	cf += checkdigit_generator(cf.toUpperCase(), this);

	return cf.toUpperCase();
};

Helprs.prototype.pl_pesel = function() {
	var number = this.natural({
		min: 1,
		max: 9999999999
	});
	var arr = this.pad(number, 10).split('');
	for (var i = 0; i < arr.length; i++) {
		arr[i] = parseInt(arr[i]);
	}

	var controlNumber = (1 * arr[0] + 3 * arr[1] + 7 * arr[2] + 9 * arr[3] + 1 * arr[4] + 3 * arr[5] + 7 * arr[6] + 9 * arr[7] + 1 * arr[8] + 3 * arr[9]) % 10;
	if (controlNumber !== 0) {
		controlNumber = 10 - controlNumber;
	}

	return arr.join('') + controlNumber;
};

Helprs.prototype.pl_nip = function() {
	var number = this.natural({
		min: 1,
		max: 999999999
	});
	var arr = this.pad(number, 9).split('');
	for (var i = 0; i < arr.length; i++) {
		arr[i] = parseInt(arr[i]);
	}

	var controlNumber = (6 * arr[0] + 5 * arr[1] + 7 * arr[2] + 2 * arr[3] + 3 * arr[4] + 4 * arr[5] + 5 * arr[6] + 6 * arr[7] + 7 * arr[8]) % 11;
	if (controlNumber === 10) {
		return this.pl_nip();
	}

	return arr.join('') + controlNumber;
};

Helprs.prototype.pl_regon = function() {
	var number = this.natural({
		min: 1,
		max: 99999999
	});
	var arr = this.pad(number, 8).split('');
	for (var i = 0; i < arr.length; i++) {
		arr[i] = parseInt(arr[i]);
	}

	var controlNumber = (8 * arr[0] + 9 * arr[1] + 2 * arr[2] + 3 * arr[3] + 4 * arr[4] + 5 * arr[5] + 6 * arr[6] + 7 * arr[7]) % 11;
	if (controlNumber === 10) {
		controlNumber = 0;
	}

	return arr.join('') + controlNumber;
};

/**
 * =============
 * MISCELLANEOUS
 * =============
 */

// Guid
Helprs.prototype.guid = function(options) {
	var rounds = 8, maxRounds = 10, minRounds = 2;

	if (options && options.rounds)
		rounds = options.rounds;

	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	var guid = s4() + s4();

	if (rounds === 8) {
		guid += '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
	} else if (rounds < 8) {
		var i = 0;
		do {
			if (i % 3 === 0 || i % 5 === 0)
				guid += '-' + s4();
			else
				guid += s4();
			i++;
		}
		while (i < rounds);
	}
	return guid;
};

// Hash
Helprs.prototype.hash = function(options) {
	options = _rdm.initOptions(options, {
		length: 40,
		casing: 'lower'
	});
	var pool = options.casing === 'upper' ? _data.HEX_POOL.toUpperCase() : _data.HEX_POOL;
	return this.string({
		pool: pool,
		length: options.length
	});
};

Helprs.prototype.luhn_check = function(num) {
	var str = num.toString();
	var checkDigit = +str.substring(str.length - 1);
	return checkDigit === this.luhn_calculate(+str.substring(0, str.length - 1));
};

Helprs.prototype.luhn_calculate = function(num) {
	var digits = num.toString().split("").reverse();
	var sum = 0;
	var digit;

	for (var i = 0, l = digits.length; l > i; ++i) {
		digit = +digits[i];
		if (i % 2 === 0) {
			digit *= 2;
			if (digit > 9) {
				digit -= 9;
			}
		}
		sum += digit;
	}
	return (sum * 9) % 10;
};

Helprs.prototype.webOrderNumber = function(options) {
	options = _rdm.initOptions(options, {
		rounds: 3,
		min: 100,
		max: 9999
	});

	var won = "";
	var i = 0;
	while (i < options.rounds) {
		if (i === 0) {
			won = this.integer({
				min: 100,
				max: 999
			});
		} else {
			won += "-" + this.integer({
				min: 1000,
				max: 9999
			});
		}

		i++;
	}

	return won;
};

// MD5 Hash
Helprs.prototype.md5 = function(options) {
	var opts = {
		str: '',
		key: null,
		raw: false
	};

	if (!options) {
		opts.str = this.string();
		options = {};
	} else if (typeof options === 'string') {
		opts.str = options;
		options = {};
	} else if (typeof options !== 'object') {
		return null;
	} else if (options.constructor === 'Array') {
		return null;
	}

	opts = _rdm.initOptions(options, opts);

	if (!opts.str) {
		throw new Error('A parameter is required to return an md5 hash.');
	}

	return this.bimd5.md5(opts.str, opts.key, opts.raw);
};

/**
 * #Description:
 * =====================================================
 * Generate random file name with extention
 *
 * The argument provide extention type
 * -> raster
 * -> vector
 * -> 3d
 * -> document
 *
 * If noting is provided the function return random file name with random
 * extention type of any kind
 *
 * The user can validate the file name length range
 * If noting provided the generated file name is radom
 *
 * #Extention Pool :
 * * Currently the supported extentions are
 *  -> some of the most popular raster image extentions
 *  -> some of the most popular vector image extentions
 *  -> some of the most popular 3d image extentions
 *  -> some of the most popular document extentions
 *
 * #Examples :
 * =====================================================
 *
 * Return random file name with random extention. The file extention
 * is provided by a predifined collection of extentions. More abouth the extention
 * pool can be fond in #Extention Pool section
 *
 * helprs.file()
 * => dsfsdhjf.xml
 *
 * In order to generate a file name with sspecific length, specify the
 * length property and integer value. The extention is going to be random
 *
 * helprs.file({length : 10})
 * => asrtineqos.pdf
 *
 * In order to geerate file with extention form some of the predifined groups
 * of the extention pool just specify the extenton pool category in fileType property
 *
 * helprs.file({fileType : 'raster'})
 * => dshgssds.psd
 *
 * You can provide specific extention for your files
 * helprs.file({extention : 'html'})
 * => djfsd.html
 *
 * Or you could pass custom collection of extentons bt array or by object
 * helprs.file({extentions : [...]})
 * => dhgsdsd.psd
 *
 * helprs.file({extentions : { key : [...], key : [...]}})
 * => djsfksdjsd.xml
 *
 * @param  [collection] options
 * @return [string]
 *
 */
Helprs.prototype.file = function(options) {

	var fileOptions = options || {};
	var poolCollectionKey = "fileExtension";
	var typeRange = Object.keys(this.get("fileExtension")); //['raster', 'vector', '3d', 'document'];
	var fileName;
	var fileExtention;

	// Generate random file name
	fileName = this.word({
		length: fileOptions.length
	});

	// Generate file by specific extention provided by the user
	if (fileOptions.extention) {

		fileExtention = fileOptions.extention;
		return (fileName + '.' + fileExtention);
	}

	// Generate file by specific axtention collection
	if (fileOptions.extentions) {

		if (Array.isArray(fileOptions.extentions)) {

			fileExtention = this.pickone(fileOptions.extentions);
			return (fileName + '.' + fileExtention);
		} else if (fileOptions.extentions.constructor === Object) {

			var extentionObjectCollection = fileOptions.extentions;
			var keys = Object.keys(extentionObjectCollection);

			fileExtention = this.pickone(extentionObjectCollection[this.pickone(keys)]);
			return (fileName + '.' + fileExtention);
		}

		throw new Error("Expect collection of type Array or Object to be passed as an argument ");
	}

	// Generate file extention based on specific file type
	if (fileOptions.fileType) {

		var fileType = fileOptions.fileType;
		if (typeRange.indexOf(fileType) !== -1) {

			fileExtention = this.pickone(this.get(poolCollectionKey)[fileType]);
			return (fileName + '.' + fileExtention);
		}

		throw new Error("Expect file type value to be 'raster', 'vector', '3d' or 'document' ");
	}

	// Generate random file name if no extenton options are passed
	fileExtention = this.pickone(this.get(poolCollectionKey)[this.pickone(typeRange)]);
	return (fileName + '.' + fileExtention);
};

var o_hasOwnProperty = Object.prototype.hasOwnProperty;
var o_keys = (Object.keys || function(obj) {
	var result = [];
	for (var key in obj) {
		if (o_hasOwnProperty.call(obj, key)) {
			result.push(key);
		}
	}

	return result;
});

/** Get the _data based on key**/
Helprs.prototype.get = function(name) {
	return _rdm.copyObject(_data[name]);
};

Helprs.prototype.getPhoneCodes = function(options) {
	return _data.phoneCodes;
};

/**
 * Get the Country's Capital Name.
 * @param  {String} country Country Code such "US", "NI", "NP", etc....
 *                          The country code must be in ISO2 Standard.
 * @param  {Object} options Options which have not yet been defined.
 * @return {String}         The country's Capital Name.
 *                          If the Country's Code is not found,
 *                          the returning string will be "Not Found".
 */
Helprs.prototype.getCountryCapital = function(country, options) {
	country = country.toUpperCase();
	return _data.countryCapitals[country] || "Not Found";
};

Helprs.prototype.getCurrencyCodes = function(options) {
	return _data.currencyCodes;
};

// Mac Address
Helprs.prototype.mac_address = function(options) {
	// typically mac addresses are separated by ":"
	// however they can also be separated by "-"
	// the network variant uses a dot every fourth byte

	options = _rdm.initOptions(options);
	if (!options.separator) {
		options.separator = options.networkVersion ? "." : ":";
	}

	var mac_pool = "ABCDEF1234567890",
		mac = "";
	if (!options.networkVersion) {
		mac = this.n(this.string, 6, {
			pool: mac_pool,
			length: 2
		}).join(options.separator);
	} else {
		mac = this.n(this.string, 3, {
			pool: mac_pool,
			length: 4
		}).join(options.separator);
	}

	return mac;
};

Helprs.prototype.normal = function(options) {
	options = _rdm.initOptions(options, {
		mean: 0,
		dev: 1,
		pool: []
	});

	_rdm.testRange(
		options.pool.constructor !== Array,
		"Helprs: The pool option must be a valid array."
	);

	// If a pool has been passed, then we are returning an item from that pool,
	// using the normal distribution settings that were passed in
	if (options.pool.length > 0) {
		return this.normal_pool(options);
	}

	// The Marsaglia Polar method
	var s, u, v, norm,
		mean = options.mean,
		dev = options.dev;

	do {
		// U and V are from the uniform distribution on (-1, 1)
		u = this.random() * 2 - 1;
		v = this.random() * 2 - 1;

		s = u * u + v * v;
	} while (s >= 1);

	// Compute the standard normal variate
	norm = u * Math.sqrt(-2 * Math.log(s) / s);

	// Shape and scale
	return dev * norm + mean;
};

Helprs.prototype.normal_pool = function(options) {
	var performanceCounter = 0;
	do {
		var idx = Math.round(this.normal({
			mean: options.mean,
			dev: options.dev
		}));
		if (idx < options.pool.length && idx >= 0) {
			return options.pool[idx];
		} else {
			performanceCounter++;
		}
	} while (performanceCounter < 100);

	throw new RangeError("Helprs: Your pool is too small for the given mean and standard deviation. Please adjust.");
};

// Set the _data as key and _data or the _data map
Helprs.prototype.set = function(name, values) {
	if (typeof name === "string") {
		_data[name] = values;
	} else {
		_data = _rdm.copyObject(name, _data);
	}
};

// ID number for Brazil companies
Helprs.prototype.cnpj = function() {
	var n = this.n(this.natural, 8, {
		max: 9
	});
	var d1 = 2 + n[7] * 6 + n[6] * 7 + n[5] * 8 + n[4] * 9 + n[3] * 2 + n[2] * 3 + n[1] * 4 + n[0] * 5;
	d1 = 11 - (d1 % 11);
	if (d1 >= 10) {
		d1 = 0;
	}
	var d2 = d1 * 2 + 3 + n[7] * 7 + n[6] * 8 + n[5] * 9 + n[4] * 2 + n[3] * 3 + n[2] * 4 + n[1] * 5 + n[0] * 6;
	d2 = 11 - (d2 % 11);
	if (d2 >= 10) {
		d2 = 0;
	}
	return '' + n[0] + n[1] + '.' + n[2] + n[3] + n[4] + '.' + n[5] + n[6] + n[7] + '/0001-' + d1 + d2;
};

Helprs.prototype.mersenne_twister = function(seed) {
	return new _mersenneTwister(seed);
};

Helprs.prototype.blueimp_md5 = function() {
	return new _blueImpMD5();
};

Helprs.prototype.spaceUppercases = function(strings) {
	if (typeof strings !== "string")
		return strings;

	var p = 0;
	var character = "";
	var upperCaseChar = "";
	var indxs = [];

	while (p <= strings.length) {
		character = strings.charAt(p);
		upperCaseChar = character.toUpperCase();
		if (character === upperCaseChar) {
			var idx = strings.indexOf(upperCaseChar);
			if (idx > -1 && indxs.indexOf(idx) < 0) {
				indxs.push(idx);
				strings = this.spliceString(strings, idx, 0, " ");
			}
		}
		p++;
	}

	return strings;
};
/**
 * Helprs that changes the content of a string by removing a range of
 * characters and/or adding new characters.
 *
 * @param {String}
 * @param {Number} start Index at which to start changing the string.
 * @param {Number} delCount An integer indicating the number of old chars to remove.
 * @param {String} newSubStr The String that is spliced in.
 * @return {String} A new string with the spliced substring.
 */
Helprs.prototype.spliceString = function(string, start, delCount, newSubStr) {
	return string.slice(0, start) + newSubStr + string.slice(start + Math.abs(delCount));
};
Helprs.prototype.sort = function(series, options) {
	var ascending = true;
	if (options.ascending === false)
		ascending = false;
	var level = null;
	if (options.level !== undefined)
		level = options.level;
	// Series should be descending
	series.sort(function(seriesA, seriesB) {
		// seriesA = current item in array
		// seriesB = next item in array
		if (level !== null) {
			seriesA = seriesA[level];
			seriesB = seriesB[level];
		}

		if (ascending)
			return seriesA - seriesB;
		else
			return seriesB - seriesA;
	});
	return series;
};
Helprs.prototype.daysHoursMinsFormat = function(t) {
	var cd = 24 * 60 * 60 * 1000,
		ch = 60 * 60 * 1000,
		d = Math.floor(t / cd),
		h = Math.floor((t - d * cd) / ch),
		m = Math.round((t - d * cd - h * ch) / 60000),
		pad = function(n) {
			return n < 10 ? '0' + n : n;
		};
	if (m === 60) {
		h++;
		m = 0;
	}
	if (h === 24) {
		d++;
		h = 0;
	}
	return [d + "Days", pad(h) + "Hours", pad(m) + "Mins"].join(':');
};
Helprs.prototype.dump = function(_data) {
	return JSON.stringify(_data, null, 4);
};
/**
 * Private function that generates a slug based on the passed
 * in brand _data and item specifications.
 *
 * @param   {String}  string  String to be converted to a slug
 *
 * @return  {String}          Return a built slug for the _database.
 */
Helprs.prototype.generateSlug = function(string) {
	var slug = string;
	if (typeof slug === 'number')
		slug = slug.toString();
	return slug.toLowerCase().trim().replace(/(\s+|\/)/g, "-");
};
Helprs.prototype.Exception = function(message, code) {
	var error = new Error(message);
	error.code = code;
	return error;
};
Helprs.prototype.formatComma = function(val) {
	if (typeof val == "number")
		val = val.toString();
	return val.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};
Helprs.prototype.formatCurrency = function(val) {
	if (val >= 0)
		return '$' + this.formatComma(val);
	val = -val;
	return '-$' + this.formatComma(val);
};
Helprs.prototype.formattedCurrentDate = function() {
	// The date format: %YYYY-%MM-%DDT%H:%M:%SZ
	var dateObj = new Date(),
		month = (dateObj.getMonth() < 10) ? "0" + dateObj.getMonth().toString() : dateObj.getMonth(),
		day = (dateObj.getDate() < 10) ? "0" + dateObj.getDate().toString() : dateObj.getDate(),
		hours = (dateObj.getHours() < 10) ? "0" + dateObj.getHours() : dateObj.getHours(),
		minutes = (dateObj.getMinutes() < 10) ? "0" + dateObj.getMinutes() : dateObj.getMinutes(),
		seconds = (dateObj.getSeconds() < 10) ? "0" + dateObj.getSeconds() : dateObj.getSeconds(),
		formattedDate = dateObj.getFullYear() + "-" + month + "-" + day + "T";
	formattedDate += +hours + ":" + minutes + ":" + seconds + "Z";
	return formattedDate;
};
Helprs.prototype.formatNumberThousands = function(val) {
	return val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};
Helprs.prototype.isValidJson = function(json) {
	var result;
	try {
		JSON.parse(json);
		result = true;
	} catch (err) {
		result = false;
	}
	return result;
};
Helprs.prototype.isValidURL = function(url, secured) {
	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	if (secured)
		expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);
	if (url.match(regex))
		return true;
	return false;
};
Helprs.prototype.memorySizeOf = function(obj) {
	// useful method of returning approx size of object
	var bytes = 0;

	function sizeOf(obj) {
		if (obj !== null && obj !== undefined) {
			switch (typeof obj) {
				case 'number':
					bytes += 8;
					break;
				case 'string':
					bytes += obj.length * 2;
					break;
				case 'boolean':
					bytes += 4;
					break;
				case 'object':
					var objClass = Object.prototype.toString.call(obj).slice(8, -1);
					if (objClass === 'Object' || objClass === 'Array') {
						for (var key in obj) {
							if (!obj.hasOwnProperty(key))
								continue;
							sizeOf(obj[key]);
						}
					} else
						bytes += obj.toString().length * 2;
					break;
			}
		}
		return bytes;
	};

	function formatByteSize(bytes) {
		if (bytes < 1024)
			return bytes + " bytes";
		else if (bytes < 1048576)
			return (bytes / 1024).toFixed(3) + " KiB";
		else if (bytes < 1073741824)
			return (bytes / 1048576).toFixed(3) + " MiB";
		else
			return (bytes / 1073741824).toFixed(3) + " GiB";
	};
	return formatByteSize(sizeOf(obj));
};
Helprs.prototype.shuffle = function(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
Helprs.prototype.isObject = function(value) {
	var type = typeof value;
	return !!value && (type == 'object' || type == 'function');
};
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
Helprs.prototype.isObjectLike = function(value) {
	return !!value && typeof value == 'object';
};
Helprs.prototype.trimLeft = function(str, char) {
	var multi = false;

	if (!char)
		char = '\\s';
	else if (typeof char === 'string')
		char = '\\' + (char === ' ' ? 's' : char);
	else
		multi = true;

	if (!multi) {
		var rgx = new RegExp("^" + char + "+", "g");
		str = str.replace(rgx, '');
	} else {
		char.forEach(function(element, index) {
			element = '\\' + (element === ' ' ? 's' : element);
			var rgx = new RegExp("^" + element + "+", "g");
			str = str.replace(rgx, '');
		});
	}
	return str;
};
Helprs.prototype.trimRight = function(str, char) {
	var multi = false;

	if (!char)
		char = '\\s';
	else if (typeof char === 'string')
		char = '\\' + (char === ' ' ? 's' : char);
	else
		multi = true;

	if (!multi) {
		var rgx = new RegExp(char + "+$", "g");
		str = str.replace(rgx, '');
	} else {
		char.forEach(function(element, index) {
			element = '\\' + (element === ' ' ? 's' : element);
			var rgx = new RegExp(element + "+$", "g");
			str = str.replace(rgx, '');
		});
	}
	return str;
};
Helprs.prototype.trimEdges = function(str, char) {
	str = this.trimLeft(str, char);
	str = this.trimRight(str, char);
	return str;
};
Helprs.prototype.isMongoObjId = function(objectIdString) {
	var checkForHexRegExp = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
	return checkForHexRegExp.test(objectIdString);
};
Helprs.prototype.removeFromString = function(string, toRemove, replaceWith) {
	toRemove = (toRemove !== undefined && typeof toRemove === "string" && toRemove.length > 0) ? toRemove : null;
	replaceWith = (replaceWith !== undefined && typeof replaceWith === "string" && replaceWith.length > 0) ? replaceWith : " ";
	if (string.indexOf(toRemove) > -1)
		string = string.replace(toRemove, replaceWith);
	return string;
};
Helprs.prototype.isEmail = function(email, options) {
	assertString(email);
	options = merge(options, default_email_options);
	if (options.require_display_name || options.allow_display_name) {
		var display_email = str.match(displayName);
		if (display_email) {
			str = display_email[1];
		} else if (options.require_display_name) {
			return false;
		}
	}

	var parts = str.split('@');
	var domain = parts.pop();
	var user = parts.join('@');

	var lower_domain = domain.toLowerCase();
	if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
		user = user.replace(/\./g, '').toLowerCase();
	}

	if (!isByteLength(user, {
			max: 64
		}) || !isByteLength(domain, {
			max: 256
		})) {
		return false;
	}

	if (!isFDQN(domain, {
			require_tld: options.require_tld
		})) {
		return false;
	}

	if (user[0] === '"') {
		user = user.slice(1, user.length - 1);
		return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
	}

	var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

	var user_parts = user.split('.');
	for (var i = 0; i < user_parts.length; i++) {
		if (!pattern.test(user_parts[i])) {
			return false;
		}
	}

	return true;
};
/**
 * Canonicalizes an email address.
 * options is an object with the following keys and default values:
 * 		all_lowercase: true - Transforms the local part (before the @ symbol) of all email addresses to lowercase. Please note that this may violate RFC 5321, which gives providers the possibility to treat the local part of email addresses in a case sensitive way (although in practice most - yet not all - providers don't). The domain part of the email address is always lowercased, as it's case insensitive per RFC 1035.
 * 		gmail_lowercase: true - GMail addresses are known to be case-insensitive, so this switch allows lowercasing them even when all_lowercase is set to false. Please note that when all_lowercase is true, GMail addresses are lowercased regardless of the value of this setting.
 * 		gmail_remove_dots: true: Removes dots from the local part of the email address, as GMail ignores them (e.g. "john.doe" and "johndoe" are considered equal).
 * 		gmail_remove_subaddress: true: Normalizes addresses by removing "sub-addresses", which is the part following a "+" sign (e.g. "foo+bar@gmail.com" becomes "foo@gmail.com").
 * 		gmail_convert_googlemaildotcom: true: Converts addresses with domain @googlemail.com to @gmail.com, as they're equivalent.
 * 		outlookdotcom_lowercase: true - Outlook.com addresses (including Windows Live and Hotmail) are known to be case-insensitive, so this switch allows lowercasing them even when all_lowercase is set to false. Please note that when all_lowercase is true, Outlook.com addresses are lowercased regardless of the value of this setting.
 * 		outlookdotcom_remove_subaddress: true: Normalizes addresses by removing "sub-addresses", which is the part following a "+" sign (e.g. "foo+bar@outlook.com" becomes "foo@outlook.com").
 * 		yahoo_lowercase: true - Yahoo Mail addresses are known to be case-insensitive, so this switch allows lowercasing them even when all_lowercase is set to false. Please note that when all_lowercase is true, Yahoo Mail addresses are lowercased regardless of the value of this setting.
 * 		yahoo_remove_subaddress: true: Normalizes addresses by removing "sub-addresses", which is the part following a "-" sign (e.g. "foo-bar@yahoo.com" becomes "foo@yahoo.com").
 * 		icloud_lowercase: true - iCloud addresses (including MobileMe) are known to be case-insensitive, so this switch allows lowercasing them even when all_lowercase is set to false. Please note that when all_lowercase is true, iCloud addresses are lowercased regardless of the value of this setting.
 * 		icloud_remove_subaddress: true: Normalizes addresses by removing "sub-addresses", which is the part following a "+" sign (e.g. "foo+bar@icloud.com" becomes "foo@icloud.com").
 *
 * @param   {[type]}  email    [description]
 * @param   {[type]}  options  [description]
 * @return  {[type]}           [description]
 */
Helprs.prototype.normalizeEmail = function(email, options) {
	options = merge(options, default_normalize_email_options);

	if (!this.isEmail(email)) {
		return false;
	}

	var raw_parts = email.split('@');
	var domain = raw_parts.pop();
	var user = raw_parts.join('@');
	var parts = [user, domain];

	// The domain is always lowercased, as it's case-insensitive per RFC 1035
	parts[1] = parts[1].toLowerCase();

	if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
		// Address is GMail
		if (options.gmail_remove_subaddress) {
			parts[0] = parts[0].split('+')[0];
		}
		if (options.gmail_remove_dots) {
			parts[0] = parts[0].replace(/\./g, '');
		}
		if (!parts[0].length) {
			return false;
		}
		if (options.all_lowercase || options.gmail_lowercase) {
			parts[0] = parts[0].toLowerCase();
		}
		parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
	} else if (~icloud_domains.indexOf(parts[1])) {
		// Address is iCloud
		if (options.icloud_remove_subaddress) {
			parts[0] = parts[0].split('+')[0];
		}
		if (!parts[0].length) {
			return false;
		}
		if (options.all_lowercase || options.icloud_lowercase) {
			parts[0] = parts[0].toLowerCase();
		}
	} else if (~outlookdotcom_domains.indexOf(parts[1])) {
		// Address is Outlook.com
		if (options.outlookdotcom_remove_subaddress) {
			parts[0] = parts[0].split('+')[0];
		}
		if (!parts[0].length) {
			return false;
		}
		if (options.all_lowercase || options.outlookdotcom_lowercase) {
			parts[0] = parts[0].toLowerCase();
		}
	} else if (~yahoo_domains.indexOf(parts[1])) {
		// Address is Yahoo
		if (options.yahoo_remove_subaddress) {
			var components = parts[0].split('-');
			parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
		}
		if (!parts[0].length) {
			return false;
		}
		if (options.all_lowercase || options.yahoo_lowercase) {
			parts[0] = parts[0].toLowerCase();
		}
	} else if (options.all_lowercase) {
		// Any other address
		parts[0] = parts[0].toLowerCase();
	}
	return parts.join('@');
};
Helprs.prototype.validateStateAbbr = function(stateAbbr) {
	if (_data.usStates[stateAbbr] !== undefined)
		return true;
	if (_data.canadianProvinces[stateAbbr] !== undefined)
		return true;
	return false;
};
Helprs.prototype.validateCountry = function(value) {
	if (_data.iso2Country[value] !== undefined)
		return true;
	value = this.capitalize(value.toString());
	for (var country in _data.iso2Country) {
		if (_data.iso2Country.hasOwnProperty(country)) {
			if (_data.iso2Country[country] === value)
				return true;
		}
	}
	return false;
};
Helprs.prototype.isValidZipcode = function(value, countryCode) {
	countryCode = countryCode || "US";
	var regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

	if (countryCode === "CA")
		regex = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i;

	var isValidZip = regex.test(value);
	return isValidZip;
};
Helprs.prototype.isNonUSCountry = function(value) {
	if (value != "US" && _data.iso2Country[value] !== undefined)
		return _data.iso2Country[value];
	return null;
};
Helprs.prototype.getContentType = function(filename) {
	var ContentType = "application/octet-stream";
	var splFile = filename.split(".");
	var extType = splFile[splFile.length - 1];
	var extension = "." + extType.toLowerCase();

	switch (extension) {
		case ".css":
			ContentType = "text/css";
			break;
		case ".gif":
			ContentType = "image/gif";
			break;
		case ".html":
			ContentType = "text/html";
			break;
		case ".jpg":
		case ".jpeg":
			ContentType = "image/jpeg";
			break;
		case ".js":
			ContentType = "application/javascript";
			break;
		case ".mp3":
			ContentType = "audio/mpeg";
			break;
		case ".mp4":
			ContentType = "video/mp4";
			break;
		case ".pdf":
			ContentType = "application/pdf";
			break;
		case ".png":
			ContentType = "image/png";
			break;
		case ".svg":
			ContentType = "image/svg+xml";
			break;
		case ".webm":
			ContentType = "video/webm";
			break;
		default:
			console.log("UTILITY ERROR: Unhandled Extension " + extension);
	}

	return ContentType;
};
/**
 * Returns the Abbriviated State from the provided state's full name.
 * @param   {String}  state    Specify the State name.
 * @param   {Object}  options  Options can specify the country of the state.
 *                             By Default, we assume US States, unless stated otherwise.
 * @return  {String}           By Default, returns only the 2 letter (Standard ISO2) abbreviation for state.
 */
Helprs.prototype.getAbbrStateName = function(fullname, options) {
	if (fullname && typeof fullname === 'string')
		fullname = this.capitalize(fullname.toLowerCase());

	var States = this.get("usStates");
	if (options && options.country) {
		switch (options.country.toLowerCase()) {
			case "ca":
				States = this.get("provinces")[options.country.toLowerCase()];
				break;
			case "can":
				States = this.get("canadianProvinces");
				break;
		}
	}

	if (options && options.byPostal) {
		return this.getStateByPostal(options.postal);
	}

	// Check the datatype. Whether array or object
	var isArray = Array.isArray(States);
	if (isArray) {
		for (var i = 0; i < States.length; i++) {
			var state = States[i];
			var abbreviation = state.abbreviation || null;
			var name = state.name || null;
			if (name && name === fullname) {
				if (abbreviation)
					return abbreviation.toUpperCase();
			}
		}
	} else {
		for (state in States) {
			if (States.hasOwnProperty(state)) {
				var key = state;
				var value = States[state];
				if (value === fullname)
					return key.toUpperCase();
			}
		}
	}
};
/**
 * Returns the Abbriviated State from the provided state's full name.
 * @param   {String}  state    Specify the State name.
 * @param   {Object}  options  Options can specify the country of the state.
 *                             By Default, we assume US States, unless stated otherwise.
 * @return  {String}           By Default, returns only the 2 letter (Standard ISO2) abbreviation for state.
 */
Helprs.prototype.getStateByPostal = function(postal, options) {
	var abbr = true;
	if (typeof postal !== 'string')
		postal = postal.toString();

	if (options && options.full)
		abbr = false;

	var zips = this.get("usZipCodes");
	for (zipcode in zips) {
		if (zipcode === postal && zips.hasOwnProperty(zipcode)) {
			if (abbr)
				return zips[zipcode].state;
			else {
				var states = this.get("usStates");
				return states[zips[zipcode].state];
			}
		}
	}

	return null;
};
Helprs.prototype.validatePostalCode = function(postal, options) {

	var PostalCodes = this.get("usZipCodes");
	if (options && options.country) {
		switch (options.country.toLowerCase()) {
			case "ca":
			case "can":
				PostalCodes = this.get("canadianPostalCodes");
				break;
		}
	}

	var isArray = Array.isArray(PostalCodes);
	if (isArray) {
		for (var f = 0; f < PostalCodes.length; f++) {
			var postalCode = PostalCodes[f];
			for (key in postalCode) {
				if (postalCode.hasOwnProperty(key)) {
					var value = postalCode[key];
					if (value === postal)
						return value;
				}
			}
		}
	} else {
		for (postalCode in PostalCodes) {
			if (postalCode === postal && PostalCodes.hasOwnProperty(postalCode))
				return postalCode;
		}
	}

	return null;
};

// Start of private methods
Helprs.prototype._isISO2Country = function(country) {
	var iso2Country = _data.iso2Country;
	for (country in iso2Country) {
		if (iso2Country.hasOwnProperty(country))
			return true;
	}
	return false;
};

module.exports = new Helprs();