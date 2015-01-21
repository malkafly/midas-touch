'use strict';

$(document).ready(function () {
  $(document).on('click', function (e) {
    e.preventDefault();
    var gold = [
      'http://www.4khdwallpapers.com/wp-content/uploads/2014/04/gold-texture-wallpaper-7.jpg',
      'http://images.all-free-download.com/images/graphiclarge/golden_texture_hd_picture_1_170580.jpg',
      'http://images.all-free-download.com/images/graphiclarge/gold_textured_background_hd_picture_3_169654.jpg',
      'http://www.featurepics.com/FI/Thumb300/20130507/Gold-Glitter-Texture-2695517.jpg'
    ];
    $(arguments[0].target).css('background-image', 'url(' + gold[Math.floor((Math.random() * gold.length))] + ')');
    $(arguments[0].target).css('background-position', 'center center');
    $(arguments[0].target).css('background-size', 'cover');
    $(arguments[0].target).css('color', '#fff)');
  });
});
