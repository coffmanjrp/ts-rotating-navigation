"use strict";
var menuOpen = document.getElementById('open');
var menuClose = document.getElementById('close');
var container = document.querySelector('.container');
menuOpen.addEventListener('click', function () { return container.classList.add('show-nav'); });
menuClose.addEventListener('click', function () {
    return container.classList.remove('show-nav');
});
