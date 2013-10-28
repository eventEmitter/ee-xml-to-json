


	var   Class 		= require( "ee-class" )
		, log 			= require( "ee-log" )
		, fs 			= require( "fs" ) 
		, assert 		= require( "assert" );



	var xml2json 		= require( "./" );


	var rules = require( "./test/rules" );


	var xml = fs.readFileSync( "./test/aws.xml" );


	xml2json( xml, rules, function( err, json ){
		if ( err ) log.trace( err );
		else log( json );
	}.bind( this ) );

