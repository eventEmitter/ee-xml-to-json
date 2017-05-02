# ee-xml-to-json

[![Greenkeeper badge](https://badges.greenkeeper.io/eventEmitter/ee-xml-to-json.svg)](https://greenkeeper.io/)

convert xml documents to json objects, with support for simple transformation rules

## installation

    npm install ee-xml-to-json

## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-xml-to-json.png?branch=master)](https://travis-ci.org/eventEmitter/ee-xml-to-json)

## usage


    const transform = require('ee-xml-to-json');

    const xmlString = `
        <ListBucketResult>\
             <MaxKeys>1000</MaxKeys>\
             <Delimiter>/</Delimiter>\
             <IsTruncated>false</IsTruncated>\
         </ListBucketResult>`;


    transform(xmlString).then((data) => {
        log(data);
    }).catch(log);


the library supports simple transformations from the very verbose format resulting from conversion towards a more compact representation. because every element in xml can occur multiple times the json object consists mainly out of arrays. using the transformations rules you can convert, compact & typecast the json object into a more usable format. see the test directory for more information on the rules.


    // compact the data using rules
    transform(xmlString, {
          MaxKeys:      'max'
        , IsTruncated:  'truncated'
    }).then((data) => {
        log(data);
    }).catch(log);

