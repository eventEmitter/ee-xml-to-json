# ee-xml-to-json

convert xml documents to json object with obtional simple transformation rules

## installation

	npm install ee-xml-to-json

## build status

	[![Build Status](https://travis-ci.org/eventEmitter/ee-xml-to-json.png?branch=master)](https://travis-ci.org/eventEmitter/ee-xml-to-json)

## usage


	var transform = require( "ee-xml-to-json" );

	var xmlString = "<ListBucketResult><MaxKeys>1000</MaxKeys><Delimiter>/</Delimiter><IsTruncated>false</IsTruncated></ListBucketResult>";

	transform( xmlString, function( err, jsonObj ){
		log( jsonObj );
	} );


the library supports simple transformations from the very verbose conversion of xml to json. because every element in xml can occur multiple times the json object consists mainly of array, even for simple string attributes. using the transformations rules you can convert, compact & typecast the json object in a usable format. see the test directory for more information.


	// compact the data using rules
	transform( xmlString, {
		  MaxKeys: 		"max"
		, IsTruncated: 	"truncated"
	}, function( err, jsonObj ){
		log( jsonObj );
	} );

