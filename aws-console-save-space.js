// ==UserScript==
// @name         Rename AWS Console items to save space
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       Lee Baker
// @match        *://console.aws.amazon.com/*
// @exclude      *://console.aws.amazon.com/iam/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==
$('.service-label:contains("EC2 Container Service")').text('ECS');