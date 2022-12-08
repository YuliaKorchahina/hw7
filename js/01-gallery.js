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
//------------------------------------style------------------------------------
galleryEl.style.display = "flex";
galleryEl.style.listStyle = "none";
galleryEl.style.justifyContent = "center";
galleryEl.style.flexWrap = "wrap";
// ------------------------------------2------------------------------------
galleryEl.addEventListener("click", onClick);
function onClick (event) {
  event.preventDefault();
  console.log(event.target);
  console.log(event.currentTarget);
 
};
