"use strict";

var _galleryItems = require("./gallery-items.js");

var galleryBox = document.querySelector('.gallery-list');

var items = _galleryItems.galleryItems.map(function (_ref) {
  var preview = _ref.preview,
      original = _ref.original,
      description = _ref.description;
  return "<li class=\"gallery-item\"><a  class=\"gallery-img-wrapper\" href=\"".concat(original, "\"><img class=\"gallery-image\" src=\"").concat(preview, "\" alt=\"").concat(description, "\" /></a></li>");
}).join('');

galleryBox.insertAdjacentHTML('beforeend', items);
var images = new SimpleLightbox('.gallery-list a');
images.on('show.simplelightbox', function () {
  images.options.captionsData = "alt";
  images.options.captionsDelay = 250;
  images.options.scrollZoom = false;
  images.options.scrollZoomFactor = 0;
});