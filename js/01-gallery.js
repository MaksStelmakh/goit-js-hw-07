import { galleryItems } from './gallery-items.js';

// Change code below this line
const onGallery = document.querySelector(`div.gallery`)
const imagesMarkup = createImgCards(galleryItems)
onGallery.insertAdjacentHTML(`beforeend`, imagesMarkup)


function createImgCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return ` <div class="gallery__item">
      <a class="gallery__link" href="${original}">
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

onGallery.addEventListener(`click`, onOpenImagesClick)


function onOpenImagesClick(evt) {
  evt.preventDefault()
  const isGalleryImageEl = evt.target.classList.contains(`gallery__image`)
  if (!isGalleryImageEl) {
    return
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
  instance.show()
  
  window.addEventListener(`keydown`, closeModalForKeyboard)

  function closeModalForKeyboard(evt) {
    if (evt.code === `Escape`) {
      instance.close()
      deleteEventListener()
      }
  }
  
  function deleteEventListener() {
    window.removeEventListener(`keydown`, closeModalForKeyboard)
  }  
}