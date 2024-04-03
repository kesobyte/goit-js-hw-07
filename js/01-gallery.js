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

  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${e.target.src}">
	`
    )
    .show();

  console.log(e.target.src);
});

// selectedImage.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target.src);

// });
