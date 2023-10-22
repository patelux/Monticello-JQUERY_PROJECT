import { galleryItems } from './gallery-items.js';

const galleryBox = document.querySelector('.gallery-list');

let items = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery-item"><a  class="gallery-img-wrapper" href="${original}"><img class="gallery-image" src="${preview}" alt="${description}" /></a></li>`;
}).join('');

galleryBox.insertAdjacentHTML('beforeend', items);

var images = new SimpleLightbox('.gallery-list a');
images.on('show.simplelightbox', function () {
    images.options.captionsData = "alt";
    images.options.captionsDelay = 250;
    images.options.scrollZoom = false;
    images.options.scrollZoomFactor = 0;
});