// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import LoadMore from './load-more'
const BTN = new LoadMore.LoadMore()

const BEST_URL = 'https://pixabay.com/api/';
const KEY = '34368263-756a5eb3a3e360b335b61bac8';
BTN.btnIsHidden()
class GalleryAPIServise {
    constructor() {
        this.requestApi = '';
        this.page = 1;
    }
    async fetchGallery() {
 BTN.btnDisabledSearch()
        try {
            
            const responce = await fetch(`${BEST_URL}/?key=${KEY}&q=${this.requestApi}&image_type=photo&orientation=horizontal&per_page=40,&page=${this.page}`)
        
            if (!responce.ok) {
                throw new Error(responce.statusText)
            }
            const data = await responce.json()
            this.incrementPage()
            return data
        } catch (e) { 
            console.log(e)
        }
    }
    get request() { 
        return this.requestApi
    }
    set request(newRequest) { 
         this.requestApi = newRequest
    }
    incrementPage() { 
        this.page+=1
    }

}        


export default { GalleryAPIServise };