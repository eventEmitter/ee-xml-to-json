
	

	const log 			= require('ee-log');
	const fs 			= require('fs') ;
	const assert 		= require('assert');



	const xml2json 		= require('./');
	const rules 		= require('./test/rules');
	const xml 			= fs.readFileSync('./test/aws.xml');
	const result 		= require('./test/result.js');


	xml2json(xml, rules).then((data) => {
		assert.deepEqual(data, result, 'parsed xml result does not equal to the contents of the result.js file');
	}).catch(log);