import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("ul.gallery");

galleryItems.forEach((image) => {
  gallery.innerHTML += `<li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </li>`;
});

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  const dataSrc = e.target.getAttribute("data-source");

  e.target.src = dataSrc;

  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${e.target.src}">
	`
    )
    .show();
});

gallery.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    instance.close();
  }
});
