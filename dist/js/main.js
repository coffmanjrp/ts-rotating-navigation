"use strict";
var Open = document.getElementById('open');
var Close = document.getElementById('close');
var container = document.querySelector('.container');
Open.addEventListener('click', function () { return container.classList.add('show-nav'); });
Close.addEventListener('click', function () { return container.classList.remove('show-nav'); });
