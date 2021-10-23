import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const onGallery = document.querySelector(`ul.gallery`)
const imagesMarkup = createImgCards(galleryItems)
onGallery.insertAdjacentHTML(`beforeend`, imagesMarkup)

function createImgCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item"><a href="${original}">
 <img class="gallery__image" src="${preview}" alt="${description}" />
 </a>
 </li>
`}).join(``)
}

onGallery.addEventListener(`click`, onOpenGalleryClick)

function onOpenGalleryClick(evt) {
    evt.preventDefault()
    const isGalleryImageEl = evt.target.classList.contains(`gallery__item`)
    if (!isGalleryImageEl) {
        return
    }
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250,
})