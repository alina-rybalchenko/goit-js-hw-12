import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy"/>
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${image.likes}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${image.views}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${image.comments}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${image.downloads}</p>
          </div>
        </div>
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
