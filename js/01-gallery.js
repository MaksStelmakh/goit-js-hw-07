import { galleryItems } from './gallery-items.js';

// Change code below this line
const onGallery = document.querySelector(`div.gallery`)
const imagesMarkup = createImgCards(galleryItems)
onGallery.insertAdjacentHTML(`beforeend`, imagesMarkup)


function createImgCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return ` <div class="gallery__item">
      <a class="gallery__link" href="${original}" >
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </div>
      `
    }).join(``)
}



onGallery.addEventListener(`click`, revent)

function instance() {
  basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)
  instance.show()
}



// .reventDefault()