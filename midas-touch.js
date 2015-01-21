'use strict';

$(document).ready(function () {
  $('*').click(function () {
    var ouro = [
      'http://www.4khdwallpapers.com/wp-content/uploads/2014/04/gold-texture-wallpaper-7.jpg',
      'http://images.all-free-download.com/images/graphiclarge/golden_texture_hd_picture_1_170580.jpg',
      'http://images.all-free-download.com/images/graphiclarge/gold_textured_background_hd_picture_3_169654.jpg'
    ];
    $(this).css('background-image', 'url(' + Math.floor((Math.random() * ouro.length)+1) + ')');
    $(this).css('background-position', 'center center');
    $(this).css('background-size', 'cover');
    $(this).css('color', '#fff)');
  });
});
