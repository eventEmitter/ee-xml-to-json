(function() {
    'use strict';


	const parseString 	= require('xml2js').parseString;
	const transform 	= require('./transform');
	const type 			= require('ee-types');



	module.exports = (data, transformationRules) => {

		return new Promise((resolve, reject) => {
			const resume = (err, data) => {
				if (err) reject(err);
				else if (!data) resolve();
				else {
					if (transformationRules) resolve(transform(data, transformationRules));
					else resolve(data);
				}
			}



			if (type.buffer(data)) parseString(data.toString(), resume);
			else if (type.string(data)) parseString(data, resume);
			else reject(new Error('Expected «string» or «Buffer» as parameter 1!'));
		});		
	}
})();
