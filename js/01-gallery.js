import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const list = galleryItems
  .map(
    (galleryItems) =>
      `<a class="gallery__link" href='${galleryItems.original}'>
    <img
    class="gallery__image" 
    src='${galleryItems.preview}'
    alt='${galleryItems.description}' width="340"
    data-source='${galleryItems.original}'
    />
    </a>`
  )
  .join(" ");

galleryEl.insertAdjacentHTML("afterbegin", list);

galleryEl.addEventListener("click", onClick);
function onClick(event) {
  event.preventDefault();
  const originalSize = event.target.getAttribute("data-source");
  //console.log(event.currentTarget);

  const instance = basicLightbox.create(`
  <img src="${originalSize}">
  `);

  instance.show();
}
