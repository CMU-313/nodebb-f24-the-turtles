/* eslint-disable */
/* jshint unused:false */
var request = require('request');

const translatorApi = module.exports;

translatorApi.translate = async function (postData) {
    // translator URL below
    const TRANSLATOR_API = 'https://turtles-translator-service-c2a5g7f4c2gsbbf9.eastus-01.azurewebsites.net/';
    const response = await fetch(TRANSLATOR_API + '/?content=' + postData.content);
    const data = await response.json();
    return [data['is_english'], data['translated_content']]; // jshint ignore:line
};
