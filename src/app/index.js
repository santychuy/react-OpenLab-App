import "@babel/polyfill"; //Async/await

import React, {Component} from 'react';
import {render} from 'react-dom';

import App from './App';

const heading = ['When', 'Who', 'Description'];

render(
    <App titulo='OpenLibrary API' headings={heading} />, 
    document.getElementById('app')
);