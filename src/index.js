

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


import API from './js/api-service'

const refForm = document.querySelector('#search-form')
const refDivGallery = document.querySelector('.gallery')

// const refFormInput = refForm.firstElementChild;

// const refDiv = document.querySelector('.bg-container')
const refLoadMore = document.querySelector('.load-more')

refForm.addEventListener('submit', handleForm)
refLoadMore.addEventListener('click',handleLoadMore)

const GalleryAPIServise = new API.GalleryAPIServise()

async function handleForm(evt) { 
    evt.preventDefault()
    const serchInput =  evt.target.elements.searchQuery.value
    if (!serchInput) {
        return
    } 
    GalleryAPIServise.request=serchInput; 
   
marcupSet(await GalleryAPIServise.fetchGallery())
    }       
async function handleLoadMore() { 
 
    marcupSet(await GalleryAPIServise.fetchGallery())

  
}
     function marcupSet(arr) {
         const marcup = arr.hits.map(el =>` 

  <a href="${el.largeImageURL}"><img src="${el.previewURL}" alt="" title="" loading="lazy"/></a> 
  <div class="info">
    <p class="info-item">s
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
        `
       ).join('');
        const markupPagination =  refDivGallery.insertAdjacentHTML('beforebegin', marcup)
         
    return galleryPagination(markupPagination)  
}   



function galleryPagination(markupPagination) { 
const gallery = new SimpleLightbox('.gallery a',
    {
        navText: ['←', '→'],
        captionsData: 'alt',
        animationSpeed: 1800,
        animationSlide: true,
        // swipeTolerance:50,
        // fadeSpeed:1200,
        captionDelay: 250,
    }
);   
}   
