import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryMarkup = [...galleryItems]
  .map(image => {
    const imageSmall = image.preview;
    const imageLarge = image.original;
    const description = image.description;
    return `<div class="gallery__item">
            <a class="gallery__link" href="${imageLarge}">
                <img
                class="gallery__image"
                src="${imageSmall}"
                data-source="${imageLarge}"
                alt="${description}"
                />
            </a>
        </div>`;
  })
  .join('');

const galleryHTML = document.querySelector('.gallery');
galleryHTML.insertAdjacentHTML('beforeend', galleryMarkup);
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
