import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryElement: document.querySelector(".gallery"),
};

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
     <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    </div>`;
  })
  .join("");

refs.galleryElement.insertAdjacentHTML("afterbegin", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionData: "alt",
  captionDelay: "250",
});
