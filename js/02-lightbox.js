import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

const galleryLayout = galleryItems.map(({ preview, original, description }) => {

   return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}).join('');

gallery.insertAdjacentHTML('afterbegin', galleryLayout);

gallery.addEventListener('click', onClickOpenModal);

function onClickOpenModal(event) {

    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const lightbox = new SimpleLightbox('.gallery a',  {

        captionsData: "alt",
        captionDelay: "250",
        captionPosition: "bottom",
    });
    
}
    