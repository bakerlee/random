// ==UserScript==
// @name         AWS Console Space Saver
// @namespace    http://your.homepage/
// @version      0.1
// @description  Shortens long AWS names to save space, particularly in the shortcut bar.
// @author       Lee Baker
// @match        *://console.aws.amazon.com/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==
$('.service-label:contains("EC2 Container Service")').text('ECS');
