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

    const closeModal = event => {

        if (event.key === "Escape" || event.code === "Escape") {

            modal.close();
        }
        
    }
    const modal = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`,

        {
            onShow: modal => {

                window.addEventListener('keydown', closeModal);
            },

            onClose: modal => {

                window.removeEventListener('keydown', closeModal);
            },
         
        });
    
    modal.show();
}
