import { galleryItems } from './gallery-items.js';

// Change code below this line
const onGallery = document.querySelector(`div.gallery`)
const imagesMarkup = createImgCards(galleryItems)
onGallery.insertAdjacentHTML(`beforeend`, imagesMarkup)

let currentIndex = 0

function createImgCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }, index) => {
        return ` <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index="${index}"
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
  currentIndex = Number(evt.target.dataset.index)
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
    // const { key } = evt
    if (evt.code === `Escape`) {
      instance.close();
      deleteEventListener()
    }
    if (evt.code === `ArrowLeft`) {
      currentIndex -= 1
       if (currentIndex <= 0) {
          currentIndex = galleryItems.length - 1;
       }
      instance.element().querySelector(`img`).src = galleryItems[currentIndex].original;
    }
    if (evt.code === `ArrowRight`) {
      currentIndex += 1;

      if (currentIndex >= galleryItems.length) {
          currentIndex = 0;
        }

        instance.element().querySelector(`img`).src = galleryItems[currentIndex].original;
    }
  }
  
  function deleteEventListener() {
    window.removeEventListener(`keydown`, closeModalForKeyboard)
  }  
}
