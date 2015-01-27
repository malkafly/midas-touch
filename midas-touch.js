'use strict';

function on(elSelector, eventName, selector, fn) {
  var element = document.querySelector(elSelector);

  element.addEventListener(eventName, function (event) {
    var possibleTargets = element.querySelectorAll(selector);
    var target = event.target;

    for (var i = 0, l = possibleTargets.length; i < l; i++) {
      var el = target;
      var p = possibleTargets[i];

      while (el && el !== element) {
        if (el === p) return fn.call(p, event);
        el = el.parentNode;
      }
    }
  });
}

on('body', 'click', '*', function (e) {
  e.preventDefault();
  var gold = [
    'http://www.4khdwallpapers.com/wp-content/uploads/2014/04/gold-texture-wallpaper-7.jpg',
    'http://images.all-free-download.com/images/graphiclarge/golden_texture_hd_picture_1_170580.jpg',
    'http://images.all-free-download.com/images/graphiclarge/gold_textured_background_hd_picture_3_169654.jpg',
    'http://www.featurepics.com/FI/Thumb300/20130507/Gold-Glitter-Texture-2695517.jpg'
  ];

  e.target.style.backgroundImage = 'url(' + gold[Math.floor((Math.random() * gold.length))] + ')';
  e.target.style.color = '#fff';
});