// ==UserScript==
// @name         Highlight favorite team in baseball-reference
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       Lee Baker
// @match        *://*.baseball-reference.com/*
// @exclude      *://*.baseball-reference.com/players/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==
$("a:contains('CHC')").parents("tr").css('background','#3399FF');

