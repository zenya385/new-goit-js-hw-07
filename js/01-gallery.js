import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryElement: document.querySelector(".gallery"),
};

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src='${preview}'
          data-source='${original}'
          alt='${description}'
        />
      </a>
    </div>`;
  })
  .join("");

refs.galleryElement.insertAdjacentHTML("afterbegin", galleryMarkup);
let instance = null;
refs.galleryElement.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  const dataSource = e.target.dataset.source;
  instance = basicLightbox.create(`
	<img
  src='${dataSource}'
  width="800" heght='600'
  />
`);
  instance.show();
  // console.log(dataSource);
});
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") return instance.close();
});
