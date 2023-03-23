

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";



import LoadMore from './js/load-more'
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
       const marcup = arr.hits.map(({largeImageURL,previewURL,likes,views,comments}) =>` 
  <div class="photo-card">
  <div class="thumb">
    <a href="${largeImageURL}"><img src="${previewURL}" alt="" title="" loading="lazy"/></a> 
  </div>
  <div class="info">
    <p class="info-item">
      <b>Likes ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
  </div>
        `).join('');
        const markupPagination =  refDivGallery.insertAdjacentHTML('beforeend', marcup)
         
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

const btnEl = new LoadMore.LoadMore();

btnEl.btnDisable()

// console.log(btn);



