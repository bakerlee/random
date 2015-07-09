// ==UserScript==
// @name         Baseball Reference Highlighter
// @namespace    http://your.homepage/
// @version      0.1
// @description  Highlights players from your favorite team on Baseball Reference
// @author       Lee Baker
// @match        *://*.baseball-reference.com/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==
$("a:contains('CHC')").parents("tr").css('background','#3399FF');


