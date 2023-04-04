// Add imports above this line

import "simplelightbox/dist/simple-lightbox.min.css"
                
import { galleryItems } from './gallery-items';
// Change code below this line
import   SimpleLightbox from "simplelightbox";

const galleryEl = document.querySelector('.gallery');

const galleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<a
        href="${original}"
        title="${description}"
        ><img
          src="${preview}"
          alt="${description}"
      /></a>`;
  })
  .join('');
galleryEl.insertAdjacentHTML('beforeend', galleryItem);

// new SimpleLightbox({ elements: '.gallery a' });
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
  scrollZoom: false,
});