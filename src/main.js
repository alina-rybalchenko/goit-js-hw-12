import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const formEl = document.querySelector('.form');
const inputEl = formEl.querySelector('input[name="search-text"]');

formEl.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const query = inputEl.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Enter a search query',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  inputEl.value = '';

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits.length) {
        iziToast.info({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);

      iziToast.success({
        title: 'Success',
        message: `Found ${data.hits.length} images`,
        position: 'topRight',
      });
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
