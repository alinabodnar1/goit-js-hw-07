import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryLayout = galleryItems.map(({ preview, original, description }) => {

   return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;
}).join('');

gallery.insertAdjacentHTML('afterbegin', galleryLayout);

gallery.addEventListener('click', onClickOpenModal);


function onClickOpenModal(event) {

    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    showAndCloseModal(event);

} 

function showAndCloseModal(e) {

    const modal = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`);

    modal.show();

    document.addEventListener("keydown", e => {

        if (e.key === "Escape" || e.code === "Escape") {

            modal.close();
        }
    
    });
} 
