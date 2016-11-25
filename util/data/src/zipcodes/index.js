var zips = require("./zips.json");

module.exports = {
	getStateByPostal: function(postal) {
		if (typeof postal !== 'string')
			postal = postal.toString();

		for (var i = 0; i < zips.length; i++) {
			var zip = zips[i];
			if (zip._id !== postal)
				continue;
			return zip.state;
		}

		return null;
	}
};